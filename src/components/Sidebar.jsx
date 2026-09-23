import React, { useState } from 'react';
import { 
  Home, 
  Sparkles, 
  Download, 
  Code2, 
  Github, 
  Globe, 
  Menu, 
  X, 
  Zap,
  Flame
} from 'lucide-react';
import { RELEASE_INFO } from '../data/releaseData';

export default function Sidebar({ lang, setLang, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  const navItems = [
    { id: 'hero', href: '#hero', label: t.sidebar.home, jp: t.sidebar.home_jp, icon: Home },
    { id: 'features', href: '#features', label: t.sidebar.features, jp: t.sidebar.features_jp, icon: Sparkles },
    { id: 'download', href: '#download', label: t.sidebar.download, jp: t.sidebar.download_jp, icon: Download },
    { id: 'core-hub', href: '#core-hub', label: t.sidebar.core, jp: t.sidebar.core_jp, icon: Code2 },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-obsidian-950/95 backdrop-blur-md border-b border-asuka-red/20 px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-asuka-red via-asuka-flame to-asuka-amber p-[1.5px] shadow-[0_0_15px_rgba(255,31,68,0.4)]">
            <div className="w-full h-full bg-obsidian-900 rounded-[7px] flex items-center justify-center font-mono font-black text-xs text-gradient-asuka">
              MCW
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm tracking-wider text-white">MCW</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-asuka-red/20 text-asuka-red border border-asuka-red/30">
                {RELEASE_INFO.version}
              </span>
            </div>
            <span className="text-[9px] font-mono text-asuka-orange block tracking-tighter">
              {t.sidebar.brand_sub}
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="px-2 py-1 rounded-md bg-obsidian-850 border border-white/10 text-xs font-mono text-slate-300"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-obsidian-850 border border-white/10 text-slate-200"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5 text-asuka-red" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-black/75 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Left Sidebar (Desktop Fixed & Mobile Drawer) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 lg:w-72 bg-obsidian-950/95 backdrop-blur-xl border-r border-asuka-red/20 flex flex-col justify-between transition-transform duration-300 ease-in-out md:translate-x-0 ${
          mobileOpen ? 'translate-x-0 pt-16 md:pt-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top: Brand & Tactical HUD Status */}
        <div className="p-6 border-b border-white/10">
          <a href="#hero" className="block group">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-asuka-red via-asuka-flame to-asuka-amber p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_25px_rgba(255,31,68,0.4)]">
                <div className="w-full h-full bg-obsidian-900 rounded-[9px] flex items-center justify-center">
                  <span className="font-mono font-black text-sm text-gradient-asuka">MCW</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-asuka-flame rounded-full animate-ping opacity-75" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-asuka-flame rounded-full" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base tracking-wider text-white group-hover:text-asuka-red transition-colors">
                    MCW LAUNCHER
                  </span>
                </div>
                <span className="text-[10px] font-mono text-asuka-orange block tracking-wider font-semibold">
                  {t.sidebar.brand_sub}
                </span>
              </div>
            </div>
          </a>

          {/* Tactical Sync Rate Tag */}
          <div className="mt-4 px-3 py-1.5 rounded-lg bg-asuka-red/10 border border-asuka-red/30 flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-asuka-red">
              <Flame className="w-3.5 h-3.5 text-asuka-flame animate-pulse" />
              <span className="font-semibold tracking-wider">{t.sidebar.status}</span>
            </div>
            <span className="text-amber-400 font-bold text-[10px]">{t.sidebar.status_kaomoji}</span>
          </div>
        </div>

        {/* Middle: Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-slate-500">
            CORE PROTOCOLS // システム
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`group flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? 'bg-gradient-to-r from-asuka-red/25 to-asuka-flame/15 border border-asuka-red/50 text-white shadow-[0_0_15px_rgba(255,31,68,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-asuka-red' : 'text-slate-400 group-hover:text-asuka-flame'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                  {item.jp}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom: Fast Download CTA & Controls */}
        <div className="p-4 border-t border-white/10 space-y-3 bg-obsidian-900/60">
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-asuka-crimson via-asuka-flame to-asuka-amber hover:shadow-[0_0_25px_rgba(255,31,68,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-white group-hover:animate-bounce" />
            <span>{t.sidebar.download_btn}</span>
            <span className="text-[10px] opacity-75 font-mono">({RELEASE_INFO.version})</span>
          </a>

          {/* Controls: Language + GitHub */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-asuka-red/40 text-xs font-mono text-slate-300 hover:text-asuka-red transition-all"
              title="Chuyển đổi ngôn ngữ / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-asuka-flame" />
              <span>{lang === 'vi' ? 'Tiếng Việt' : 'English'}</span>
            </button>

            <a
              href="https://github.com/mahiru7229/mcw-launcher"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-asuka-amber/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5 text-asuka-amber" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="pt-2 text-center text-[10px] font-mono text-slate-400 flex items-center justify-between px-1">
            <span className="text-slate-500">SYNC: OPTIMAL</span>
            <span className="text-asuka-flame font-bold">{RELEASE_INFO.versionId}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
