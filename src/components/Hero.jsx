import React from 'react';
import { Download, Sparkles, Github, ShieldCheck, Zap, ArrowRight, Heart } from 'lucide-react';
import InteractiveCanvas from './InteractiveCanvas';

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden cyber-grid">
      {/* Background Anime Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[350px] bg-anime-pink/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-cyber-cyan/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Left */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Anime Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-anime-pink/30 shadow-[0_0_20px_rgba(255,77,141,0.25)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-anime-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-anime-pink"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-anime-pink uppercase">
                {t.hero.badge}
              </span>
              <span className="text-[11px] font-mono text-cyan-400 font-normal hidden sm:inline">
                {t.hero.badge_jp}
              </span>
            </div>

            {/* Concise & High-impact Heading */}
            <div className="space-y-1">
              <span className="text-sm font-mono text-cyan-400/90 tracking-widest uppercase block">
                MINECRAFT NEXT-GEN LAUNCHER
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-white block">{t.hero.title_1}</span>
                <span className="text-gradient-anime block py-1">{t.hero.title_gradient}</span>
                <span className="text-slate-300 text-2xl sm:text-3xl lg:text-4xl block font-semibold">
                  {t.hero.title_2}
                </span>
              </h1>
            </div>

            {/* Concise Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#download"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-anime-pink via-cyber-purple to-cyber-cyan text-white hover:shadow-[0_0_30px_rgba(255,77,141,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-white" />
                <span>{t.hero.btn_download}</span>
              </a>

              <a
                href="#simulator"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-obsidian-900/80 hover:bg-obsidian-850 text-slate-200 border border-white/10 hover:border-anime-pink/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-anime-pink" />
                <span>{t.hero.btn_explore}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://github.com/mahiru7229/mcw-launcher"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-white/10 transition-all duration-300 flex items-center justify-center"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Stats Banner */}
            <div className="pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-0.5">
                <span className="text-lg font-extrabold text-white font-mono block">4 Loaders</span>
                <span className="text-[11px] text-slate-400 block">{t.hero.stat_loaders}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-extrabold text-anime-pink font-mono block">100% Free</span>
                <span className="text-[11px] text-slate-400 block">{t.hero.stat_open}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-extrabold text-cyber-cyan font-mono block">VN Edge CDN</span>
                <span className="text-[11px] text-slate-400 block">{t.hero.stat_speed}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-lg font-extrabold text-cyber-neon font-mono block">Zero WinError 3</span>
                <span className="text-[11px] text-slate-400 block">{t.hero.stat_health}</span>
              </div>
            </div>
          </div>

          {/* Right Hologram Canvas with Anime HUD Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative glass-panel rounded-2xl p-4 sm:p-5 border border-anime-pink/20 shadow-[0_0_40px_rgba(255,77,141,0.12)]">
              {/* Anime Cyber Frame Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-anime-pink animate-pulse" />
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-200">
                    HOLO-VOXEL 3D // 空間投影
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyber-cyan border border-cyan-500/30">
                  INTERACTIVE
                </span>
              </div>

              {/* 3D Canvas */}
              <InteractiveCanvas />

              {/* Bottom Anime Status Decal */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-anime-pink">
                  <Heart className="w-3.5 h-3.5 fill-anime-pink" />
                  <span className="text-[11px]">Crafted for Minecraft Community</span>
                </div>
                <span className="text-cyan-400/80 text-[11px] font-bold">v1.6.1 STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
