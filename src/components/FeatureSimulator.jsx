import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle, Terminal, Layers, Cpu, Shield, RefreshCw, Zap } from 'lucide-react';

export default function FeatureSimulator({ t }) {
  const [selectedLoader, setSelectedLoader] = useState('neoforge');
  const [ram, setRam] = useState(6);
  const [launching, setLaunching] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [logs, setLogs] = useState([
    "[KERNEL] MCW Core Protocol initialized. Platform: Windows x64",
    "[LONGPATH] Extended \\\\?\\ path protection armed: MAX_PATH bypass active.",
    "[NETWORK] Metadata client online. Retry strategy: 5-attempts with backoff.",
    "[STATUS] Ready for sandbox launch. (๑•̀ㅂ•́)و✧"
  ]);

  const loaders = [
    { id: 'neoforge', name: 'NeoForge', version: '21.1.251', game: '1.21.1', tag: '推奨' },
    { id: 'fabric', name: 'Fabric', version: '0.16.5', game: '1.21.1', tag: '高速' },
    { id: 'forge', name: 'Forge', version: '47.3.0', game: '1.20.1', tag: '定番' },
    { id: 'quilt', name: 'Quilt', version: '0.26.0', game: '1.21.1', tag: '次世代' },
  ];

  const currentLoader = loaders.find((l) => l.id === selectedLoader) || loaders[0];

  const handleLaunch = () => {
    if (launching || launched) return;
    setLaunching(true);
    const newLogs = [
      `[LINK START] Initializing sandbox for '${currentLoader.name} Ready'`,
      `[ISOLATE] Mounting container: .mcw-data/instances/${currentLoader.name}-Sandbox`,
      `[RUNTIME] Auto-provisioning Java 21 Adoptium Temurin (64-bit)...`,
      `[WINDOWS] Long path verified safe: \\\\?\\ prefix active (Zero WinError 3).`,
      `[JVM] Setting Heap: -Xms2G -Xmx${ram}G -XX:+UseG1GC`,
      `[MODLOADER] Injected ${currentLoader.name} ${currentLoader.version} (Minecraft ${currentLoader.game})`,
      `[SPAWN] Game window rendered (PID: 20492). Have fun! (≧◡≦) ✨`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < newLogs.length) {
        setLogs((prev) => [...prev, newLogs[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setLaunching(false);
        setLaunched(true);
      }
    }, 350);
  };

  const handleReset = () => {
    setLaunched(false);
    setLaunching(false);
    setLogs([
      "[SYSTEM] Sandbox reset completed.",
      `[LOADER] Ready on ${currentLoader.name} ${currentLoader.version}`,
      "[STATUS] Awaiting Link Start command..."
    ]);
  };

  const handleReloadLoader = () => {
    setLogs((prev) => [
      ...prev,
      `[RELOAD] User clicked Instant Reload (v1.6.1 feature).`,
      `[HTTP] Fetching metadata with max_attempts=5 exponential backoff...`,
      `[HTTP] Attempt 1/5: 200 OK. ${currentLoader.name} versions refreshed! ✦`
    ]);
  };

  return (
    <section id="simulator" className="py-20 relative overflow-hidden bg-obsidian-900/60 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-mono font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.simulator.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.simulator.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.simulator.subtitle}
          </p>
        </div>

        {/* HUD Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls HUD */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-5 sm:p-6 space-y-5 border border-anime-pink/20 shadow-xl">
            {/* Header of HUD */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-anime-pink" />
                <span className="font-bold text-white tracking-wide text-xs font-mono uppercase">
                  INSTANCE PILOT // 制御盤
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-cyber-neon font-semibold">
                SYSTEM ONLINE
              </span>
            </div>

            {/* Select Modloader */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase text-slate-300 font-semibold">
                  {t.simulator.select_loader}
                </label>
                {/* Instant reload button */}
                <button
                  onClick={handleReloadLoader}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 px-2.5 py-1 rounded-md transition-colors border border-cyan-500/30"
                  title="Simulate instant loader reload with 5 retries"
                >
                  <RefreshCw className="w-3 h-3 animate-spin-slow" />
                  <span>Reload (5 Retries)</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {loaders.map((loader) => (
                  <button
                    key={loader.id}
                    onClick={() => {
                      setSelectedLoader(loader.id);
                      setLogs((prev) => [
                        ...prev,
                        `[SELECT] Switch to ${loader.name} (${loader.version}) for MC ${loader.game}`
                      ]);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all relative ${
                      selectedLoader === loader.id
                        ? 'bg-obsidian-800 border-anime-pink shadow-[0_0_15px_rgba(255,77,141,0.25)]'
                        : 'bg-obsidian-950/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{loader.name}</span>
                      <span className="text-[9px] font-mono text-slate-400 border border-white/10 px-1 rounded">
                        {loader.tag}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 block mt-1">
                      MC {loader.game}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RAM Allocation Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-semibold">{t.simulator.ram_allocated}</span>
                <span className="text-anime-pink font-bold">{ram} GB DDR4/DDR5</span>
              </div>
              <input
                type="range"
                min="2"
                max="16"
                step="1"
                value={ram}
                onChange={(e) => setRam(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-anime-pink"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>2 GB</span>
                <span>8 GB (Optimal)</span>
                <span>16 GB</span>
              </div>
            </div>

            {/* Live badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyber-cyan flex items-center gap-1">
                <Shield className="w-3 h-3" />
                {t.simulator.extended_path_badge}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-cyber-purple flex items-center gap-1">
                <Cpu className="w-3 h-3" />
                {t.simulator.auto_heal_badge}
              </span>
            </div>

            {/* Launch Buttons */}
            <div className="pt-2 flex gap-2.5">
              <button
                onClick={handleLaunch}
                disabled={launching || launched}
                className={`flex-1 py-3 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                  launched
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-cyber-neon cursor-default'
                    : launching
                    ? 'bg-anime-pink/20 text-slate-300 cursor-wait'
                    : 'bg-gradient-to-r from-anime-pink via-cyber-purple to-cyber-cyan text-white hover:shadow-[0_0_25px_rgba(255,77,141,0.4)]'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${launching ? 'animate-spin' : ''}`} />
                <span>
                  {launching
                    ? t.simulator.launching
                    : launched
                    ? t.simulator.active
                    : t.simulator.btn_launch}
                </span>
              </button>

              <button
                onClick={handleReset}
                className="p-3 rounded-xl bg-obsidian-950 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Console View */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-5 sm:p-6 space-y-3.5 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-anime-pink" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
                  {t.simulator.terminal_title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-anime-pink animate-ping opacity-75" />
                <span className="text-[10px] font-mono text-cyan-400">TTY: LIVE</span>
              </div>
            </div>

            {/* Logs Area */}
            <div className="bg-obsidian-950/95 rounded-xl p-3.5 h-[300px] overflow-y-auto font-mono text-xs text-slate-300 space-y-1.5 border border-white/5">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`leading-relaxed ${
                    log.includes('[ERROR]')
                      ? 'text-red-400'
                      : log.includes('[SPAWN]') || log.includes('(≧◡≦)')
                      ? 'text-cyber-neon font-semibold'
                      : log.includes('[LINK START]') || log.includes('[RELOAD]')
                      ? 'text-anime-pink'
                      : log.includes('[WINDOWS]') || log.includes('[RUNTIME]')
                      ? 'text-cyber-cyan'
                      : log.includes('[JVM]')
                      ? 'text-cyber-purple'
                      : 'text-slate-400'
                  }`}
                >
                  <span className="text-slate-600 select-none mr-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {log}
                </div>
              ))}
              {launching && (
                <div className="text-anime-pink animate-pulse flex items-center gap-1 mt-2 text-xs">
                  <span>✦ Processing container injection</span>
                  <span className="animate-bounce">...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
