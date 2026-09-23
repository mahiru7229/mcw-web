import React, { useState, useEffect } from 'react';
import { Download, Github, Globe, Menu, X, Terminal, Cpu } from 'lucide-react';
import { RELEASE_INFO } from '../data/releaseData';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/80 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan via-cyber-purple to-cyber-neon p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <div className="w-full h-full bg-obsidian-900 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-black text-xl text-gradient">M</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                  MCW
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyber-cyan font-mono font-medium">
                  {RELEASE_INFO.version}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block tracking-widest uppercase">
                Instance-First Platform
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyber-cyan transition-colors">
              {t.nav.features}
            </a>
            <a href="#simulator" className="hover:text-cyber-cyan transition-colors">
              {t.nav.simulator}
            </a>
            <a href="#core-hub" className="hover:text-cyber-cyan transition-colors">
              {t.nav.core}
            </a>
            <a href="#download" className="hover:text-cyber-cyan transition-colors">
              {t.nav.download}
            </a>
            <a
              href="https://github.com/mahiru7229/mcw-launcher"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t.nav.github}</span>
            </a>
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-obsidian-850 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-all"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Quick download button */}
            <a
              href="#download"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-lg group bg-gradient-to-br from-cyber-cyan to-cyber-purple group-hover:from-cyber-cyan group-hover:to-cyber-neon hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-obsidian-950 rounded-[7px] group-hover:bg-opacity-0 flex items-center gap-2">
                <Download className="w-3.5 h-3.5 text-cyber-cyan group-hover:text-white" />
                <span>{t.nav.download_btn}</span>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="p-2 rounded-lg bg-obsidian-850 text-slate-300"
            >
              <Globe className="w-4 h-4 text-cyber-cyan" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-obsidian-850 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-900 border-b border-white/10 px-4 pt-2 pb-6 space-y-3 mt-3 animate-fadeIn">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan py-2"
          >
            {t.nav.features}
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan py-2"
          >
            {t.nav.simulator}
          </a>
          <a
            href="#core-hub"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan py-2"
          >
            {t.nav.core}
          </a>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan py-2 font-bold text-cyber-cyan"
          >
            {t.nav.download}
          </a>
        </div>
      )}
    </nav>
  );
}
