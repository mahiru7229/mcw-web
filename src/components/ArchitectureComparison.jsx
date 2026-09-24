import React from 'react';
import { Check, X, ShieldAlert, Zap, Cpu, Sparkles } from 'lucide-react';

export default function ArchitectureComparison({ t }) {
  const comparison = t.comparison;
  if (!comparison) return null;

  return (
    <section id="comparison" className="py-20 relative overflow-hidden bg-obsidian-900/30 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asuka-flame/15 border border-asuka-flame/35 text-asuka-flame text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5 text-asuka-amber animate-pulse" />
            <span>{comparison.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {comparison.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {comparison.subtitle}
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Header Row (Desktop) */}
          <div className="hidden md:grid md:grid-cols-12 bg-obsidian-950 px-6 py-4 border-b border-white/10 text-xs font-mono font-bold tracking-wider uppercase">
            <div className="col-span-4 text-slate-400">{comparison.col_feature}</div>
            <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
              <X className="w-4 h-4 text-rose-500" />
              <span>{comparison.col_legacy}</span>
            </div>
            <div className="col-span-4 text-cyber-neon flex items-center gap-1.5">
              <Check className="w-4 h-4 text-cyber-neon" />
              <span>{comparison.col_mcw}</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {comparison.items.map((row, idx) => (
              <div
                key={idx}
                className={`p-5 md:px-6 md:py-4.5 transition-colors hover:bg-white/[0.02] ${
                  row.highlight ? 'bg-asuka-red/[0.03]' : ''
                }`}
              >
                {/* Desktop Grid Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center text-xs">
                  <div className="col-span-4 font-mono font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-asuka-flame" />
                    <span>{row.feature}</span>
                  </div>

                  <div className="col-span-4 text-slate-400 flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500/80 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{row.legacy}</span>
                  </div>

                  <div className="col-span-4 text-slate-100 font-medium flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyber-neon shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-emerald-300/90">{row.mcw}</span>
                  </div>
                </div>

                {/* Mobile Card Layout */}
                <div className="md:hidden space-y-3">
                  <div className="font-mono font-bold text-sm text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-asuka-flame" />
                    <span>{row.feature}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-900/30 text-xs text-rose-300 space-y-1">
                    <div className="text-[10px] font-mono uppercase text-rose-400 font-bold flex items-center gap-1">
                      <X className="w-3 h-3 text-rose-400" />
                      <span>{comparison.col_legacy}</span>
                    </div>
                    <p className="leading-relaxed">{row.legacy}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/25 border border-emerald-800/40 text-xs text-emerald-200 space-y-1">
                    <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>{comparison.col_mcw}</span>
                    </div>
                    <p className="leading-relaxed">{row.mcw}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="p-4 bg-obsidian-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>TESTED & VERIFIED ACROSS 1,700+ UNIT TESTS ON WINDOWS & LINUX</span>
            </span>
            <a
              href="https://github.com/mahiru7229/mcw-launcher/blob/main/docs/ARCHITECTURE.md"
              target="_blank"
              rel="noreferrer"
              className="text-asuka-flame hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Xem tài liệu ARCHITECTURE.md</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
