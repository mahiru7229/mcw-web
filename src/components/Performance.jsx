import React from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function Performance({ t }) {
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      </div>
    </section>
  );
}
