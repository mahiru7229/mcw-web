import React, { useState, useEffect } from 'react';
import { Download, Monitor, Terminal, FileCode, Check, Copy, Sparkles, Server, Zap, ShieldCheck } from 'lucide-react';
import { RELEASE_INFO } from '../data/releaseData';

export default function DownloadSection({ t }) {
  const [selectedServer, setSelectedServer] = useState('cdn'); // 'cdn' | 'github'
  const [detectedOS, setDetectedOS] = useState('windows');
  const [copiedHash, setCopiedHash] = useState(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) {
      setDetectedOS('windows');
    } else if (userAgent.includes('linux')) {
      setDetectedOS('linux');
    } else {
      setDetectedOS('windows');
    }
  }, []);

  const handleCopyHash = (hash, id) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(id);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const getDownloadUrl = (asset) => {
    return selectedServer === 'cdn' ? asset.cdnUrl : asset.githubUrl;
  };

  return (
    <section id="download" className="py-20 relative overflow-hidden bg-obsidian-950/80 cyber-grid">
      {/* Background Anime Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-anime-pink/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-neon/10 border border-cyber-neon/30 text-cyber-neon text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.download.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.download.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.download.subtitle}
          </p>

          {/* OS Badge & Server Selection */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            {/* Detected OS indicator */}
            <div className="text-xs font-mono text-slate-300 bg-obsidian-850 border border-white/10 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-anime-pink" />
              <span>{t.download.detected}</span>
              <strong className="text-anime-pink uppercase font-bold">{detectedOS}</strong>
            </div>

            {/* Server Selector Switch */}
            <div className="flex items-center bg-obsidian-900 border border-anime-pink/30 p-1 rounded-xl">
              <button
                onClick={() => setSelectedServer('cdn')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedServer === 'cdn'
                    ? 'bg-gradient-to-r from-anime-pink to-cyber-cyan text-white font-bold shadow-[0_0_15px_rgba(255,77,141,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{t.download.server_cdn}</span>
              </button>
              <button
                onClick={() => setSelectedServer('github')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedServer === 'github'
                    ? 'bg-obsidian-800 text-white font-bold border border-white/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span>{t.download.server_github}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Windows Installer */}
          <div className="glass-panel-glow rounded-2xl p-6 flex flex-col justify-between border border-anime-pink/40 relative group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-anime-pink/15 border border-anime-pink/30 text-anime-pink uppercase font-semibold">
                  RECOMMENDED // 推奨
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {RELEASE_INFO.downloads.windows.installer.size}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.download.windows_installer}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono truncate">
                {RELEASE_INFO.downloads.windows.installer.filename}
              </p>
              <p className="text-xs text-slate-300">
                Bộ cài đặt hoàn chỉnh cho Windows 10 & 11 (x64), tự động tạo shortcut màn hình và cập nhật nền an toàn.
              </p>

              {/* SHA256 copy */}
              {RELEASE_INFO.downloads.windows.installer.sha256 && (
                <div className="pt-1">
                  <button
                    onClick={() => handleCopyHash(RELEASE_INFO.downloads.windows.installer.sha256, 'win-inst')}
                    className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-anime-pink transition-colors"
                  >
                    {copiedHash === 'win-inst' ? (
                      <Check className="w-3 h-3 text-cyber-neon" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>{copiedHash === 'win-inst' ? t.download.copied : t.download.copy_sha256}</span>
                  </button>
                </div>
              )}
            </div>

            <div className="pt-5 mt-5 border-t border-white/10">
              <a
                href={getDownloadUrl(RELEASE_INFO.downloads.windows.installer)}
                className="w-full py-3 rounded-xl font-bold text-xs tracking-wide bg-gradient-to-r from-anime-pink via-cyber-purple to-cyber-cyan text-white flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,77,141,0.5)] transition-all uppercase"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Tải Bản Cài Đặt (.exe)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Windows Portable One-file */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-anime-pink/40 transition-all relative group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-purple/15 border border-cyber-purple/30 text-cyber-purple uppercase font-semibold">
                  PORTABLE ONE-FILE // 単体
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {RELEASE_INFO.downloads.windows.portable.size}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.download.windows_portable}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono truncate">
                {RELEASE_INFO.downloads.windows.portable.filename}
              </p>
              <p className="text-xs text-slate-300">
                Tệp thực thi duy nhất, không cần cài đặt. Tải về và khởi chạy ngay từ USB hoặc thư mục bất kỳ.
              </p>

              {RELEASE_INFO.downloads.windows.portable.sha256 && (
                <div className="pt-1">
                  <button
                    onClick={() => handleCopyHash(RELEASE_INFO.downloads.windows.portable.sha256, 'win-port')}
                    className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-anime-pink transition-colors"
                  >
                    {copiedHash === 'win-port' ? (
                      <Check className="w-3 h-3 text-cyber-neon" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>{copiedHash === 'win-port' ? t.download.copied : t.download.copy_sha256}</span>
                  </button>
                </div>
              )}
            </div>

            <div className="pt-5 mt-5 border-t border-white/10">
              <a
                href={getDownloadUrl(RELEASE_INFO.downloads.windows.portable)}
                className="w-full py-3 rounded-xl font-semibold text-xs tracking-wide bg-obsidian-850 hover:bg-obsidian-800 text-white border border-white/10 hover:border-anime-pink/40 flex items-center justify-center gap-2 transition-all uppercase"
              >
                <Download className="w-4 h-4 text-anime-pink" />
                <span>Tải Portable (.exe)</span>
              </a>
            </div>
          </div>

          {/* Card 3: Linux & Core */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-cyber-cyan/40 transition-all relative group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-cyber-neon uppercase font-semibold">
                  LINUX & DEVS // 開発
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {RELEASE_INFO.downloads.linux.binary.size}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.download.linux_binary}
              </h3>
              <p className="text-[11px] text-slate-400 font-mono truncate">
                {RELEASE_INFO.downloads.linux.binary.filename}
              </p>
              <p className="text-xs text-slate-300">
                Thực thi độc lập trên Linux (Ubuntu, Debian, Fedora, Arch). Hỗ trợ Python SDK wheel cho lập trình viên.
              </p>

              {/* Core wheel quick link */}
              <div className="pt-1 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Python Core Wheel:</span>
                  <a
                    href={getDownloadUrl(RELEASE_INFO.downloads.core.wheel)}
                    className="text-cyan-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>mcw-core.whl</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10">
              <a
                href={getDownloadUrl(RELEASE_INFO.downloads.linux.binary)}
                className="w-full py-3 rounded-xl font-semibold text-xs tracking-wide bg-obsidian-850 hover:bg-obsidian-800 text-white border border-white/10 hover:border-cyan-500/40 flex items-center justify-center gap-2 transition-all uppercase"
              >
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <span>Tải Bản Linux (x64)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Concise Changelog Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-5 sm:p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-anime-pink" />
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide">
                CHANGELOG // v1.6.1 STABLE HIGHLIGHTS
              </h3>
            </div>
            <a
              href="https://github.com/mahiru7229/mcw-launcher/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-cyan-400 hover:text-white transition-colors"
            >
              Full CHANGELOG.md &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELEASE_INFO.changelog.map((item, index) => (
              <div key={index} className="space-y-1 bg-obsidian-950/60 p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${
                      item.type === 'feat'
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : item.type === 'fix'
                        ? 'bg-anime-pink/20 text-anime-pink'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}
                  >
                    {item.type}
                  </span>
                  <h4 className="font-bold text-xs text-white truncate">{item.title_vi}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                  {item.desc_vi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
