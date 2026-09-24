import React from 'react';
import { Layers, Sparkles, Flame, Box, Package, Feather } from 'lucide-react';

export default function Compatibility({ t }) {
  const loaderIcons = {
    Vanilla: Box,
    Fabric: Feather,
    Forge: Flame,
    NeoForge: Sparkles,
    Quilt: Layers,
    Modpacks: Package,
  };

  return (
    <section id="compatibility" className="relative py-20 overflow-hidden bg-base-900/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-emerald/10 text-sky-emerald text-xs font-mono font-semibold mb-3 border border-sky-emerald/20">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.compatibility.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
            {t.compatibility.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            {t.compatibility.subtitle}
          </p>
        </div>

        {/* 6 Modloaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.compatibility.loaders.map((loader) => {
            const Icon = loaderIcons[loader.name] || Box;

            return (
              <div
                key={loader.name}
                className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group"
              >
                {/* Accent top stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-80"
                  style={{ backgroundColor: loader.accent }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 border border-white/10"
                    style={{ backgroundColor: `${loader.accent}15`, color: loader.accent }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-base-800 text-slate-300 border border-white/5 font-semibold">
                    {loader.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 font-sans">
                  {loader.name}
                </h3>
                <div
                  className="text-xs font-mono font-semibold mb-3"
                  style={{ color: loader.accent }}
                >
                  {loader.version}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  {loader.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
