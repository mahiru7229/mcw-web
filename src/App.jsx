import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureSimulator from './components/FeatureSimulator';
import DownloadSection from './components/DownloadSection';
import DeveloperHub from './components/DeveloperHub';
import Footer from './components/Footer';
import { I18N } from './data/releaseData';

export default function App() {
  const [lang, setLang] = useState('vi');
  const t = I18N[lang] || I18N.vi;

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex font-sans selection:bg-anime-pink selection:text-white">
      {/* Left Sidebar Navigation */}
      <Sidebar lang={lang} setLang={setLang} t={t} />

      {/* Main Content Area (Offset by Sidebar on Desktop) */}
      <div className="flex-1 flex flex-col min-w-0 md:pl-64 lg:pl-72">
        <main className="flex-grow">
          <Hero t={t} />
          <Features t={t} />
          <FeatureSimulator t={t} />
          <DownloadSection t={t} />
          <DeveloperHub t={t} />
        </main>
        <Footer t={t} />
      </div>
    </div>
  );
}
