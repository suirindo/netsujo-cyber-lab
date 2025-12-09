"use client";

import { useState, useEffect } from "react";

// ============================================
// アイコンコンポーネント
// ============================================

const ShieldCheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ExclamationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const ChartBarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const LockClosedIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const UserGroupIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const ChatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const DocumentTextIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const GlobeAltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const CodeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// ============================================
// SOCダッシュボード風アニメーション
// ============================================

// 攻撃タイプの定義
const ATTACK_TYPES = [
  { name: "SQL Injection", severity: "CRITICAL", color: "red" },
  { name: "XSS Attack", severity: "HIGH", color: "orange" },
  { name: "Brute Force", severity: "MEDIUM", color: "yellow" },
  { name: "Port Scan", severity: "LOW", color: "blue" },
  { name: "DDoS Attempt", severity: "CRITICAL", color: "red" },
  { name: "Path Traversal", severity: "HIGH", color: "orange" },
  { name: "CSRF Attack", severity: "MEDIUM", color: "yellow" },
  { name: "RCE Attempt", severity: "CRITICAL", color: "red" },
];

// 国とIPの定義
const ATTACK_SOURCES = [
  { country: "CN", ip: "223.71.xxx.xxx", lat: 35, lng: 20 },
  { country: "RU", ip: "185.22.xxx.xxx", lat: 25, lng: 30 },
  { country: "US", ip: "104.18.xxx.xxx", lat: 30, lng: 75 },
  { country: "KR", ip: "211.38.xxx.xxx", lat: 38, lng: 15 },
  { country: "BR", ip: "189.40.xxx.xxx", lat: 55, lng: 65 },
  { country: "DE", ip: "185.10.xxx.xxx", lat: 28, lng: 42 },
  { country: "IN", ip: "103.21.xxx.xxx", lat: 45, lng: 25 },
  { country: "UK", ip: "82.132.xxx.xxx", lat: 26, lng: 45 },
];

interface LogEntry {
  id: number;
  time: string;
  type: typeof ATTACK_TYPES[number];
  source: typeof ATTACK_SOURCES[number];
  blocked: boolean;
}

interface AttackLine {
  id: number;
  source: typeof ATTACK_SOURCES[number];
  blocked: boolean;
}

