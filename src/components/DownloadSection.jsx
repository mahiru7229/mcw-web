import React, { useState, useEffect } from 'react';
import { Download, Copy, Check, ShieldCheck, ExternalLink, Zap, Terminal, Server, ChevronDown, ChevronUp } from 'lucide-react';
import { RELEASE_INFO } from '../data/releaseData';

export default function DownloadSection({ t }) {
  const [detectedOs, setDetectedOs] = useState('windows');
  const [copiedSha, setCopiedSha] = useState(null);
  const [showChangelog, setShowChangelog] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('linux')) {
      setDetectedOs('linux');
    } else {
      setDetectedOs('windows');
    }
  }, []);

  const handleCopySha = (sha, key) => {
    navigator.clipboard.writeText(sha);
    setCopiedSha(key);
    setTimeout(() => setCopiedSha(null), 2500);
  };

  const winInfo = RELEASE_INFO.downloads.windows.archive;
  const linuxInfo = RELEASE_INFO.downloads.linux.archive;
  const coreInfo = RELEASE_INFO.downloads.core.wheel;

  return (
    <section id="download" className="relative py-24 overflow-hidden bg-base-900/40 border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-cyan/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-emerald/10 text-sky-emerald text-xs font-mono font-semibold mb-3 border border-sky-emerald/20">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.download.tag}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-sans">
            {t.download.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans mb-4">
            {t.download.subtitle}
          </p>

          {/* Edge Server Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-base-900 border border-white/10 text-xs font-mono text-slate-300">
            <Server className="w-3.5 h-3.5 text-sky-cyan" />
            <span>Asia Edge CDN: <strong>Hồng Kông & Singapore (Cloudflare)</strong></span>
          </div>
        </div>

        {/* 3 Download Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Windows Download Card */}
          <div
            className={`glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative transition-all duration-300 ${
              detectedOs === 'windows'
                ? 'border-sky-cyan/50 shadow-[0_0_40px_rgba(114,216,255,0.15)] ring-1 ring-sky-cyan/40'
                : 'hover:border-white/20'
            }`}
          >
            {detectedOs === 'windows' && (
              <span className="absolute -top-3 left-6 text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-sky-cyan text-base-950 uppercase shadow-md">
                Phù hợp với thiết bị của bạn
              </span>
            )}

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white font-sans">
                    {t.download.win_title}
                  </h3>
                  <div className="text-xs text-sky-cyan font-mono mt-1 font-semibold">
                    {t.download.win_format}
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-base-800 text-slate-300 border border-white/5">
                  {winInfo.size}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed font-sans">
                Phiên bản {RELEASE_INFO.version} chính thức cho Windows 10 & 11 (64-bit). Tệp ZIP giải nén chạy ngay, không cần cài đặt.
              </p>

              {/* Download Buttons */}
              <div className="space-y-2.5 mb-6">
                <a
                  href={winInfo.cdnUrl}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs tracking-wide bg-gradient-to-r from-sky-cyan to-sky-purple text-base-950 hover:shadow-[0_0_25px_rgba(114,216,255,0.4)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.download.btn_cdn}</span>
                </a>

                <a
                  href={winInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-base-900 hover:bg-base-850 border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.download.btn_github}</span>
                </a>
              </div>
            </div>

            {/* Checksum SHA-256 Box */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>{t.download.checksum_label}</span>
                <button
                  onClick={() => handleCopySha(winInfo.sha256, 'win')}
                  className="text-sky-cyan hover:underline flex items-center gap-1"
                >
                  {copiedSha === 'win' ? <Check className="w-3 h-3 text-sky-emerald" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSha === 'win' ? t.download.copied : t.download.copy_checksum}</span>
                </button>
              </div>
              <div className="p-2 rounded-lg bg-base-950/80 border border-white/5 font-mono text-[10px] text-slate-400 truncate select-all">
                {winInfo.sha256}
              </div>
            </div>
          </div>

          {/* Linux Download Card */}
          <div
            className={`glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between relative transition-all duration-300 ${
              detectedOs === 'linux'
                ? 'border-sky-cyan/50 shadow-[0_0_40px_rgba(114,216,255,0.15)] ring-1 ring-sky-cyan/40'
                : 'hover:border-white/20'
            }`}
          >
            {detectedOs === 'linux' && (
              <span className="absolute -top-3 left-6 text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-sky-cyan text-base-950 uppercase shadow-md">
                Phù hợp với thiết bị của bạn
              </span>
            )}

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white font-sans">
                    {t.download.linux_title}
                  </h3>
                  <div className="text-xs text-sky-cyan font-mono mt-1 font-semibold">
                    {t.download.linux_format}
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-base-800 text-slate-300 border border-white/5">
                  {linuxInfo.size}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed font-sans">
                Tương thích hoàn hảo Ubuntu, Fedora, Arch Linux (glibc 2.35+). Đóng gói độc lập, không yêu cầu phụ thuộc phức tạp.
              </p>

              {/* Download Buttons */}
              <div className="space-y-2.5 mb-6">
                <a
                  href={linuxInfo.cdnUrl}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs tracking-wide bg-gradient-to-r from-sky-purple to-sky-pink text-base-950 hover:shadow-[0_0_25px_rgba(240,167,216,0.4)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.download.btn_cdn}</span>
                </a>

                <a
                  href={linuxInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-base-900 hover:bg-base-850 border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.download.btn_github}</span>
                </a>
              </div>
            </div>

            {/* Checksum SHA-256 Box */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>{t.download.checksum_label}</span>
                <button
                  onClick={() => handleCopySha(linuxInfo.sha256, 'linux')}
                  className="text-sky-cyan hover:underline flex items-center gap-1"
                >
                  {copiedSha === 'linux' ? <Check className="w-3 h-3 text-sky-emerald" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSha === 'linux' ? t.download.copied : t.download.copy_checksum}</span>
                </button>
              </div>
              <div className="p-2 rounded-lg bg-base-950/80 border border-white/5 font-mono text-[10px] text-slate-400 truncate select-all">
                {linuxInfo.sha256}
              </div>
            </div>
          </div>

          {/* MCW Core Python SDK Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white font-sans">
                    {t.download.core_title}
                  </h3>
                  <div className="text-xs text-sky-emerald font-mono mt-1 font-semibold">
                    {t.download.core_format}
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-base-800 text-slate-300 border border-white/5">
                  {coreInfo.size}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed font-sans">
                Thư viện Headless Core thuần Python (`mcw_core`) dành cho nhà phát triển, công cụ tự động hóa hoặc server quản lý instance.
              </p>

              {/* Pip Command Box */}
              <div className="p-3 rounded-xl bg-base-950/90 border border-white/10 mb-6 font-mono text-xs">
                <div className="text-[10px] text-slate-500 mb-1">Cài đặt trực tiếp qua pip:</div>
                <div className="text-sky-emerald flex items-center justify-between">
                  <span>pip install mcw_core</span>
                  <button
                    onClick={() => handleCopySha("pip install mcw_core", 'pip')}
                    className="p-1 hover:text-white"
                    title="Copy command"
                  >
                    {copiedSha === 'pip' ? <Check className="w-3.5 h-3.5 text-sky-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2.5 mb-6">
                <a
                  href={coreInfo.cdnUrl}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wide bg-base-800 hover:bg-base-750 text-white border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-sky-emerald" />
                  <span>Tải Wheel Package (.whl)</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Public API:</span>
              <span className="text-sky-cyan">mcw_core.api.*</span>
            </div>
          </div>
        </div>

        {/* Toggle Changelog Drawer */}
        <div className="text-center">
          <button
            onClick={() => setShowChangelog(!showChangelog)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-base-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
          >
            <span>{t.download.view_changelog}</span>
            {showChangelog ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showChangelog && (
            <div className="mt-6 max-w-3xl mx-auto glass-panel p-6 rounded-2xl text-left border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-white font-sans border-b border-white/10 pb-3">
                {t.download.changelog_title}
              </h4>
              <div className="space-y-4">
                {RELEASE_INFO.changelog.map((c, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded font-bold uppercase bg-sky-cyan/15 text-sky-cyan">
                        {c.type}
                      </span>
                      <span className="text-xs font-bold text-white font-sans">{c.title_vi}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-12 font-sans">{c.desc_vi}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
