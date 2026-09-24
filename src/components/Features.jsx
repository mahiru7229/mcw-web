import React from 'react';
import { Zap, Layers, Cpu, Sparkles, RefreshCw, ShieldCheck, Box } from 'lucide-react';

export default function Features({ t }) {
  const icons = {
    lightweight: Zap,
    isolation: Layers,
    java: Cpu,
    modpack: Sparkles,
    hotfix: RefreshCw,
    auth: ShieldCheck,
  };

  const accentColors = {
    lightweight: "text-sky-emerald bg-sky-emerald/10 border-sky-emerald/20",
    isolation: "text-sky-cyan bg-sky-cyan/10 border-sky-cyan/20",
    java: "text-sky-purple bg-sky-purple/10 border-sky-purple/20",
    modpack: "text-sky-pink bg-sky-pink/10 border-sky-pink/20",
    hotfix: "text-sky-amber bg-sky-amber/10 border-sky-amber/20",
    auth: "text-sky-cyan bg-sky-cyan/10 border-sky-cyan/20",
  };

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-purple/10 text-sky-purple text-xs font-mono font-semibold mb-3 border border-sky-purple/20">
            <Box className="w-3.5 h-3.5" />
            <span>{t.features.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feat) => {
            const Icon = icons[feat.id] || Zap;
            const style = accentColors[feat.id] || "text-sky-cyan bg-sky-cyan/10 border-sky-cyan/20";

            return (
              <div
                key={feat.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 border ${style}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-sans">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
