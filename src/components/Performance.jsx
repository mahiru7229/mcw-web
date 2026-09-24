import React, { useState } from 'react';
import { Terminal, Copy, Check, ShieldCheck, Zap } from 'lucide-react';

export default function Performance({ t }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const terminalSnippets = [
    {
      title: "Khởi chạy Instance cách ly qua MCW Core CLI",
      code: "mcw-core launch --instance \"Create: Arcane Engineering\" --offline Player",
      output: "[INFO] Validating OpenJDK 21.0.4 at C:\\MCW\\runtimes\\java-21\n[INFO] Sandbox level 3 verified. Launching Minecraft 1.21.1 (Fabric 0.16.5)\n[OK] Process started (PID 14092) in 0.84s. Allocated: 4096MB."
    },
    {
      title: "Xác thực tính toàn vẹn chữ ký Hotfix CDN Edge",
      code: "mcw-core hotfix verify --patch v1.7.0.1.zip",
      output: "[INFO] Fetching manifest from https://mcw-download.pages.dev/hotfixes/manifest.json\n[OK] SHA-256 matched: f6e749a8557a989f834c0dc77400e7db84ebc8377e2b5d8d6a593f034595f858\n[OK] Atomic swap staging -> live completed cleanly."
    }
  ];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="benchmarks" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-cyan/10 text-sky-cyan text-xs font-mono font-semibold mb-3 border border-sky-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.performance.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
            {t.performance.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            {t.performance.subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {t.performance.metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 sm:p-6 rounded-2xl text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-sky mb-2">
                  {m.val}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-1 font-sans">
                  {m.label}
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-sans mt-2">
                {m.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Live Inspection Panel */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="bg-base-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                {t.performance.terminal_title}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-emerald/15 text-sky-emerald border border-sky-emerald/30 font-semibold">
              HEADLESS CORE ENGINE
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-6 font-mono text-xs">
            {terminalSnippets.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span># {item.title}</span>
                  <button
                    onClick={() => handleCopy(item.code, idx)}
                    className="p-1 hover:text-white flex items-center gap-1 text-[11px]"
                    title="Sao chép lệnh"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-sky-emerald" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedIndex === idx ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-base-950/80 border border-white/5 flex items-center gap-2 text-sky-cyan">
                  <span className="text-slate-500 select-none">$</span>
                  <span>{item.code}</span>
                </div>
                <div className="p-3 rounded-xl bg-base-900/40 text-slate-300 whitespace-pre-line text-[11px] leading-relaxed border border-white/5">
                  {item.output}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
