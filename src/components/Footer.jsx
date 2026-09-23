import React from 'react';
import { Github, Globe, Heart, Shield, Code2 } from 'lucide-react';
import { RELEASE_INFO } from '../data/releaseData';

export default function Footer({ t }) {
  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-purple p-[1.5px]">
                <div className="w-full h-full bg-obsidian-900 rounded-[6px] flex items-center justify-center font-mono font-bold text-white text-sm">
                  M
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-wider">MCW Launcher</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyber-cyan">
                {RELEASE_INFO.version}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {t.footer.about_desc}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/mahiru7229/mcw-launcher"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                title="Launcher Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mahiru7229/mcw-launcher-core"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyber-cyan transition-colors"
                title="Core Repository"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              {t.footer.links_title}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-cyber-cyan transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-cyber-cyan transition-colors">
                  {t.nav.simulator}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-cyber-cyan transition-colors">
                  {t.nav.download}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mahiru7229/mcw-launcher/blob/main/CHANGELOG.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Changelog v1.6.1
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              {t.footer.ecosystem_title}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/mahiru7229/mcw-launcher-core"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyber-cyan transition-colors"
                >
                  MCW Core Library
                </a>
              </li>
              <li>
                <a
                  href="https://mahiru7229.github.io/mcw_core/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Core Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mahiru7229/mcw-curseforge-gateway"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyber-cyan transition-colors"
                >
                  CurseForge Gateway
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mahiru7229/mcw-launcher/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyber-cyan transition-colors"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            {t.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
            <span>&copy; {new Date().getFullYear()} MCW Launcher. Built with open-source passion.</span>
            <span className="flex items-center gap-1.5">
              <span>Optimized for Cloudflare Edge</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon inline-block" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
