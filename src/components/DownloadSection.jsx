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
    <section id="download" className="py-24 relative overflow-hidden bg-obsidian-950/80 cyber-grid">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyber-cyan/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-neon/10 border border-cyber-neon/30 text-cyber-neon text-xs font-mono font-semibold">
            {t.download.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.download.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.download.subtitle}
          </p>

          {/* OS Badge & Server Selection */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Detected OS indicator */}
            <div className="text-xs font-mono text-slate-300 bg-obsidian-850 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
              <Monitor className="w-4 h-4 text-cyber-cyan" />
              <span>{t.download.detected}</span>
              <strong className="text-cyber-cyan uppercase font-bold">{detectedOS}</strong>
            </div>

            {/* Server Selector Switch */}
            <div className="flex items-center bg-obsidian-900 border border-cyan-500/30 p-1 rounded-xl">
              <button
                onClick={() => setSelectedServer('cdn')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedServer === 'cdn'
                    ? 'bg-gradient-to-r from-cyber-cyan to-cyber-neon text-obsidian-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>CDN Việt Nam</span>
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
                <span>GitHub Releases</span>
              </button>
            </div>
          </div>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Windows Installer */}
          <div className="glass-panel-glow rounded-2xl p-7 flex flex-col justify-between border border-cyan-500/40 relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyber-cyan uppercase">
                  Windows Recommended
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {RELEASE_INFO.downloads.windows.installer.size}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.download.windows_installer}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {RELEASE_INFO.downloads.windows.installer.filename}
              </p>
              <p className="text-sm text-slate-300">
                Bộ cài đặt hoàn chỉnh cho Windows 10 và 11 (x64), tự động tạo shortcut và cập nhật nền.
              </p>

              {/* SHA256 copy */}
              {RELEASE_INFO.downloads.windows.installer.sha256 && (
                <div className="pt-2">
                  <button
                    onClick={() => handleCopyHash(RELEASE_INFO.downloads.windows.installer.sha256, 'win-inst')}
                    className="flex items-center gap-2 text-[11px] font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
                  >
                    {copiedHash === 'win-inst' ? (
                      <Check className="w-3.5 h-3.5 text-cyber-neon" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedHash === 'win-inst' ? t.download.copied : t.download.copy_sha256}</span>
                  </button>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={getDownloadUrl(RELEASE_INFO.downloads.windows.installer)}
                className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-cyber-cyan to-cyan-400 hover:to-cyber-neon text-obsidian-950 flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
              >
                <Download className="w-4 h-4 text-obsidian-950" />
                <span>Tải Bản Cài Đặt (.exe)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Windows Portable One-file */}
          <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-cyber-purple uppercase">
                  Portable One-File
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {RELEASE_INFO.downloads.windows.portable.size}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.download.windows_portable}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {RELEASE_INFO.downloads.windows.portable.filename}
              </p>
              <p className="text-sm text-slate-300">
                Tệp thực thi duy nhất, không cần cài đặt. Chỉ cần tải về và chạy ngay trên USB hoặc ổ đĩa bất kỳ.
              </p>

              {RELEASE_INFO.downloads.windows.portable.sha256 && (
                <div className="pt-2">
                  <button
                    onClick={() => handleCopyHash(RELEASE_INFO.downloads.windows.portable.sha256, 'win-port')}
                    className="flex items-center gap-2 text-[11px] font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
                  >
                    {copiedHash === 'win-port' ? (
                      <Check className="w-3.5 h-3.5 text-cyber-neon" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedHash === 'win-port' ? t.download.copied : t.download.copy_sha256}</span>
                  </button>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={getDownloadUrl(RELEASE_INFO.downloads.windows.portable)}
                className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-obsidian-850 hover:bg-obsidian-800 text-white border border-white/10 hover:border-cyan-500/40 flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-cyber-cyan" />
                <span>Tải Portable (.exe)</span>
              </a>
            </div>
          </div>

          {/* Card 3: Linux & Core */}
          <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-cyber-neon uppercase">
                  Linux & Developers
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {RELEASE_INFO.downloads.linux.binary.size}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.download.linux_binary}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {RELEASE_INFO.downloads.linux.binary.filename}
              </p>
              <p className="text-sm text-slate-300">
                Bản thực thi độc lập cho Linux x64 (Ubuntu, Debian, Fedora, Arch...). Hỗ trợ tự động cập nhật.
              </p>

              {/* Core wheel quick link */}
              <div className="pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Python Core Wheel:</span>
                  <a
                    href={getDownloadUrl(RELEASE_INFO.downloads.core.wheel)}
                    className="text-cyber-cyan hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>mcw-core.whl ({RELEASE_INFO.downloads.core.wheel.size})</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={getDownloadUrl(RELEASE_INFO.downloads.linux.binary)}
                className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-obsidian-850 hover:bg-obsidian-800 text-white border border-white/10 hover:border-emerald-500/40 flex items-center justify-center gap-2 transition-all"
              >
                <Terminal className="w-4 h-4 text-cyber-neon" />
                <span>Tải Bản Linux (x64)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Changelog Highlights Accordion */}
        <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-cyber-cyan" />
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide">
                Changelog Highlights — v1.6.1 Stable
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELEASE_INFO.changelog.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                      item.type === 'feat'
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : item.type === 'fix'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}
                  >
                    {item.type}
                  </span>
                  <h4 className="font-bold text-sm text-white">{item.title_vi}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
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
