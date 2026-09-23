import React from 'react';
import { Layers, ShieldAlert, RefreshCw, Cpu, Box, Lock } from 'lucide-react';

export default function Features({ t }) {
  const cards = [
    {
      icon: Layers,
      title: t.features.card1_title,
      desc: t.features.card1_desc,
      color: 'text-cyber-cyan',
      border: 'hover:border-cyan-500/40',
      badge: 'Architecture'
    },
    {
      icon: ShieldAlert,
      title: t.features.card2_title,
      desc: t.features.card2_desc,
      color: 'text-cyber-neon',
      border: 'hover:border-emerald-500/40',
      badge: 'Stability'
    },
    {
      icon: RefreshCw,
      title: t.features.card3_title,
      desc: t.features.card3_desc,
      color: 'text-cyber-purple',
      border: 'hover:border-purple-500/40',
      badge: 'Networking'
    },
    {
      icon: Cpu,
      title: t.features.card4_title,
      desc: t.features.card4_desc,
      color: 'text-amber-400',
      border: 'hover:border-amber-500/40',
      badge: 'Runtime'
    },
    {
      icon: Box,
      title: t.features.card5_title,
      desc: t.features.card5_desc,
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/40',
      badge: 'Content'
    },
    {
      icon: Lock,
      title: t.features.card6_title,
      desc: t.features.card6_desc,
      color: 'text-rose-400',
      border: 'hover:border-rose-500/40',
      badge: 'Security'
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-semibold">
            {t.features.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`glass-panel rounded-2xl p-7 transition-all duration-300 transform hover:-translate-y-1.5 border border-white/5 ${card.border} group relative`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-400 uppercase">
                    {card.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-obsidian-950/80 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className={`w-6 h-6 ${card.color}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
