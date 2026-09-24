import React from 'react';
import { Github, Globe, Heart, Shield, Terminal, BookOpen, ExternalLink } from 'lucide-react';
import { RELEASE_INFO } from '../data/releaseData';

export default function Footer({ t }) {
  return (
    <footer className="relative bg-base-950 border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 font-sans text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-cyan to-sky-purple p-[1.5px]">
                <div className="w-full h-full bg-base-900 rounded-[10px] flex items-center justify-center font-mono font-black text-xs text-sky-cyan">
                  MCW
                </div>
              </div>
              <span className="font-extrabold text-base text-white tracking-wide">
                MCW Launcher
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-base-800 text-sky-cyan border border-white/5">
                {RELEASE_INFO.version}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Trình khởi chạy Minecraft mã nguồn mở thế hệ mới với kiến trúc cô lập từng bản chơi, tự động cấp phát Java và tối ưu hóa tài nguyên cho trải nghiệm chơi game mượt mà nhất.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/mahiru7229/mcw-launcher"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-base-900 hover:bg-base-850 text-slate-300 hover:text-white border border-white/5 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://mahiru7229.github.io/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-base-900 hover:bg-base-850 text-slate-300 hover:text-white border border-white/5 transition-all"
                title="Author Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              {t.footer.quick_links}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#compatibility" className="hover:text-white transition-colors">
                  {t.nav.compatibility}
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-white transition-colors">
                  {t.nav.preview}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  {t.nav.download}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Docs */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              {t.footer.resources}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/mahiru7229/mcw-launcher/blob/1.7/README.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Tài liệu hướng dẫn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mahiru7229/mcw-launcher/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Tất cả phiên bản phát hành</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mahiru7229/mcw-launcher/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Báo cáo lỗi (GitHub Issues)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://mahiru7229.github.io/mcw_core/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>MCW Core API Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-base-900/60 border border-white/5 mb-8 text-[11px] leading-relaxed text-slate-400">
          <strong className="text-white block mb-1 font-mono uppercase">
            {t.footer.disclaimer_title}
          </strong>
          {t.footer.disclaimer}
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © 2026 MCW Launcher. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1">
            <span>{t.footer.author}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
