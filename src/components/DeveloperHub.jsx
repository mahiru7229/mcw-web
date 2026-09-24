import React, { useState } from 'react';
import { Terminal, Code, Copy, Check, ExternalLink, Cpu, BookOpen, Layers, Activity } from 'lucide-react';

export default function DeveloperHub({ t }) {
  const [activeTab, setActiveTab] = useState('launch');
  const [copied, setCopied] = useState(false);

  const snippets = {
    launch: `# Cài đặt thư viện: pip install mcw-core
from mcw_core import CorePaths, LaunchRequest, MCWCore

# Khởi tạo core engine không cần GUI
core = MCWCore(CorePaths.from_root("./mcw-data"))
core.operations.begin()
try:
    result = core.launch(
        LaunchRequest(
            instance="My Instance",
            offline_username="Player",
            on_progress=lambda e: print(f"[{e.stage}] {e.message}"),
            quick_play_singleplayer="New World", # Vào thẳng singleplayer
        )
    )
    print("Minecraft running PID:", result.process.pid)
finally:
    core.operations.finish()`,

    create: `from mcw_core import InstanceCreateRequest, get_default_core

core = get_default_core()

# Tạo instance NeoForge với RAM & JVM cờ tối ưu
instance = core.instances.create(
    InstanceCreateRequest(
        name="NeoForge 1.21.1 Production",
        version_id="1.21.1",
        loader_name="neoforge",
        jvm_arguments=("-XX:+UseG1GC", "-Dfml.ignoreInvalidMinecraftCertificates=true"),
    )
)
print("Created instance:", instance.name, instance.version_id)`,

    health: `# Kiểm tra sức khỏe instance & giám sát phiên tiến trình
from mcw_core import CorePaths, MCWCore

core = MCWCore(CorePaths.from_root("./mcw-data"))
report = core.instances.health("NeoForge 1.21.1 Production")

print("Instance State:", report.state)
if report.issues:
    for issue in report.issues:
        print(f"Warning [{issue.code}]: {issue.message}")
else:
    print("Instance Status: 100% HEALTHY - Ready to launch")`,

    cli: `# Sử dụng công cụ dòng lệnh mcw-core CLI đi kèm:
mcw-core-launch --root ./mcw-data --list

# Khởi chạy một instance bất kỳ không cần mở giao diện GUI:
mcw-core-launch --root ./mcw-data --instance "NeoForge 1.21.1 Production" --username Player`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="core-hub" className="py-20 relative overflow-hidden bg-obsidian-900/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asuka-red/10 border border-asuka-red/30 text-asuka-red text-xs font-mono font-semibold">
              <Terminal className="w-3.5 h-3.5 text-asuka-flame" />
              <span>{t.core_hub.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.core_hub.title}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.core_hub.subtitle}
            </p>

            {/* Quick pip install command */}
            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-between font-mono text-xs text-cyber-cyan shadow-inner">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">$</span>
                <span>pip install mcw-core</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('pip install mcw-core');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-slate-400 hover:text-white transition-colors"
                title="Copy command"
              >
                {copied ? <Check className="w-4 h-4 text-cyber-neon" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://mahiru7229.github.io/mcw_core/index.html"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-white/10 hover:border-asuka-flame/40 flex items-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4 text-asuka-flame" />
                <span>{t.core_hub.read_docs}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href="https://github.com/mahiru7229/mcw-launcher-core"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider bg-obsidian-950 hover:bg-obsidian-900 text-slate-300 border border-white/10 hover:border-asuka-amber/40 flex items-center gap-2 transition-all"
              >
                <Layers className="w-4 h-4 text-asuka-amber" />
                <span>{t.core_hub.view_core_repo}</span>
              </a>
            </div>
          </div>

          {/* Right code snippet preview */}
          <div className="lg:col-span-7 glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Tab header */}
            <div className="bg-obsidian-950 px-4 py-3 flex items-center justify-between border-b border-white/10 overflow-x-auto">
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setActiveTab('launch')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    activeTab === 'launch'
                      ? 'bg-obsidian-800 text-asuka-flame border border-asuka-flame/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.core_hub.example_tab_launch}
                </button>
                <button
                  onClick={() => setActiveTab('create')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    activeTab === 'create'
                      ? 'bg-obsidian-800 text-asuka-flame border border-asuka-flame/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.core_hub.example_tab_create}
                </button>
                <button
                  onClick={() => setActiveTab('health')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    activeTab === 'health'
                      ? 'bg-obsidian-800 text-asuka-flame border border-asuka-flame/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.core_hub.example_tab_health || 'Health & Diagnos'}
                </button>
                <button
                  onClick={() => setActiveTab('cli')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    activeTab === 'cli'
                      ? 'bg-obsidian-800 text-asuka-flame border border-asuka-flame/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.core_hub.example_tab_cli}
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors shrink-0 ml-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-cyber-neon" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code editor body */}
            <div className="p-5 bg-obsidian-950/95 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[380px]">
              <pre className="text-slate-300 whitespace-pre">
                <code>{snippets[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
