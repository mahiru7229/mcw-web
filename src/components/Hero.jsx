import React from 'react';
import { Download, Sparkles, Github, ShieldCheck, Flame, ArrowRight, Zap, Target } from 'lucide-react';
import InteractiveCanvas from './InteractiveCanvas';

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden cyber-grid">
      {/* Background Tactical Fiery Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-asuka-red/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-asuka-flame/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Left */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tactical Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/95 border border-asuka-red/40 shadow-[0_0_20px_rgba(255,31,68,0.25)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-asuka-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-asuka-flame"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-asuka-red uppercase">
                {t.hero.badge}
              </span>
              <span className="text-[11px] font-mono text-asuka-orange font-medium hidden sm:inline">
                {t.hero.badge_jp}
              </span>
            </div>

            {/* High-impact Heading */}
            <div className="space-y-1">
              <span className="text-xs font-mono text-asuka-flame tracking-widest uppercase block font-semibold">
                NEON GENESIS // INSTANCE-FIRST ENGINE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-white block">{t.hero.title_1}</span>
                <span className="text-gradient-asuka block py-1 font-black">{t.hero.title_gradient}</span>
                <span className="text-slate-300 text-2xl sm:text-3xl lg:text-4xl block font-semibold">
                  {t.hero.title_2}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#download"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-asuka-crimson via-asuka-flame to-asuka-amber text-white hover:shadow-[0_0_35px_rgba(255,31,68,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-white" />
                <span>{t.hero.btn_download}</span>
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-obsidian-900/80 hover:bg-obsidian-850 text-slate-200 border border-white/10 hover:border-asuka-red/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-asuka-flame" />
                <span>{t.hero.btn_explore}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://github.com/mahiru7229/mcw-launcher"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-white/10 hover:border-asuka-red/40 transition-all duration-300 flex items-center justify-center"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Stats Banner */}
            <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-3">
              <div className="space-y-0.5">
                <span className="text-lg font-extrabold text-white font-mono block">4 Loaders</span>
                <span className="text-[11px] text-slate-400 block">{t.hero.stat_loaders}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-extrabold text-asuka-red font-mono block">100% Free</span>
                <span className="text-[11px] text-slate-400 block">{t.hero.stat_open}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-extrabold text-asuka-flame font-mono block">Server VN</span>
                <span className="text-[11px] text-slate-400 block">{t.hero.stat_speed}</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Hologram Matrix HUD Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative glass-panel rounded-2xl p-4 sm:p-5 border border-asuka-red/40 shadow-[0_0_50px_rgba(255,31,68,0.2)] overflow-hidden group">
              {/* Tactical Corner Decal */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-asuka-red/20 to-transparent pointer-events-none" />

              {/* Matrix Header Strip */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-asuka-red animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
                    MATRIX HUD // PROTOCOL MCW
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-asuka-red/20 text-asuka-red border border-asuka-red/40 font-bold">
                  SYNC: 100%
                </span>
              </div>

              {/* Interactive 3D Hologram Canvas */}
              <div className="relative rounded-xl overflow-hidden border border-asuka-red/30 shadow-inner bg-obsidian-950">
                <InteractiveCanvas />

                {/* Tactical HUD Overlay Quote Tag */}
                <div className="p-3 rounded-lg bg-obsidian-950/85 backdrop-blur-md border border-asuka-red/30 text-left mt-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-asuka-flame font-bold mb-1">
                    <span>「完全独立・超高速起動」</span>
                    <span className="text-white bg-asuka-red px-1.5 py-0.5 rounded text-[9px] font-bold">CORE HUD</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-snug">
                    "Tách biệt 100% từng bản chơi, xóa sổ mọi xung đột. Sẵn sàng khởi chạy tức thì!"
                  </p>
                </div>
              </div>

              {/* Bottom Sync Stats */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-asuka-flame">
                  <Target className="w-3.5 h-3.5 text-asuka-red" />
                  <span className="text-[11px] font-semibold">TARGET: MINECRAFT SANDBOX</span>
                </div>
                <span className="text-asuka-red font-bold text-[11px]">v1.6.1 READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