function SOCDashboard() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [stats, setStats] = useState({ blocked: 0, total: 0, critical: 0, high: 0 });
  const [attackLines, setAttackLines] = useState<AttackLine[]>([]);
  const [alertFlash, setAlertFlash] = useState(false);

  useEffect(() => {
    // ログを生成
    const logInterval = setInterval(() => {
      const attackType = ATTACK_TYPES[Math.floor(Math.random() * ATTACK_TYPES.length)];
      const source = ATTACK_SOURCES[Math.floor(Math.random() * ATTACK_SOURCES.length)];
      const blocked = Math.random() > 0.1; // 90%ブロック
      const now = new Date();
      const time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;

      const newLog: LogEntry = {
        id: Date.now(),
        time,
        type: attackType,
        source,
        blocked,
      };

      setLogs((prev) => [newLog, ...prev].slice(0, 8));
      setStats((prev) => ({
        blocked: prev.blocked + (blocked ? 1 : 0),
        total: prev.total + 1,
        critical: prev.critical + (attackType.severity === "CRITICAL" ? 1 : 0),
        high: prev.high + (attackType.severity === "HIGH" ? 1 : 0),
      }));

      // 攻撃線を追加
      setAttackLines((prev) => [...prev.slice(-5), { id: Date.now(), source, blocked }]);

      // 重大な攻撃時はフラッシュ
      if (attackType.severity === "CRITICAL") {
        setAlertFlash(true);
        setTimeout(() => setAlertFlash(false), 500);
      }
    }, 1200);

    return () => clearInterval(logInterval);
  }, []);

  // 攻撃線を削除
  useEffect(() => {
    const cleanup = setInterval(() => {
      setAttackLines((prev) => prev.filter((a) => Date.now() - a.id < 2500));
    }, 500);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl ${
      alertFlash ? "border-red-500/80 shadow-[0_0_30px_rgba(239,68,68,0.4)]" : "border-slate-700/50"
    }`}>
      {/* ヘッダー */}
      <div className="bg-slate-900 border-b border-slate-700/50 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
          </div>
          <span className="text-slate-300 text-sm md:text-base font-mono font-medium">Security Operations Center — Live Monitor</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-400 text-sm font-mono font-medium">MONITORING</span>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="bg-slate-950 p-5 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* 左側：世界地図 + 攻撃元 */}
          <div className="lg:col-span-2 space-y-4">
            {/* 地図エリア */}
            <div className="relative h-64 md:h-80 bg-slate-900/50 rounded-xl border border-slate-700/30 overflow-hidden">
              {/* 簡易世界地図（ドット表現） */}
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  {/* 大陸をドットで表現 */}
                  <g fill="rgba(100,116,139,0.5)">
                    {/* 北米 */}
                    <circle cx="20" cy="20" r="8" />
                    <circle cx="25" cy="25" r="6" />
                    {/* 南米 */}
                    <circle cx="28" cy="42" r="5" />
                    {/* ヨーロッパ */}
                    <circle cx="48" cy="18" r="4" />
                    <circle cx="52" cy="22" r="3" />
                    {/* アフリカ */}
                    <circle cx="50" cy="35" r="6" />
                    {/* アジア */}
                    <circle cx="70" cy="22" r="8" />
                    <circle cx="78" cy="28" r="5" />
                    {/* オーストラリア */}
                    <circle cx="82" cy="45" r="4" />
                  </g>
                </svg>
              </div>

              {/* 中央の防御ポイント（日本） */}
              <div className="absolute right-[15%] top-[35%]">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-emerald-500 relative z-10" />
                </div>
              </div>

              {/* 攻撃線 SVG */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="attackLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                  <filter id="lineGlow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {attackLines.map((line) => (
                  <g key={line.id}>
                    <line
                      x1={`${line.source.lng}%`}
                      y1={`${line.source.lat}%`}
                      x2="85%"
                      y2="35%"
                      stroke={line.blocked ? "#ef4444" : "#f97316"}
                      strokeWidth="2"
                      filter="url(#lineGlow)"
                      strokeDasharray="200"
                      style={{
                        animation: "dash-attack 1.5s ease-out forwards",
                      }}
                    />
                    {/* ブロック時のインパクト */}
                    {line.blocked && (
                      <circle
                        cx="85%"
                        cy="35%"
                        r="3%"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="2"
                        style={{
                          animation: "ripple 0.8s ease-out forwards",
                        }}
                      />
                    )}
                  </g>
                ))}
              </svg>

              {/* 攻撃元ポイント */}
              {ATTACK_SOURCES.map((source, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2"
                  style={{ left: `${source.lng}%`, top: `${source.lat}%` }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                </div>
              ))}

              {/* ラベル */}
              <div className="absolute bottom-2 left-2 text-xs text-slate-500 font-mono">
                GLOBAL THREAT MAP
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-slate-400">Attack</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-400">Defense</span>
                </span>
              </div>
            </div>

            {/* 統計パネル */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                <div className="text-xs text-slate-500 font-mono mb-2">BLOCKED</div>
                <div className="text-3xl font-bold text-emerald-400 font-mono">{stats.blocked}</div>
                <div className="text-xs text-emerald-500/60 mt-1">threats stopped</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                <div className="text-xs text-slate-500 font-mono mb-2">TOTAL</div>
                <div className="text-3xl font-bold text-slate-300 font-mono">{stats.total}</div>
                <div className="text-xs text-slate-500/60 mt-1">detected</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-red-500/30">
                <div className="text-xs text-slate-500 font-mono mb-2">CRITICAL</div>
                <div className="text-3xl font-bold text-red-400 font-mono">{stats.critical}</div>
                <div className="text-xs text-red-500/60 mt-1">severity</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-orange-500/30">
                <div className="text-xs text-slate-500 font-mono mb-2">HIGH</div>
                <div className="text-3xl font-bold text-orange-400 font-mono">{stats.high}</div>
                <div className="text-xs text-orange-500/60 mt-1">severity</div>
              </div>
            </div>
          </div>

          {/* 右側：リアルタイムログ */}
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-xl border border-slate-700/30 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-700/30 flex items-center justify-between">
                <span className="text-sm text-slate-400 font-mono font-medium">LIVE THREAT LOG</span>
                <span className="text-sm text-emerald-400 font-mono animate-pulse">● LIVE</span>
              </div>
              <div className="p-2 h-80 md:h-96 overflow-hidden">
                <div className="space-y-1.5">
                  {logs.map((log, index) => (
                    <div
                      key={log.id}
                      className={`text-sm font-mono p-3 rounded-lg border transition-all duration-300 ${
                        index === 0 ? "bg-slate-800/80" : "bg-slate-900/50"
                      } ${
                        log.type.severity === "CRITICAL"
                          ? "border-red-500/40"
                          : log.type.severity === "HIGH"
                          ? "border-orange-500/30"
                          : "border-slate-700/30"
                      }`}
                      style={{
                        animation: index === 0 ? "slide-in 0.3s ease-out" : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-500 text-xs">{log.time}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold ${
                            log.type.severity === "CRITICAL"
                              ? "bg-red-500/20 text-red-400"
                              : log.type.severity === "HIGH"
                              ? "bg-orange-500/20 text-orange-400"
                              : log.type.severity === "MEDIUM"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {log.type.severity}
                        </span>
                      </div>
                      <div className="text-slate-200 font-medium truncate">{log.type.name}</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-slate-500 text-xs">
                          {log.source.country} • {log.source.ip}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            log.blocked ? "text-emerald-400" : "text-red-400"
                          }`}
                        >
                          {log.blocked ? "✓ BLOCKED" : "⚠ ALERT"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 注意書き */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500 font-mono">
            ※ この画面はイメージです。実際のセキュリティ監視画面ではありません。
          </p>
        </div>
      </div>
    </div>
  );
}

