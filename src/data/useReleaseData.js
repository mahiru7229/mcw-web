import { useState, useEffect } from 'react';
import { STABLE_RELEASE, BETA_RELEASE } from './releaseData';

const CDN_RELEASES_URL = 'https://mcw-download.pages.dev/releases/manifest.json';
const GITHUB_RELEASES_URL = 'https://api.github.com/repos/mahiru7229/mcw-launcher/releases';

const formatSize = (bytes) => {
  if (!bytes || bytes <= 0) return null;
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
};

function parseRelease(latest, baseline) {
  if (!latest) return baseline;
  const tag = latest.tag_name || baseline.version;
  const versionId = tag.replace(/^v/, '');
  const releaseDate = latest.published_at ? latest.published_at.split('T')[0] : baseline.releaseDate;
  const channel = latest.prerelease ? 'beta' : 'stable';

  const assets = latest.assets || [];
  const winAsset = assets.find(a => a.name.toLowerCase().includes('windows-x64.zip'));
  const linuxAsset = assets.find(a => a.name.toLowerCase().includes('linux-x64.zip'));
  const coreAsset = assets.find(a => a.name.toLowerCase().endsWith('.whl'));

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
          size: winAsset ? formatSize(winAsset.size) : baseline.downloads.windows.archive.size,
          cdnUrl: `https://mcw-download.pages.dev/releases/${tag}/${winFilename}`,
          githubUrl: winAsset?.browser_download_url || `https://github.com/mahiru7229/mcw-launcher/releases/download/${tag}/${winFilename}`,
        }
      },
      linux: {
        archive: {
          filename: linuxFilename,
          size: linuxAsset ? formatSize(linuxAsset.size) : baseline.downloads.linux.archive.size,
          cdnUrl: `https://mcw-download.pages.dev/releases/${tag}/${linuxFilename}`,
          githubUrl: linuxAsset?.browser_download_url || `https://github.com/mahiru7229/mcw-launcher/releases/download/${tag}/${linuxFilename}`,
        }
      },
      core: {
        wheel: {
          filename: coreFilename,
          size: coreAsset ? formatSize(coreAsset.size) : baseline.downloads.core.wheel.size,
          cdnUrl: `https://mcw-download.pages.dev/releases/${tag}/${coreFilename}`,
          githubUrl: coreAsset?.browser_download_url || (latest.html_url || `https://github.com/mahiru7229/mcw-launcher/releases/tag/${tag}`),
        }
      }
    }
  };
}

function isNewer(tagA, tagB) {
  if (!tagA) return false;
  if (!tagB) return true;
  const cleanA = String(tagA).replace(/^v/, '');
  const cleanB = String(tagB).replace(/^v/, '');
  const parse = (v) => {
    const [main, pre] = v.split('-');
    const parts = (main || '').split('.').map(n => parseInt(n, 10) || 0);
    return { parts, pre: pre || '' };
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
  const [betaRelease, setBetaRelease] = useState(BETA_RELEASE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchReleases() {
      let releases = null;

      // 1. Prioritize Cloudflare Edge CDN
      try {
        const cdnController = new AbortController();
        const cdnTimeout = setTimeout(() => cdnController.abort(), 4000);
        const cdnRes = await fetch(CDN_RELEASES_URL, {
          headers: { 'Accept': 'application/json' },
          signal: cdnController.signal,
        });
        clearTimeout(cdnTimeout);

        if (cdnRes.ok) {
          const payload = await cdnRes.json();
          const items = Array.isArray(payload) ? payload : (payload.releases || payload.active_releases || []);
          if (Array.isArray(items) && items.length > 0) {
            releases = items;
          }
        }
      } catch (cdnErr) {
        console.warn('Cloudflare CDN release lookup failed, falling back to GitHub:', cdnErr);
      }

      // Check if CDN manifest has the newest known beta (BETA_RELEASE.version)
      const cdnBeta = releases ? releases.find(r => r.prerelease) : null;
      const needsGitHubFallback = !releases || !cdnBeta || isNewer(BETA_RELEASE.version, cdnBeta.tag_name);

      // 2. Fallback to GitHub API if CDN lacks latest releases
      if (needsGitHubFallback) {
        try {
          const ghController = new AbortController();
          const ghTimeout = setTimeout(() => ghController.abort(), 5000);
          const ghRes = await fetch(GITHUB_RELEASES_URL, {
            headers: { 'Accept': 'application/vnd.github.v3+json' },
            signal: ghController.signal,
          });
          clearTimeout(ghTimeout);

          if (ghRes.ok) {
            const ghPayload = await ghRes.json();
            if (Array.isArray(ghPayload) && ghPayload.length > 0) {
              if (!releases) {
                releases = ghPayload;
              } else {
                const ghBeta = ghPayload.find(r => r.prerelease);
                if (ghBeta && (!cdnBeta || isNewer(ghBeta.tag_name, cdnBeta.tag_name))) {
                  releases = [ghBeta, ...releases.filter(r => !r.prerelease)];
                }
              }
            }
          }
        } catch (ghErr) {
          console.warn('GitHub API release lookup failed:', ghErr);
        }
      }

      if (cancelled) return;

      if (Array.isArray(releases) && releases.length > 0) {
        const foundStable = releases.find(r => !r.prerelease);
        const foundBeta = releases.find(r => r.prerelease);

        if (foundStable) {
          setStableRelease(prev => (!prev || isNewer(foundStable.tag_name, prev.version) ? parseRelease(foundStable, STABLE_RELEASE) : prev));
        }
        if (foundBeta) {
          setBetaRelease(prev => (!prev || !isNewer(prev.version, foundBeta.tag_name) ? parseRelease(foundBeta, BETA_RELEASE) : prev));
        }
      }

      setLoading(false);
    }

    fetchReleases();

    return () => {
      cancelled = true;
    };
  }, []);

  const release = (channel === 'beta' && betaRelease) ? betaRelease : (stableRelease || betaRelease);

  return { release, stableRelease, betaRelease, channel, setChannel, loading };
}
