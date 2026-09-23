import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle, Terminal, Layers, Cpu, Shield, RefreshCw } from 'lucide-react';

export default function FeatureSimulator({ t }) {
  const [selectedLoader, setSelectedLoader] = useState('neoforge');
  const [ram, setRam] = useState(6);
  const [launching, setLaunching] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [logs, setLogs] = useState([
    "[SYSTEM] MCW Kernel initialized. Platform: Windows x64 (Win32)",
    "[CORE] Extended \\\\?\\ path protection armed: MAX_PATH (260) bypass enabled.",
    "[CACHE] Modloader repository cache verified. Network retry protocol: 5-attempts active.",
    "[STATUS] Ready for sandbox launch."
  ]);

  const loaders = [
    { id: 'neoforge', name: 'NeoForge', version: '21.1.251', game: '1.21.1', color: 'from-amber-500 to-orange-500' },
    { id: 'fabric', name: 'Fabric', version: '0.16.5', game: '1.21.1', color: 'from-cyan-400 to-blue-500' },
    { id: 'forge', name: 'Forge', version: '47.3.0', game: '1.20.1', color: 'from-orange-500 to-red-500' },
    { id: 'quilt', name: 'Quilt', version: '0.26.0', game: '1.21.1', color: 'from-purple-400 to-indigo-500' },
  ];

  const currentLoader = loaders.find((l) => l.id === selectedLoader) || loaders[0];

  const handleLaunch = () => {
    if (launching || launched) return;
    setLaunching(true);
    const newLogs = [
      `[LAUNCH] Request received for instance '${currentLoader.name} Ready'`,
      `[ISOLATION] Sandboxing instance directory: .mcw-data/instances/${currentLoader.name} Ready`,
      `[RESOLVE] Provisioning Java 21 Adoptium runtime via ManagedJavaRepository...`,
      `[LONGPATH] Path check: verified safe against WinError 3 with \\\\?\\ prefix.`,
      `[JVM] Applying flags: -Xmx${ram}G -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions`,
      `[MODLOADER] Injected ${currentLoader.name} ${currentLoader.version} (Minecraft ${currentLoader.game})`,
      `[PROCESS] Minecraft client process spawned (PID: 14892). Game window ready.`
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
    }, 400);
  };

  const handleReset = () => {
    setLaunched(false);
    setLaunching(false);
    setLogs([
      "[SYSTEM] Sandbox reset.",
      `[LOADER] Selected ${currentLoader.name} ${currentLoader.version}`,
      "[STATUS] Ready for launch simulation."
    ]);
  };

  const handleReloadLoader = () => {
    setLogs((prev) => [
      ...prev,
      `[RELOAD] User clicked Instant Reload Button. Cache invalidated.`,
      `[HTTP] Fetching metadata with max_attempts=5 & exponential backoff...`,
      `[HTTP] Attempt 1/5: 200 OK. Loaded ${currentLoader.name} versions successfully!`
    ]);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-obsidian-900/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-mono font-semibold">
            {t.simulator.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.simulator.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.simulator.subtitle}
          </p>
        </div>

        {/* HUD Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls HUD */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-cyan-500/20 shadow-2xl">
            {/* Header of HUD */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyber-cyan" />
                <span className="font-bold text-white tracking-wide text-sm font-mono uppercase">
                  Instance Architect
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-cyber-neon">
                KERNEL ACTIVE
              </span>
            </div>

            {/* Select Modloader */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase text-slate-300 font-semibold flex items-center gap-2">
                  <span>{t.simulator.select_loader}</span>
                </label>
                {/* Instant reload button */}
                <button
                  onClick={handleReloadLoader}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 px-2 py-1 rounded transition-colors border border-cyan-500/30"
                  title="Simulate instant loader versions reload"
                >
                  <RefreshCw className="w-3 h-3 animate-spin-slow" />
                  <span>Reload (5 Retries)</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {loaders.map((loader) => (
                  <button
                    key={loader.id}
                    onClick={() => {
                      setSelectedLoader(loader.id);
                      setLogs((prev) => [
                        ...prev,
                        `[SELECT] Switch modloader to ${loader.name} (${loader.version}) for Minecraft ${loader.game}`
                      ]);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedLoader === loader.id
                        ? 'bg-obsidian-800 border-cyber-cyan shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                        : 'bg-obsidian-950/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{loader.name}</span>
                      {selectedLoader === loader.id && (
                        <CheckCircle className="w-4 h-4 text-cyber-cyan" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400 block mt-1">
                      MC {loader.game}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RAM Allocation Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 font-semibold">{t.simulator.ram_allocated}</span>
                <span className="text-cyber-cyan font-bold">{ram} GB DDR4/DDR5</span>
              </div>
              <input
                type="range"
                min="2"
                max="16"
                step="1"
                value={ram}
                onChange={(e) => setRam(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>2 GB</span>
                <span>8 GB (Rec)</span>
                <span>16 GB</span>
              </div>
            </div>

            {/* Live badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyber-cyan flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                {t.simulator.extended_path_badge}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-cyber-purple flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                {t.simulator.auto_heal_badge}
              </span>
            </div>

            {/* Launch Buttons */}
            <div className="pt-4 flex gap-3">
              <button
                onClick={handleLaunch}
                disabled={launching || launched}
                className={`flex-1 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                  launched
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-cyber-neon cursor-default'
                    : launching
                    ? 'bg-cyan-500/30 text-slate-300 cursor-wait'
                    : 'bg-gradient-to-r from-cyber-cyan to-cyber-purple text-obsidian-950 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                }`}
              >
                <Play className={`w-4 h-4 ${launching ? 'animate-spin' : ''}`} />
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
                className="p-3.5 rounded-xl bg-obsidian-950 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Console View */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
                  {t.simulator.terminal_title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-400">TTY: 0</span>
              </div>
            </div>

            {/* Logs area */}
            <div className="bg-obsidian-950/90 rounded-xl p-4 h-[330px] overflow-y-auto font-mono text-xs text-slate-300 space-y-1.5 border border-white/5">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`leading-relaxed ${
                    log.includes('[ERROR]')
                      ? 'text-red-400'
                      : log.includes('[PROCESS]') || log.includes('[STATUS]')
                      ? 'text-cyber-neon'
                      : log.includes('[LONGPATH]') || log.includes('[RELOAD]')
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
                <div className="text-cyan-400 animate-pulse flex items-center gap-1 mt-2">
                  <span>Executing runtime operations</span>
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