function CyberBattleAnimation() {
  return <SOCDashboard />;
}

// ============================================
// ヘッダー
// ============================================

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-950/95 backdrop-blur-md border-b border-blue-800/50 shadow-lg shadow-blue-950/50" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
            <ShieldCheckIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="font-bold text-white tracking-wide">Netsujo</span>
            <span className="block text-xs text-blue-300">Cyber Lab</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["サービス", "メニュー", "ご利用の流れ", "FAQ"].map((item, i) => (
            <a
              key={i}
              href={`#${["services", "pricing", "flow", "faq"][i]}`}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
            無料でお問合せ
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-md border-t border-blue-800/50 py-4">
          <div className="container-custom flex flex-col gap-4">
            {["サービス", "メニュー", "ご利用の流れ", "FAQ"].map((item, i) => (
              <a
                key={i}
                href={`#${["services", "pricing", "flow", "faq"][i]}`}
                className="text-slate-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-center py-3">
              無料でお問合せ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ============================================
// ヒーローセクション
// ============================================

function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-28 pb-8 overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-blue-900/30" />
      
      {/* 装飾グロー */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* テキストセクション */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className={`space-y-6 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 badge badge-primary">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>Web3・業務システムのセキュリティ専門</span>
            </div>

            {/* メインコピー */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-glow">
              あなたのプロダクト、
              <br />
              まだ<span className="gradient-text">「善意」と「偶然の無事故」</span>に
              <br />
              依存していませんか？
            </h1>

            {/* サブコピー */}
            <div className="space-y-4 text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              <p>
                <span className="text-white font-medium">元警視庁警察官 × Web3セキュリティ専門家</span>が、
                攻撃者の視点・現場のリスク感覚・設計の盲点を総合的に監査。
              </p>
              <p>
                技術の脆弱性だけでなく、
                <span className="text-blue-200">運用ミス・権限管理・人間依存・仕様の歪み</span>まで、
                攻撃者に"突かれる場所"を洗い出し、安全性を底面から引き上げます。
              </p>
            </div>
          </div>
        </div>

        {/* アニメーションセクション */}
        <div className={`${mounted ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <CyberBattleAnimation />
        </div>

        {/* CTA */}
        <div className={`max-w-3xl mx-auto text-center mt-6 ${mounted ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              <ChatIcon className="w-5 h-5" />
              無料でお問合せ
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-secondary inline-flex items-center justify-center gap-2">
              サービス内容を見る
            </a>
          </div>
          <p className="text-sm text-blue-200/80 mt-4 bg-blue-900/40 px-4 py-2 rounded-lg inline-block">
            「気づいていなかった危険」を可視化し、事業が落ちる穴を事前に潰すパートナーです。
          </p>
        </div>

        {/* スクロールインジケーター */}
        <div className="flex justify-center mt-8">
          <div className="p-2 rounded-full bg-blue-800/50 border border-blue-600/30">
            <ChevronDownIcon className="w-5 h-5 text-blue-300 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 課題セクション
// ============================================

function PainPointsSection() {
  const painPoints = [
    "エンジニアから「そろそろセキュリティ対策が必要」と言われているが、何から手をつければいいか分からない",
    "Web3やブロックチェーンを扱っており、万が一の被害時に炎上・信用失墜が怖い",
    "SaaSや業務システムを外注しており、ベンダー任せで本当に大丈夫か不安",
    "脆弱性診断業者を調べたが、「フル診断」しかなくて高額＆オーバースペックに感じている",
    "社内にCISOやセキュリティ専門人材がおらず、意思決定の相談相手がいない",
  ];

  return (
    <section className="py-24 section-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              こんなお悩みはありませんか？
            </h2>
            <p className="text-slate-300">
              セキュリティは重要だと分かっていても、<br className="hidden sm:block" />
              後回しになりがちな理由があります。
            </p>
          </div>

          {/* 課題リスト */}
          <div className="space-y-4 mb-12">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="card p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <ExclamationIcon className="w-4 h-4 text-amber-500" />
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* 結論 */}
          <div className="highlight-box">
            <p className="text-slate-200 leading-relaxed text-base">
              本格的なペンテストに数十〜数百万円を投じる前に、
              <br className="hidden sm:block" />
              <span className="text-white font-semibold">
                「まず状況を整理して、優先順位をつけてほしい」
              </span>
              <br className="hidden sm:block" />
              というのが多くの企業の本音です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// サービス概要
// ============================================

function ServicesSection() {
  const services = [
    {
      level: "Level 1",
      title: "リスクアセスメント & セキュリティ設計相談",
      description: "経営・事業の視点から「どこまでのセキュリティを、いつまでに、いくらでやるべきか」を一緒に整理します。",
      features: [
        "現状ヒアリング（プロダクト・運用・体制）",
        "想定リスクの洗い出し（技術＋人＋業務フロー）",
        "優先順位付けと対策レベルの整理",
      ],
      icon: <ChartBarIcon className="w-6 h-6" />,
      available: true,
    },
    {
      level: "Level 2",
      title: "簡易脆弱性診断",
      description: "フルスケールのペンテスト前に、まずは全体像をざっくり把握したい方向けのライト診断です。",
      features: [
        "自動ツール＋限定的な手動チェック",
        "OWASP Top10を中心とした主要項目の検査",
        "優先度付きの改善提案レポート",
      ],
      icon: <SearchIcon className="w-6 h-6" />,
      available: true,
    },
    {
      level: "Level 3",
      title: "本格ペネトレーションテスト",
      description: "専門資格を有するホワイトハッカーと連携し、実際の攻撃を模した高度なテストを行います。",
      features: [
        "実際の攻撃者と同様の手法でのテスト",
        "詳細な技術レポートと経営向けサマリー",
        "改善後の再テストまでフルサポート",
      ],
      icon: <LockClosedIcon className="w-6 h-6" />,
      available: false,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container-custom">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3">Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            サービスの全体像
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            フェーズや予算に応じて、最適なプランをご提案します。
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`card p-8 ${!service.available ? "opacity-70" : ""}`}>
              {/* バッジ */}
              <div className="flex items-center justify-between mb-6">
                <span className="badge badge-primary">{service.level}</span>
                {!service.available && <span className="badge badge-coming">準備中</span>}
              </div>

              {/* アイコン */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-5">
                {service.icon}
              </div>

              {/* 内容 */}
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>

              {/* 機能リスト */}
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// ストーリーセクション
// ============================================

function StorySection() {
  return (
    <section className="py-24 section-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-medium mb-3">Our Story</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
            なぜWeb3開発会社が
            <br />
            セキュリティ事業を始めるのか
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed text-left md:text-center">
            <p>
              代表の飯田は、かつて<span className="text-white font-medium">警視庁警察官として2年半勤務</span>し、
              現場で「人の善意に依存する安全」の危うさを見てきました。
            </p>
            <p>
              その後、Web業界に入り、現在は<span className="text-white font-medium">京都発のWeb3専門開発パートナー</span>
              として、ブロックチェーン・NFT・DIDを活用したシステム開発支援を行っています。
            </p>
            <p>
              私たちは「元警察官の視点」×「Web3開発の実務」×「オフショア開発体制」という組み合わせで、
              <span className="text-white font-medium">事業フェーズに合った現実的なセキュリティ戦略</span>を
              伴走するパートナーとして、この領域に踏み込むことにしました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 強みセクション（独立）
// ============================================

function StrengthsSection() {
  const strengths = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "元警視庁警察官の視点",
      description: "法令・倫理・社会的信用の観点から、現実的な判断ができます。",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Web3実務に根ざした知見",
      description: "NFT・トークン・DIDなど、オンチェーン/オフチェーンが交差する領域を理解しています。",
      gradient: "from-cyan-500 to-emerald-400",
    },
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: "開発も分かるセキュリティ",
      description: "「診断して終わり」ではなく、実装しやすい改善案まで落とし込みます。",
      gradient: "from-violet-500 to-blue-400",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "フェーズに合わせた提案",
      description: "「今いくら投資すべきか」「どこまでやれば十分か」を一緒に考えます。",
      gradient: "from-amber-500 to-orange-400",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3">Our Strengths</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            私たちの強み
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            セキュリティの専門家として、多角的な視点でお客様のビジネスを守ります
          </p>
        </div>

        {/* 強みカード */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/60 to-slate-900/80 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* グロー効果 */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* アイコン */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* テキスト */}
              <h3 className="relative text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="relative text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            詳しく相談する
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 料金プラン
// ============================================

function PricingSection() {
  const plans = [
    {
      name: "リスクアセスメント",
      description: "経営視点でのセキュリティ優先順位整理",
      features: [
        "2〜3時間のオンラインヒアリング",
        "想定リスク一覧と優先度マッピング",
        "「直近3ヶ月でやるべきこと」リスト",
      ],
      recommended: false,
    },
    {
      name: "簡易脆弱性診断",
      description: "主要な脆弱性を網羅的にチェック",
      features: [
        "ツール＋限定的な手動チェック",
        "OWASP Top10ベースの検査",
        "10〜20ページの診断レポート",
        "簡易な再診断1回含む",
      ],
      recommended: true,
    },
    {
      name: "セキュリティ顧問",
      description: "継続的なセキュリティ相談窓口",
      features: [
        "月1回のオンラインミーティング",
        "設計・仕様書レビュー",
        "ベンダーコントロールの相談",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container-custom">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3">Service Menu</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            サービスメニュー
          </h2>
          <p className="text-slate-300">
            ご要件をヒアリングの上、最適なプランをご提案いたします
          </p>
        </div>

        {/* プランカード */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card p-8 relative ${plan.recommended ? "border-blue-500/50" : ""}`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  おすすめ
                </div>
              )}

              <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-300 text-sm mb-5">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-blue-800/40">
                <span className="text-blue-300 text-sm font-medium">個別お見積り</span>
              </div>
            </div>
          ))}
        </div>

        {/* 将来のサービス */}
        <div className="card p-8 max-w-xl mx-auto text-center">
          <span className="badge badge-coming mb-4 inline-block">準備中</span>
          <h3 className="text-lg font-semibold text-white mb-3">本格ペネトレーションテスト</h3>
          <p className="text-slate-300 text-sm">
            現在、専門資格の取得と体制構築を進めています。
          </p>
        </div>

        {/* お見積りCTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            無料でお見積り相談
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 対応領域
// ============================================

function ScopeSection() {
  const scopes = [
    { icon: <GlobeAltIcon className="w-5 h-5" />, label: "Webアプリケーション" },
    { icon: <DocumentTextIcon className="w-5 h-5" />, label: "管理画面・業務システム" },
    { icon: <LockClosedIcon className="w-5 h-5" />, label: "Web3 / ブロックチェーン" },
    { icon: <CodeIcon className="w-5 h-5" />, label: "API連携" },
    { icon: <UserGroupIcon className="w-5 h-5" />, label: "社内フロー・権限設計" },
  ];

  return (
    <section className="py-16 section-alt">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold text-white">対応領域</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {scopes.map((scope, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-900/50 border border-blue-700/40"
            >
              <span className="text-blue-400">{scope.icon}</span>
              <span className="text-slate-300 text-sm">{scope.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 利用の流れ
// ============================================

function FlowSection() {
  const steps = [
    { title: "お問い合わせ", description: "フォームまたはメールからご連絡" },
    { title: "事前ヒアリング（無料30分）", description: "現状とお困りごとを確認" },
    { title: "プラン・お見積もり提示", description: "最適なプランをご提案" },
    { title: "診断・レビューの実施", description: "合意したスコープで実施" },
    { title: "レポート・フィードバック", description: "結果説明と優先順位付け" },
    { title: "継続サポート（任意）", description: "顧問契約や定期診断" },
  ];

  return (
    <section id="flow" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3">Process</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">ご利用の流れ</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 items-start">
                <div className="step-number flex-shrink-0">{index + 1}</div>
                <div className="card p-5 flex-1">
                  <h3 className="text-white font-medium mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQ
// ============================================

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "まだ大きな売上規模ではないスタートアップですが、相談可能ですか？",
      a: "もちろんです。むしろ「伸び始める前」に最低限のセキュリティを整理する方がコスパは高いです。フェーズに合わせて軽いプランからご提案します。",
    },
    {
      q: "Web3ではない普通のWebサービスでも依頼できますか？",
      a: "はい、対応可能です。Web3に特化した知見を持ちながら、通常のWeb/APIシステムの診断・アドバイスも行っています。",
    },
    {
      q: "すでに別の開発会社にシステムを委託していますが、問題ありませんか？",
      a: "問題ありません。開発ベンダーとは独立した「第三者視点」としてレビュー・診断を行い、必要に応じてベンダー様への伝え方も含めてサポートします。",
    },
    {
      q: "本格的なペネトレーションテストはいつから依頼できますか？",
      a: "現在、専門資格の取得と体制構築を進めており、2025年中のサービスインを目指しています。それまでの間は、リスクアセスメントと簡易診断で事前準備を進めることをお勧めしています。",
    },
  ];

  return (
    <section id="faq" className="py-24 section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">よくあるご質問</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="card overflow-hidden">
              <button
                className="w-full p-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium pr-4 text-sm">{faq.q}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="mx-5 mb-5 p-4 bg-blue-900/50 rounded-lg border border-blue-700/30">
                  <p className="text-slate-200 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// お問い合わせ
// ============================================

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container-custom">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-medium mb-3">Contact</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">お問い合わせ</h2>
            <p className="text-slate-400">
              まずはお気軽にご連絡ください。
              <br className="hidden sm:block" />
              現状の課題を整理するところからお手伝いします。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  お名前 <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  会社名 <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="株式会社サンプル"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  メールアドレス <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">電話番号</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="03-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                ご興味のあるサービス <span className="text-amber-400">*</span>
              </label>
              <select
                required
                className="form-input"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">選択してください</option>
                <option value="assessment">リスクアセスメント</option>
                <option value="diagnosis">簡易脆弱性診断</option>
                <option value="advisor">セキュリティ顧問</option>
                <option value="other">その他・相談したい</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                ご相談内容 <span className="text-amber-400">*</span>
              </label>
              <textarea
                required
                rows={4}
                className="form-input resize-none"
                placeholder="現在の課題やご要望をお聞かせください"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              送信する
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <p className="text-xs text-slate-400 text-center bg-blue-900/30 px-4 py-2 rounded-lg">
              送信いただいた情報は、お問い合わせ対応のみに使用いたします。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ============================================
// フッター
// ============================================

function Footer() {
  return (
    <footer className="py-12 border-t border-blue-800/40">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <ShieldCheckIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-white">Netsujo Cyber Lab</span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            {["サービス", "メニュー", "FAQ", "お問い合わせ"].map((item, i) => (
              <a
                key={i}
                href={`#${["services", "pricing", "faq", "contact"][i]}`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Netsujo Cyber Lab
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// メインページ
// ============================================

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="section-divider" />
      <PainPointsSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <StorySection />
      <StrengthsSection />
      <div className="section-divider" />
      <PricingSection />
      <ScopeSection />
      <div className="section-divider" />
      <FlowSection />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </main>
  );
}
