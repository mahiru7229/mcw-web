import React, { useState } from 'react';
import { Play, Layers, Box, Cpu, Settings, Folder, RefreshCw, CheckCircle2, ChevronRight, Terminal, Sparkles, User, ShieldCheck } from 'lucide-react';

export default function LauncherPreview({ t }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedInstance, setSelectedInstance] = useState(0);

  const instances = [
    {
      name: "Create: Arcane Engineering",
      version: "1.21.1",
      loader: "Fabric 0.16.5",
      modsCount: 142,
      playTime: "24.5h",
      iconColor: "from-sky-cyan to-sky-purple",
      badge: "Fabric",
      java: "Java 21.0.4 (Temurin OpenJDK)",
      memory: "4096 MB",
    },
    {
      name: "Vanilla Survival World",
      version: "1.21.1",
      loader: "Vanilla",
      modsCount: 0,
      playTime: "112.0h",
      iconColor: "from-sky-emerald to-sky-cyan",
      badge: "Vanilla",
      java: "Java 21.0.4 (Temurin OpenJDK)",
      memory: "2048 MB",
    },
    {
      name: "All The Mods 9",
      version: "1.20.4",
      loader: "NeoForge 20.4.80",
      modsCount: 388,
      playTime: "68.2h",
      iconColor: "from-sky-purple to-sky-pink",
      badge: "NeoForge",
      java: "Java 17.0.12 (Zulu OpenJDK)",
      memory: "8192 MB",
    },
  ];

  const currentInst = instances[selectedInstance];

  const sampleMods = [
    { name: "Sodium", version: "0.5.11", author: "jellysquid", category: "Performance" },
    { name: "Iris Shaders", version: "1.7.2", author: "coderbot", category: "Graphics" },
    { name: "Create Fabric", version: "0.5.1-f", author: "simibubi", category: "Technology" },
    { name: "Lithium", version: "0.12.7", author: "jellysquid", category: "Optimization" },
    { name: "FerriteCore", version: "6.0.3", author: "malte0811", category: "Memory" },
    { name: "Mod Menu", version: "11.0.1", author: "TerraformersMC", category: "GUI" },
  ];

  return (
    <section id="preview" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-cyan/10 text-sky-cyan text-xs font-mono font-semibold mb-3 border border-sky-cyan/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.preview.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
            {t.preview.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            {t.preview.subtitle}
          </p>
        </div>

        {/* Realistic Mockup Window Frame */}
        <div className="relative rounded-2xl glass-panel border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300">
          {/* Top Window Bar */}
          <div className="bg-base-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            {/* Window Controls (Traffic Lights) */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-3 hidden sm:inline">
                MCW Launcher v1.7.1 (Hotfix 1.7.1.1) — Standalone Window
              </span>
            </div>

            {/* Profile Avatar / Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-base-800/80 border border-white/5 text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-sky-emerald animate-pulse" />
                <span>Player</span>
                <span className="text-[10px] text-slate-500">• Microsoft</span>
              </div>
            </div>
          </div>

          {/* Main Launcher App Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] bg-base-950/90">
            {/* Left Launcher Sidebar */}
            <div className="md:col-span-4 lg:col-span-3 border-r border-white/10 p-3 sm:p-4 bg-base-900/50 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Instance List Title */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2">
                  <span className="uppercase tracking-wider font-semibold">Instances ({instances.length})</span>
                  <button className="text-sky-cyan hover:text-white p-1" title="Làm mới danh sách">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Instance Item Cards */}
                <div className="space-y-2">
                  {instances.map((inst, idx) => (
                    <button
                      key={inst.name}
                      onClick={() => setSelectedInstance(idx)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-3 ${
                        selectedInstance === idx
                          ? 'bg-base-800 border-sky-cyan/40 shadow-sm'
                          : 'bg-base-900/40 border-white/5 hover:bg-base-850 hover:border-white/10'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${inst.iconColor} p-0.5 shrink-0 flex items-center justify-center`}>
                        <Box className="w-5 h-5 text-base-950" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-white truncate font-sans">{inst.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                          <span>{inst.version}</span>
                          <span>•</span>
                          <span className="text-sky-cyan">{inst.badge}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sidebar Quick Footer */}
              <div className="pt-4 border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-2 py-1">
                  <span>Hotfix Patch:</span>
                  <span className="text-sky-emerald font-semibold">v1.7.1.1 Live</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-2 py-1">
                  <span>Edge CDN:</span>
                  <span className="text-sky-cyan font-semibold">HKG / SIN OK</span>
                </div>
              </div>
            </div>

            {/* Right Stage: Instance Control Center */}
            <div className="md:col-span-8 lg:col-span-9 p-5 sm:p-6 flex flex-col justify-between">
              {/* Header Profile Bar */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                        {currentInst.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-purple/15 text-sky-purple border border-sky-purple/30 font-semibold">
                        {currentInst.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      Minecraft {currentInst.version} • {currentInst.loader} • {currentInst.modsCount} Active Mods
                    </p>
                  </div>

                  {/* Open Folder & Settings Shortcuts */}
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-base-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5">
                      <Folder className="w-3.5 h-3.5 text-sky-cyan" />
                      <span>Folder</span>
                    </button>
                    <button className="p-2 rounded-lg bg-base-900 border border-white/10 text-slate-300 hover:text-white">
                      <Settings className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Sub Navigation Tabs */}
                <div className="flex items-center gap-2 mt-4 border-b border-white/5 pb-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all ${
                      activeTab === 'overview'
                        ? 'bg-sky-cyan/15 text-sky-cyan font-semibold border border-sky-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.preview.tab_overview}
                  </button>
                  <button
                    onClick={() => setActiveTab('mods')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all flex items-center gap-1.5 ${
                      activeTab === 'mods'
                        ? 'bg-sky-cyan/15 text-sky-cyan font-semibold border border-sky-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{t.preview.tab_mods}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-base-800 text-slate-300">
                      {currentInst.modsCount}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all ${
                      activeTab === 'settings'
                        ? 'bg-sky-cyan/15 text-sky-cyan font-semibold border border-sky-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.preview.tab_settings}
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="py-4">
                  {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-3.5 rounded-xl bg-base-900/60 border border-white/5">
                        <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-sky-cyan" />
                          <span>Java Runtime Cấp Phát</span>
                        </div>
                        <div className="text-xs font-bold text-white font-mono">{currentInst.java}</div>
                        <div className="text-[10px] text-sky-emerald mt-1 font-mono">Tự động cấu hình bộ nhớ và GC</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-base-900/60 border border-white/5">
                        <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-sky-purple" />
                          <span>Bộ Nhớ RAM Phân Bổ</span>
                        </div>
                        <div className="text-xs font-bold text-white font-mono">{currentInst.memory}</div>
                        <div className="text-[10px] text-slate-400 mt-1 font-mono">Thời gian chơi: {currentInst.playTime}</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-base-900/60 border border-white/5 sm:col-span-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-emerald" />
                          <span className="text-xs font-mono text-slate-300">{t.preview.ready_status}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">Zero Crash Collision</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'mods' && (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {sampleMods.map((m) => (
                        <div key={m.name} className="p-2.5 rounded-lg bg-base-900/60 border border-white/5 flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-sky-cyan" />
                            <span className="text-white font-bold">{m.name}</span>
                            <span className="text-slate-400 text-[11px]">v{m.version}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-base-800 text-slate-400">{m.category}</span>
                            <span className="text-[10px] text-sky-emerald font-semibold">Bật</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'settings' && (
                    <div className="p-3.5 rounded-xl bg-base-900/60 border border-white/5 space-y-2 text-xs font-mono">
                      <div className="flex justify-between text-slate-300">
                        <span>Java Executable:</span>
                        <span className="text-sky-cyan">C:\MCW\runtimes\java-21\bin\javaw.exe</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>JVM Arguments:</span>
                        <span className="text-slate-400">-XX:+UseG1GC -Dsun.stdout.encoding=UTF-8</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Isolation Mode:</span>
                        <span className="text-sky-emerald font-bold">STRICT_SANDBOX (Level 3)</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Big Play Launch Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-sky-emerald animate-ping" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white font-mono">READY TO PLAY</div>
                    <div className="text-[10px] text-slate-400 font-mono">Phiên bản {currentInst.version} đã sẵn sàng</div>
                  </div>
                </div>

                {/* Big Glowing Emerald PLAY Button */}
                <button
                  className="w-full sm:w-auto px-10 py-4 rounded-xl font-black text-sm tracking-widest uppercase bg-gradient-to-r from-sky-emerald via-[#5CE08D] to-sky-cyan text-base-950 shadow-[0_0_35px_rgba(111,229,156,0.45)] hover:shadow-[0_0_45px_rgba(111,229,156,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-base-950 text-base-950" />
                  <span>{t.preview.play_button}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
