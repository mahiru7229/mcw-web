import React, { useState, useEffect } from 'react';
import { Download, Github, Globe, Menu, X, Sparkles, Layers, Terminal, HelpCircle } from 'lucide-react';
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

  const navLinks = [
    { href: "#features", label: t.nav.features, icon: Sparkles },
    { href: "#compatibility", label: t.nav.compatibility, icon: Layers },
    { href: "#preview", label: t.nav.preview, icon: Sparkles },
    { href: "#benchmarks", label: t.nav.benchmarks, icon: Terminal },
    { href: "#faq", label: t.nav.faq, icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-cyan via-sky-purple to-sky-pink p-[1.5px] shadow-[0_0_20px_rgba(114,216,255,0.3)] group-hover:shadow-[0_0_25px_rgba(114,216,255,0.5)] transition-all">
              <div className="w-full h-full bg-base-900 rounded-[10px] flex items-center justify-center font-mono font-black text-sm text-sky-cyan">
                MCW
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-wide text-white font-sans">
                MCW Launcher
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-purple/15 text-sky-purple border border-sky-purple/30 font-semibold">
                {RELEASE_INFO.version}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 bg-base-900/60 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lang Switcher */}
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="px-2.5 py-1.5 rounded-lg bg-base-900/80 hover:bg-base-800 text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5"
              title="Đổi ngôn ngữ / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-cyan" />
              <span className="uppercase">{lang}</span>
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/mahiru7229/mcw-launcher"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-base-900/80 hover:bg-base-800 text-slate-300 hover:text-white border border-white/10 transition-all"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* CTA Download Button */}
            <a
              href="#download"
              className="px-5 py-2 rounded-xl text-xs font-bold tracking-wide bg-gradient-to-r from-sky-cyan via-sky-purple to-sky-pink text-base-950 hover:shadow-[0_0_25px_rgba(114,216,255,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-base-950 stroke-[2.5]" />
              <span>{t.nav.download}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="p-2 rounded-lg bg-base-900 border border-white/10 text-xs font-mono text-slate-300"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-base-900 border border-white/10 text-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-base-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-5 space-y-3 mt-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center gap-2"
              >
                <link.icon className="w-4 h-4 text-sky-cyan" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center gap-3">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-xl text-center text-xs font-bold bg-gradient-to-r from-sky-cyan to-sky-purple text-base-950 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.download}</span>
            </a>
            <a
              href="https://github.com/mahiru7229/mcw-launcher"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-base-900 border border-white/10 text-slate-300 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
