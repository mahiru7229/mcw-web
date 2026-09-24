import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function Faq({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-pink/10 text-sky-pink text-xs font-mono font-semibold mb-3 border border-sky-pink/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-sans">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-base-900 border border-white/10 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-cyan' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-300 font-sans leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
