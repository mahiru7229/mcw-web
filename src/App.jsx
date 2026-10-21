import React, { useState } from 'react';
import AtmosphereCanvas from './components/AtmosphereCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Compatibility from './components/Compatibility';
import Performance from './components/Performance';
import DownloadSection from './components/DownloadSection';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { I18N } from './data/releaseData';
import { useReleaseData } from './data/useReleaseData';

export default function App() {
  const [lang, setLang] = useState('vi');
  const t = I18N[lang] || I18N.vi;
  const { release, stableRelease, betaRelease, channel, setChannel, loading } = useReleaseData();

  return (
    <div className="min-h-screen bg-base-950 text-slate-100 flex flex-col font-sans selection:bg-sky-cyan/30 selection:text-sky-cyan relative">
      {/* Anime Sky & Voxel Atmosphere Canvas */}
      <AtmosphereCanvas />

      {/* Modern Top Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} t={t} release={release} channel={channel} />

      {/* Main Content Stream */}
      <main className="flex-grow relative z-10">
        <Hero
          t={t}
          release={release}
          stableRelease={stableRelease}
          betaRelease={betaRelease}
          channel={channel}
          setChannel={setChannel}
          loading={loading}
        />
        <Features t={t} />
        <Compatibility t={t} />
        <Performance t={t} />
        <DownloadSection
          t={t}
          release={release}
          stableRelease={stableRelease}
          betaRelease={betaRelease}
          channel={channel}
          setChannel={setChannel}
          loading={loading}
        />
        <Faq t={t} />
      </main>

      {/* Legal Footer & Credits */}
      <Footer t={t} release={release} />
    </div>
  );
}
