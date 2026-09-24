import React, { useState } from 'react';
import { 
  Layers, 
  ShieldCheck, 
  RefreshCw, 
  Sparkles, 
  Cpu, 
  Lock, 
  Palette, 
  Zap, 
  Flame, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

const ICON_MAP = {
  Layers,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  Cpu,
  Lock,
  Palette,
  Zap,
};

export default function Features({ t }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: t.features.filter_all },
    { id: 'core', label: t.features.filter_core },
    { id: 'mods', label: t.features.filter_mods },
    { id: 'security', label: t.features.filter_security },
  ];

  const items = t.features.items || [];
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asuka-red/10 border border-asuka-red/30 text-asuka-red text-xs font-mono font-bold">
            <Flame className="w-3.5 h-3.5 text-asuka-flame animate-pulse" />
            <span>{t.features.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.features.subtitle}
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-asuka-crimson via-asuka-flame to-asuka-amber text-white shadow-[0_0_15px_rgba(255,31,68,0.35)] font-bold'
                    : 'bg-obsidian-900/90 text-slate-400 hover:text-white hover:bg-obsidian-850 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Sparkles;
            return (
              <div
                key={item.id || index}
                className={`glass-panel rounded-2xl p-6 sm:p-7 transition-all duration-300 transform hover:-translate-y-1 border border-white/10 ${item.border} group relative flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-obsidian-950/90 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Japanese sub-title */}
                  <div className="space-y-1 mb-3">
                    <div className="text-[11px] font-mono text-asuka-flame font-medium">
                      {item.jp}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-asuka-red transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom subtle accent line with doc reference link */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <a
                    href={`https://github.com/mahiru7229/mcw-launcher/blob/main/${item.docRef}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-asuka-flame transition-colors group/link"
                    title="Xem tài liệu kỹ thuật trên GitHub"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-asuka-flame" />
                    <span>{item.docRef}</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100" />
                  </a>
                  <span className="text-slate-400 group-hover:text-asuka-flame transition-colors font-semibold">
                    VERIFIED ✦
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
