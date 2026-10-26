import { useState, useEffect } from 'react';
import { STABLE_RELEASE } from './releaseData';

const CDN_RELEASES_URL = 'https://mcw-download.pages.dev/releases/manifest.json';
const GITHUB_RELEASES_URL = 'https://api.github.com/repos/mahiru7229/mcw-launcher/releases?per_page=15';

const formatSize = (bytes) => {
  if (!bytes || bytes <= 0) return null;
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
};

function findMainPlatformZip(assets, suffix) {
  if (!Array.isArray(assets)) return null;
  const target = suffix.toLowerCase();
  return (
    assets.find((a) => {
      const name = String(a?.name || '').toLowerCase();
      return name.endsWith(target) && !name.includes('legacy') && !name.includes('bridge');
    }) || null
  );
}

function resolveGitHubDownloadUrl(asset, tag, filename) {
  if (Array.isArray(asset?.mirror_urls)) {
    const ghMirror = asset.mirror_urls.find((u) => typeof u === 'string' && u.includes('github.com/'));
    if (ghMirror) return ghMirror;
  }
  if (typeof asset?.browser_download_url === 'string' && asset.browser_download_url.includes('github.com/')) {
    return asset.browser_download_url;
  }
  return `https://github.com/mahiru7229/mcw-launcher/releases/download/${tag}/${filename}`;
}

function parseRelease(latest, baseline) {
  if (!latest) return baseline;
  const tag = latest.tag_name || baseline.version;
  const versionId = tag.replace(/^v/i, '');
  const releaseDate = latest.published_at ? latest.published_at.split('T')[0] : baseline.releaseDate;
  const channel = latest.prerelease ? 'beta' : 'stable';

  const assets = Array.isArray(latest.assets) ? latest.assets : [];
  const winAsset = findMainPlatformZip(assets, '-windows-x64.zip');
  const linuxAsset = findMainPlatformZip(assets, '-linux-x64.zip');
  const coreAsset = assets.find((a) => String(a?.name || '').toLowerCase().endsWith('.whl'));

  const winFilename = winAsset ? winAsset.name : `MCW-Launcher-${tag}-windows-x64.zip`;
  const linuxFilename = linuxAsset ? linuxAsset.name : `MCW-Launcher-${tag}-linux-x64.zip`;
  const coreFilename = coreAsset ? coreAsset.name : `mcw_core-${versionId}-py3-none-any.whl`;

  return {
    ...baseline,
    version: tag,
    versionId: versionId,
    releaseDate: releaseDate,
    channel: channel,
    releaseNotes: latest.body || latest.notes || baseline.releaseNotes || '',
    downloads: {
      windows: {
        archive: {
          filename: winFilename,
          size: (winAsset && formatSize(winAsset.size)) || baseline.downloads.windows.archive.size,
          cdnUrl: `https://mcw-download.pages.dev/releases/${tag}/${winFilename}`,
          githubUrl: resolveGitHubDownloadUrl(winAsset, tag, winFilename),
        },
      },
      linux: {
        archive: {
          filename: linuxFilename,
          size: (linuxAsset && formatSize(linuxAsset.size)) || baseline.downloads.linux.archive.size,
          cdnUrl: `https://mcw-download.pages.dev/releases/${tag}/${linuxFilename}`,
          githubUrl: resolveGitHubDownloadUrl(linuxAsset, tag, linuxFilename),
        },
      },
      core: {
        wheel: {
          filename: coreFilename,
          size: (coreAsset && formatSize(coreAsset.size)) || baseline.downloads.core.wheel.size,
          cdnUrl: `https://mcw-download.pages.dev/releases/${tag}/${coreFilename}`,
          githubUrl:
            (coreAsset && resolveGitHubDownloadUrl(coreAsset, tag, coreFilename)) ||
            latest.html_url ||
            `https://github.com/mahiru7229/mcw-launcher/releases/tag/${tag}`,
        },
      },
    },
  };
}

