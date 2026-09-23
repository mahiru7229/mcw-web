import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <Hero t={t} />
        <Features t={t} />
        <FeatureSimulator t={t} />
        <DownloadSection t={t} />
        <DeveloperHub t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
