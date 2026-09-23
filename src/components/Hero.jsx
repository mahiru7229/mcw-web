import React from 'react';
import { Download, Github, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';
import InteractiveCanvas from './InteractiveCanvas';

export default function Hero({ t }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden cyber-grid">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyber-cyan/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyber-purple/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Holographic Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-900/90 border border-cyber-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-neon"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-cyber-cyan uppercase">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-white block">{t.hero.title_1}</span>
                <span className="text-gradient block">{t.hero.title_gradient}</span>
                <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl block font-semibold mt-1">
                  {t.hero.title_2}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#download"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-cyber-cyan via-cyan-400 to-cyber-neon text-obsidian-950 hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 text-obsidian-950" />
                <span>{t.hero.btn_download}</span>
              </a>

              <a
                href="#simulator"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm tracking-wide bg-obsidian-900/80 hover:bg-obsidian-850 text-slate-200 border border-white/10 hover:border-cyber-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyber-purple" />
                <span>{t.hero.btn_explore}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="https://github.com/mahiru7229/mcw-launcher"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-white/10 transition-all duration-300 flex items-center justify-center"
                title="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <span className="text-xl font-extrabold text-white font-mono block">4 Loaders</span>
                <span className="text-xs text-slate-400 block">{t.hero.stat_loaders}</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-extrabold text-cyber-cyan font-mono block">100% Free</span>
                <span className="text-xs text-slate-400 block">{t.hero.stat_open}</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-extrabold text-cyber-neon font-mono block">&lt; 15ms</span>
                <span className="text-xs text-slate-400 block">{t.hero.stat_speed}</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-extrabold text-cyber-purple font-mono block">Zero WinError 3</span>
                <span className="text-xs text-slate-400 block">{t.hero.stat_health}</span>
              </div>
            </div>
          </div>

          {/* Right Hologram Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative glass-panel rounded-2xl p-4 sm:p-6 border border-cyan-500/20 shadow-[0_0_50px_rgba(0,240,255,0.1)]">
              {/* Top corner cyber decals */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 text-[10px] font-mono text-cyan-400/80 tracking-wider">
                  HOLO-VOXEL // MATRIX 3D
                </span>
              </div>

              <InteractiveCanvas />

              {/* Bottom stats overlay */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyber-neon" />
                  <span>Verified Single-File Architecture</span>
                </div>
                <span className="text-cyan-400/70">v1.6.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
