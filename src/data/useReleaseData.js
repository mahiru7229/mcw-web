import { useState, useEffect } from 'react';
import { RELEASE_INFO } from './releaseData';

export function useReleaseData() {
  const [release, setRelease] = useState(RELEASE_INFO);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const res = await fetch('https://api.github.com/repos/mahiru7229/mcw-launcher/releases');
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        const releases = await res.json();
        if (!Array.isArray(releases) || releases.length === 0) return;

        const latest = releases[0];
        const tag = latest.tag_name || RELEASE_INFO.version;
        const versionId = tag.replace(/^v/, '');
        const releaseDate = latest.published_at ? latest.published_at.split('T')[0] : RELEASE_INFO.releaseDate;
        const channel = latest.prerelease ? 'beta' : 'stable';

        const assets = latest.assets || [];
        const winAsset = assets.find(a => a.name.toLowerCase().includes('windows-x64.zip'));
        const linuxAsset = assets.find(a => a.name.toLowerCase().includes('linux-x64.zip'));
        const coreAsset = assets.find(a => a.name.toLowerCase().endsWith('.whl'));

        const formatSize = (bytes) => {
          if (!bytes || bytes <= 0) return null;
          const mb = bytes / (1024 * 1024);
          return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
        };

        setRelease(prev => ({
          ...prev,
          version: tag,
          versionId: versionId,
          releaseDate: releaseDate,
          channel: channel,
          releaseNotes: latest.body || '',
          downloads: {
            windows: {
              archive: {
                filename: winAsset ? winAsset.name : `MCW-Launcher-${tag}-windows-x64.zip`,
                size: winAsset ? formatSize(winAsset.size) : prev.downloads.windows.archive.size,
                githubUrl: winAsset ? winAsset.browser_download_url : `https://github.com/mahiru7229/mcw-launcher/releases/tag/${tag}`,
                cdnUrl: winAsset ? `https://mcw-download.pages.dev/releases/${tag}/${winAsset.name}` : `https://mcw-download.pages.dev/releases/${tag}/MCW-Launcher-${tag}-windows-x64.zip`,
              }
            },
            linux: {
              archive: {
                filename: linuxAsset ? linuxAsset.name : `MCW-Launcher-${tag}-linux-x64.zip`,
                size: linuxAsset ? formatSize(linuxAsset.size) : prev.downloads.linux.archive.size,
                githubUrl: linuxAsset ? linuxAsset.browser_download_url : `https://github.com/mahiru7229/mcw-launcher/releases/tag/${tag}`,
                cdnUrl: linuxAsset ? `https://mcw-download.pages.dev/releases/${tag}/${linuxAsset.name}` : `https://mcw-download.pages.dev/releases/${tag}/MCW-Launcher-${tag}-linux-x64.zip`,
              }
            },
            core: {
              wheel: {
                filename: coreAsset ? coreAsset.name : `mcw_core-${versionId}-py3-none-any.whl`,
                size: coreAsset ? formatSize(coreAsset.size) : prev.downloads.core.wheel.size,
                githubUrl: coreAsset ? coreAsset.browser_download_url : `https://github.com/mahiru7229/mcw-launcher/releases/tag/${tag}`,
                cdnUrl: coreAsset ? `https://mcw-download.pages.dev/releases/${tag}/${coreAsset.name}` : `https://mcw-download.pages.dev/releases/${tag}/mcw_core-${versionId}-py3-none-any.whl`,
              }
            }
          }
        }));
      } catch (err) {
        console.warn('Fallback to baseline release data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestRelease();
  }, []);

  return { release, loading };
}
