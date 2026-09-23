import React from 'react';
import { Layers, ShieldCheck, RefreshCw, Cpu, Flame } from 'lucide-react';

export default function Features({ t }) {
  const cards = [
    {
      icon: Layers,
      title: t.features.card1_title,
      jp: t.features.card1_jp,
      desc: t.features.card1_desc,
      color: 'text-asuka-red',
      border: 'hover:border-asuka-red/60',
      badge: 'CONTAINER ISOLATION // 独立',
      bgGlow: 'group-hover:shadow-[0_0_35px_rgba(255,31,68,0.2)]'
    },
    {
      icon: ShieldCheck,
      title: t.features.card2_title,
      jp: t.features.card2_jp,
      desc: t.features.card2_desc,
      color: 'text-asuka-flame',
      border: 'hover:border-asuka-flame/60',
      badge: 'LONG PATH // 安定',
      bgGlow: 'group-hover:shadow-[0_0_35px_rgba(255,84,0,0.2)]'
    },
    {
      icon: RefreshCw,
      title: t.features.card3_title,
      jp: t.features.card3_jp,
      desc: t.features.card3_desc,
      color: 'text-amber-400',
      border: 'hover:border-amber-500/60',
      badge: 'AUTO-RECOVERY // 回復',
      bgGlow: 'group-hover:shadow-[0_0_35px_rgba(255,183,3,0.2)]'
    },
    {
      icon: Cpu,
      title: t.features.card4_title,
      jp: t.features.card4_jp,
      desc: t.features.card4_desc,
      color: 'text-cyber-neon',
      border: 'hover:border-emerald-500/60',
      badge: 'JAVA & MODS // 自動',
      bgGlow: 'group-hover:shadow-[0_0_35px_rgba(0,255,170,0.2)]'
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asuka-red/10 border border-asuka-red/30 text-asuka-red text-xs font-mono font-bold">
            <Flame className="w-3.5 h-3.5 text-asuka-flame" />
            <span>{t.features.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.features.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`glass-panel rounded-2xl p-6 sm:p-7 transition-all duration-300 transform hover:-translate-y-1 border border-white/10 ${card.border} ${card.bgGlow} group relative flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-obsidian-950/90 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${card.color}`} />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 uppercase">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Japanese sub-title */}
                  <div className="space-y-1 mb-3">
                    <div className="text-[11px] font-mono text-asuka-flame font-medium">
                      {card.jp}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-asuka-red transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>CORE PROTOCOL 0{index + 1}</span>
                  <span className="text-slate-400 group-hover:text-asuka-flame transition-colors font-semibold">
                    SYNCED 100% ✦
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