export function isNewer(tagA, tagB) {
  if (!tagA) return false;
  if (!tagB) return true;
  const cleanA = String(tagA).replace(/^v/i, '');
  const cleanB = String(tagB).replace(/^v/i, '');
  const parse = (v) => {
    const [main, ...preParts] = v.split('-');
    const parts = (main || '').split('.').map((n) => parseInt(n, 10) || 0);
    return { parts, pre: preParts.join('-') || '' };
  };
  const pa = parse(cleanA);
  const pb = parse(cleanB);
  for (let i = 0; i < Math.max(pa.parts.length, pb.parts.length); i++) {
    const na = pa.parts[i] || 0;
    const nb = pb.parts[i] || 0;
    if (na > nb) return true;
    if (na < nb) return false;
  }
  if (!pa.pre && pb.pre) return true;
  if (pa.pre && !pb.pre) return false;
  return pa.pre.localeCompare(pb.pre, undefined, { numeric: true }) > 0;
}

export function useReleaseData() {
  const [channel, setChannel] = useState('stable');
  const [stableRelease, setStableRelease] = useState(STABLE_RELEASE);
  const [betaRelease, setBetaRelease] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchReleases() {
      const mergedByTag = new Map();

      // 1. Fetch from Cloudflare Edge CDN manifest
      try {
        const cdnController = new AbortController();
        const cdnTimeout = setTimeout(() => cdnController.abort(), 4000);
        const cdnRes = await fetch(CDN_RELEASES_URL, {
          headers: { Accept: 'application/json' },
          signal: cdnController.signal,
        });
        clearTimeout(cdnTimeout);

        if (cdnRes.ok) {
          const payload = await cdnRes.json();
          const items = Array.isArray(payload) ? payload : payload.releases || payload.active_releases || [];
          if (Array.isArray(items)) {
            for (const item of items) {
              if (item && item.tag_name && !item.draft) {
                mergedByTag.set(item.tag_name, item);
              }
            }
          }
        }
      } catch (cdnErr) {
        console.warn('Cloudflare CDN release lookup failed, falling back to GitHub:', cdnErr);
      }

      // 2. Also query GitHub API so newly published Stable or Beta releases are always picked up immediately
      try {
        const ghController = new AbortController();
        const ghTimeout = setTimeout(() => ghController.abort(), 5000);
        const ghRes = await fetch(GITHUB_RELEASES_URL, {
          headers: { Accept: 'application/vnd.github+json' },
          signal: ghController.signal,
        });
        clearTimeout(ghTimeout);

        if (ghRes.ok) {
          const ghPayload = await ghRes.json();
          if (Array.isArray(ghPayload)) {
            for (const ghItem of ghPayload) {
              if (ghItem && ghItem.tag_name && !ghItem.draft && Array.isArray(ghItem.assets) && ghItem.assets.length > 0) {
                mergedByTag.set(ghItem.tag_name, ghItem);
              }
            }
          }
        }
      } catch (ghErr) {
        console.warn('GitHub API release lookup failed:', ghErr);
      }

      if (cancelled) return;

      const sortedReleases = Array.from(mergedByTag.values()).sort((a, b) =>
        isNewer(a.tag_name, b.tag_name) ? -1 : isNewer(b.tag_name, a.tag_name) ? 1 : 0
      );

      if (sortedReleases.length > 0) {
        const foundStable = sortedReleases.find((r) => !r.prerelease);
        const foundBeta = sortedReleases.find((r) => r.prerelease);

        let nextStable = STABLE_RELEASE;
        if (foundStable && !isNewer(STABLE_RELEASE.version, foundStable.tag_name)) {
          nextStable = parseRelease(foundStable, STABLE_RELEASE);
          setStableRelease(nextStable);
        }

        // Only expose a Beta release option when there is an active Beta strictly newer than the latest Stable release
        if (foundBeta && isNewer(foundBeta.tag_name, nextStable.version)) {
          setBetaRelease(parseRelease(foundBeta, STABLE_RELEASE));
        } else {
          setBetaRelease(null);
          setChannel('stable');
        }
      }

      setLoading(false);
    }

    fetchReleases();

    return () => {
      cancelled = true;
    };
  }, []);

  const release = channel === 'beta' && betaRelease ? betaRelease : stableRelease;

  return { release, stableRelease, betaRelease, channel, setChannel, loading };
}
