import React from 'react';
import { Download, Sparkles, ArrowRight, ShieldCheck, Box, Cpu, Zap } from 'lucide-react';
import { RELEASE_INFO } from '../data/releaseData';

export default function Hero({ t }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-purple/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-sky-cyan/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-sky-pink/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-base-900/90 border border-white/10 shadow-[0_0_20px_rgba(114,216,255,0.15)] mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-emerald"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-200">
            {t.hero.badge}
          </span>
          <span className="text-[11px] font-mono text-sky-cyan font-semibold">
            • Asia Edge CDN
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans leading-[1.1] mb-6">
          <span className="block text-white">Your World.</span>
          <span className="text-gradient-sky block mt-1">Your Way.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto mb-4 font-sans">
          {t.hero.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          {t.hero.desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#download"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-sky-cyan via-sky-purple to-sky-pink text-base-950 hover:shadow-[0_0_35px_rgba(114,216,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-base-950 stroke-[2.5]" />
            <span>{t.hero.btn_download}</span>
          </a>

          <a
            href="#preview"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-base-900/80 hover:bg-base-800 text-slate-200 border border-white/10 hover:border-sky-cyan/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{t.hero.btn_explore}</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* OS Support Note */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 mb-14">
          <ShieldCheck className="w-4 h-4 text-sky-emerald" />
          <span>{t.hero.os_support}</span>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
            <div className="p-2 rounded-lg bg-sky-emerald/10 text-sky-emerald border border-sky-emerald/20">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono">Native & GPU Caching</div>
              <div className="text-xs text-slate-400">Tối ưu khởi động & bộ nhớ</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
            <div className="p-2 rounded-lg bg-sky-cyan/10 text-sky-cyan border border-sky-cyan/20">
              <Box className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono">100% Instance Isolation</div>
              <div className="text-xs text-slate-400">Tách biệt mọi mod, thế giới</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
            <div className="p-2 rounded-lg bg-sky-purple/10 text-sky-purple border border-sky-purple/20">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono">Auto Java 8/17/21</div>
              <div className="text-xs text-slate-400">Cấp phát OpenJDK tự động</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
