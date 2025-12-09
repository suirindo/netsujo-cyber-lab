"use client";

import { useState, useEffect } from "react";

// ============================================
// アイコンコンポーネント
// ============================================

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const AlertIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CodeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const UserIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const ChatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const DocumentIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const ChartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const LockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const GlobeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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

// ============================================
// ヘッダーコンポーネント
// ============================================

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <ShieldIcon className="w-10 h-10 text-cyber-blue group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-cyber-blue/20 blur-xl group-hover:bg-cyber-blue/30 transition-colors" />
          </div>
          <div>
            <span className="font-[var(--font-orbitron)] text-lg font-bold text-white tracking-wider">
              NETSUJO
            </span>
            <span className="block text-xs text-cyber-blue tracking-widest">CYBER LAB</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-gray-300 hover:text-cyber-blue transition-colors">
            サービス
          </a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-cyber-blue transition-colors">
            料金
          </a>
          <a href="#flow" className="text-sm text-gray-300 hover:text-cyber-blue transition-colors">
            ご利用の流れ
          </a>
          <a href="#faq" className="text-sm text-gray-300 hover:text-cyber-blue transition-colors">
            FAQ
          </a>
          <a href="#contact" className="btn-primary text-sm py-2 px-4">
            無料相談
          </a>
        </nav>
      </div>
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 grid-background" />
      <div className="absolute inset-0 hex-pattern opacity-30" />
      
      {/* スキャンライン */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-[scan-line_4s_linear_infinite]" />
      </div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：コピー */}
          <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* タグライン */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
              <ShieldIcon className="w-4 h-4 text-cyber-blue" />
              <span className="text-sm text-cyber-blue font-medium">
                Web3・業務システムのセキュリティ研究開発部門
              </span>
            </div>

            {/* キャッチコピー */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">あなたのプロダクト、</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning-orange to-warning-red">
                「善意」と「運」
              </span>
              <span className="text-white">に</span>
              <br />
              <span className="text-white">任せていませんか？</span>
            </h1>

            {/* サブコピー */}
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-cyber-blue font-semibold">元警視庁警察官 × Web3専門家</span>が、
                <br className="hidden sm:block" />
                攻撃者の思考と現場感覚でシステムを点検。
              </p>
              <p>
                見落とされがちな
                <span className="text-warning-orange">"人・運用・設計の穴"</span>まで含めて、
                <br className="hidden sm:block" />
                貴社のサービスを守るセキュリティパートナーです。
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-3 text-lg">
                <ChatIcon className="w-5 h-5" />
                まずは30分、オンラインで無料相談する
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <p className="text-sm text-gray-400">
                脆弱性診断の前に、「何から手をつけるべきか」だけでも整理します。
              </p>
            </div>
          </div>

          {/* 右側：ビジュアル */}
          <div
            className={`relative ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* シールドアイコン */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-4 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full border border-cyber-blue/30 glow-box">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldIcon className="w-32 h-32 text-cyber-blue animate-shield-pulse" />
                  </div>
                  {/* 回転するリング */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-blue/20 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border border-cyber-blue/10 animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                {/* 浮遊するアイコン */}
                <div className="absolute -top-4 -right-4 p-3 bg-navy-800/90 rounded-xl border border-cyber-blue/30 animate-float">
                  <LockIcon className="w-6 h-6 text-cyber-blue" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 p-3 bg-navy-800/90 rounded-xl border border-warning-orange/30 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <AlertIcon className="w-6 h-6 text-warning-orange" />
                </div>
                <div
                  className="absolute top-1/2 -right-8 p-3 bg-navy-800/90 rounded-xl border border-cyber-green/30 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <CodeIcon className="w-6 h-6 text-cyber-green" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500">Scroll</span>
          <ChevronDownIcon className="w-5 h-5 text-cyber-blue" />
        </div>
      </div>
    </section>
  );
}

// ============================================
// 共感セクション
// ============================================

function PainPointsSection() {
  const painPoints = [
    "エンジニアから「そろそろセキュリティ対策が必要」と言われているが、何から手をつければいいか分からない",
    "Web3 やブロックチェーンを扱っており、万が一の被害時に炎上・信用失墜が怖い",
    "SaaS や業務システムを外注しており、ベンダー任せで本当に大丈夫か不安",
    "脆弱性診断業者を調べたが、「フル診断」しかなくて高額＆オーバースペックに感じている",
    "社内に CISO やセキュリティ専門人材がおらず、意思決定の相談相手がいない",
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="container-custom relative z-10">
        {/* 見出し */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning-orange/10 border border-warning-orange/30">
            <AlertIcon className="w-4 h-4 text-warning-orange" />
            <span className="text-sm text-warning-orange font-medium">こんな不安はありませんか？</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            セキュリティ、
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning-orange to-warning-red">
              「ちゃんとやらないといけない」
            </span>
            のは分かっているのに
            <br />
            <span className="text-gray-400">後回しになっていませんか？</span>
          </h2>
        </div>

        {/* 課題リスト */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="cyber-card p-6 flex items-start gap-4 warning-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-warning-orange/20 flex items-center justify-center">
                <AlertIcon className="w-4 h-4 text-warning-orange" />
              </div>
              <p className="text-gray-300 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        {/* 締めの文章 */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="cyber-card p-8 glow-box">
            <p className="text-lg text-gray-300 leading-relaxed">
              それでも、本格的なペンテストに数十〜数百万円を投じる前に、
              <br />
              <span className="text-cyber-blue font-semibold">
                「まず状況を整理して、優先順位をつけてほしい」
              </span>
              <br />
              というのが多くの企業の本音です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// サービス概要セクション
// ============================================

function ServicesSection() {
  const services = [
    {
      level: "Level 1",
      title: "リスクアセスメント & セキュリティ設計相談",
      description:
        "経営・事業の視点から、「どこまでのセキュリティを、いつまでに、いくらでやるべきか」を一緒に決める層。",
      features: [
        "現状ヒアリング（プロダクト・運用・体制）",
        "想定リスクの洗い出し（技術 + 人 + 業務フロー）",
        "優先順位付け（今やるべきこと / 後回しにしてよいもの）",
        "必要な対策レベルと概算コストの整理",
      ],
      icon: <ChartIcon className="w-8 h-8" />,
      color: "cyber-blue",
      available: true,
    },
    {
      level: "Level 2",
      title: "簡易脆弱性診断（ライトウェイト）",
      description:
        "フルスケールのペンテスト前に、「まずは全体像をざっくり把握したい」向けのライト診断。",
      features: [
        "自動ツール＋限定的な手動チェック",
        "OWASP Top10 を中心とした代表的な脆弱性の有無確認",
        "結果レポート＋優先度付き改善提案",
        "Web3 / API / 管理画面の観点を含む「実務寄り」のコメント",
      ],
      icon: <SearchIcon className="w-8 h-8" />,
      color: "cyber-green",
      available: true,
    },
    {
      level: "Level 3",
      title: "本格ペネトレーションテスト",
      description:
        "専門資格を有するホワイトハッカーと連携し、実際の攻撃を模した高度なテストを行うフルスコープサービス。",
      features: [
        "実際の攻撃者と同様の手法でのテスト",
        "インフラ・アプリケーション全体の網羅的検査",
        "詳細な技術レポートと経営向けサマリー",
        "改善後の再テストまでフルサポート",
      ],
      icon: <LockIcon className="w-8 h-8" />,
      color: "cyber-purple",
      available: false,
      comingSoon: "現在、資格取得と専門チーム構築を進めており、準備が整い次第ご案内します。",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="container-custom relative z-10">
        {/* 見出し */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyber-blue text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white heading-cyber inline-block">
            Netsujo セキュリティサービスの全体像
          </h2>
        </div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cyber-card p-8 relative ${!service.available ? "opacity-80" : ""}`}
            >
              {/* レベルバッジ */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-3 py-1 rounded text-xs font-bold tracking-wider ${
                    service.color === "cyber-blue"
                      ? "bg-cyber-blue/20 text-cyber-blue"
                      : service.color === "cyber-green"
                      ? "bg-cyber-green/20 text-cyber-green"
                      : "bg-cyber-purple/20 text-cyber-purple"
                  }`}
                >
                  {service.level}
                </span>
                {!service.available && <span className="coming-soon-badge">Coming Soon</span>}
              </div>

              {/* アイコン */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === "cyber-blue"
                    ? "bg-cyber-blue/10 text-cyber-blue"
                    : service.color === "cyber-green"
                    ? "bg-cyber-green/10 text-cyber-green"
                    : "bg-cyber-purple/10 text-cyber-purple"
                }`}
              >
                {service.icon}
              </div>

              {/* タイトル */}
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>

              {/* 説明 */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>

              {/* 機能リスト */}
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckIcon
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        service.color === "cyber-blue"
                          ? "text-cyber-blue"
                          : service.color === "cyber-green"
                          ? "text-cyber-green"
                          : "text-cyber-purple"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Coming Soon メッセージ */}
              {service.comingSoon && (
                <p className="mt-6 text-xs text-cyber-purple/80 italic">{service.comingSoon}</p>
              )}
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/80 to-navy-950" />

      {/* 装飾 */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-cyber-blue/5 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左側：テキスト */}
          <div className="space-y-8">
            <div>
              <span className="text-cyber-blue text-sm font-semibold tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">
                なぜ、Web3開発会社が
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">
                  「ホワイトハッカー事業」
                </span>
                を
                <br />
                立ち上げるのか。
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                代表の飯田は、かつて{" "}
                <span className="text-cyber-blue font-semibold">警視庁警察官として2年半勤務</span>
                し、現場で「人の善意に依存する安全」の危うさを見てきました。
              </p>

              <p>
                その後、Web業界・システム開発の世界に入り、現在は{" "}
                <span className="text-cyber-blue font-semibold">
                  京都発の Web3 専門開発パートナー
                </span>
                として、ブロックチェーン・NFT・DID を活用したシステム開発支援を行っています。
              </p>

              <p>
                Web3・ブロックチェーンの世界では、
                <span className="text-warning-orange font-semibold">
                  一度のミスが即資産流出・社会的信用の喪失に直結
                </span>
                します。それにもかかわらず、多くのプロジェクトが「スピード」と「リリース最優先」で走り、セキュリティは後回しにされがちです。
              </p>

              <p>
                Netsujo は、
                <span className="text-cyber-blue font-semibold">
                  「元警察官の視点」×「Web3開発の実務」×「オフショア開発体制」
                </span>
                という組み合わせで、単なるテストだけでなく、
                <span className="text-white font-semibold">
                  事業のフェーズに合った"現実的なセキュリティ戦略"
                </span>
                を伴走するパートナーとして、この領域に踏み込むことにしました。
              </p>
            </div>
          </div>

          {/* 右側：差別化ポイント */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-8">
              他の診断業者・開発会社との違い
            </h3>

            {[
              {
                icon: <ShieldIcon className="w-6 h-6" />,
                title: "元警視庁警察官の視点",
                description:
                  "法令・倫理・社会的信用の観点から「どこまで許容できるか」を現実的に判断。",
              },
              {
                icon: <GlobeIcon className="w-6 h-6" />,
                title: "Web3 / ブロックチェーン実務に根ざしたセキュリティ",
                description:
                  "単なるWebだけでなく、NFT・トークン・DIDなど、オンチェーンとオフチェーンが交差する領域の設計観点を持つ。",
              },
              {
                icon: <CodeIcon className="w-6 h-6" />,
                title: "開発も分かるセキュリティ",
                description:
                  "弊社はブロックチェーンを中心とした多数の開発実績があります。「診断して終わり」ではなく、実装しやすい改善案まで落とし込む。",
              },
              {
                icon: <ChartIcon className="w-6 h-6" />,
                title: 'フェーズに合わせた"やりすぎない"提案',
                description:
                  "スタートアップ・中小企業にとって、「今いくら投資すべきか」と「どこまでやれば十分か」を一緒に決めることにこだわる。",
              },
            ].map((item, index) => (
              <div key={index} className="cyber-card p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyber-blue/10 flex items-center justify-center text-cyber-blue">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
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
// 料金プランセクション
// ============================================

function PricingSection() {
  const plans = [
    {
      name: "セキュリティ・リスクアセスメントプラン",
      price: "15〜25万円",
      priceNote: "税別",
      description: "経営視点でのセキュリティ優先順位整理",
      features: [
        "2〜3時間のオンラインヒアリング",
        "資料・画面ベースの現状把握",
        "想定リスク一覧と優先度マッピング",
        "「直近3ヶ月でやるべきこと」リスト",
      ],
      recommended: false,
      icon: <ChartIcon className="w-6 h-6" />,
    },
    {
      name: "Web / API / Web3 向け 簡易脆弱性診断",
      price: "30〜60万円",
      priceNote: "税別",
      description: "主要な脆弱性を網羅的にチェック",
      features: [
        "ツール＋限定的な手動チェック",
        "OWASP Top10 をベースにした主要項目の検査",
        "10〜20ページ程度の診断レポート",
        "簡易な再診断1回含む（軽微な修正後）",
      ],
      recommended: true,
      icon: <SearchIcon className="w-6 h-6" />,
      targets: ["小〜中規模 Webサービス", "管理画面", "Web3 関連のフロント〜API 接続部"],
    },
    {
      name: "継続的セキュリティ顧問（軽量版）",
      price: "月10〜20万円〜",
      priceNote: "税別",
      description: "継続的なセキュリティ相談窓口",
      features: [
        "月1回のオンラインミーティング（1〜2時間）",
        "設計レビュー・仕様書レビュー",
        "セキュリティポリシー・ルール整備の壁打ち",
        "ベンダーコントロールの相談",
      ],
      recommended: false,
      icon: <UserIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="container-custom relative z-10">
        {/* 見出し */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyber-blue text-sm font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">提供メニュー & 料金イメージ</h2>
          <p className="text-gray-400">
            ※料金は目安です。規模・範囲に応じて個別お見積もりいたします。
          </p>
        </div>

        {/* プランカード */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cyber-card p-8 relative ${
                plan.recommended ? "border-cyber-blue glow-box" : ""
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyber-blue text-navy-950 text-xs font-bold rounded-full">
                  おすすめ
                </div>
              )}

              {/* アイコン */}
              <div className="w-14 h-14 rounded-xl bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mb-6">
                {plan.icon}
              </div>

              {/* プラン名 */}
              <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* 価格 */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-cyber-blue">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">（{plan.priceNote}）</span>
              </div>

              {/* 機能 */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckIcon className="w-4 h-4 text-cyber-blue flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 対象 */}
              {plan.targets && (
                <div className="pt-4 border-t border-navy-700">
                  <p className="text-xs text-gray-500 mb-2">対象：</p>
                  <ul className="space-y-1">
                    {plan.targets.map((target, tIndex) => (
                      <li key={tIndex} className="text-xs text-gray-400">
                        • {target}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 将来のサービス */}
        <div className="cyber-card p-8 max-w-2xl mx-auto text-center">
          <span className="coming-soon-badge mb-4 inline-block">将来提供予定</span>
          <h3 className="text-xl font-bold text-white mb-4">本格ペネトレーションテスト</h3>
          <p className="text-gray-400 text-sm mb-4">
            現在、ホワイトハッカー資格取得および専門チーム構築中です。
            <br />
            ご関心がある企業とは、先行的に要件定義・スコープ設計のみ先にご相談可能です。
          </p>
          <p className="text-cyber-purple font-semibold">
            料金イメージ：スコープに応じて 80〜200万円〜
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 対応領域セクション
// ============================================

function ScopeSection() {
  const scopes = [
    {
      category: "Webアプリケーション",
      items: ["BtoC サービス", "BtoB サービス"],
      icon: <GlobeIcon className="w-6 h-6" />,
    },
    {
      category: "管理画面・業務システム",
      items: ["受発注システム", "会員管理システム"],
      icon: <DocumentIcon className="w-6 h-6" />,
    },
    {
      category: "Web3 / ブロックチェーン連携部分",
      items: ["ウォレット接続", "NFT / トークン発行システム", "DID / 認証まわり"],
      icon: <LockIcon className="w-6 h-6" />,
    },
    {
      category: "API連携",
      items: ["外部サービスとの接続部"],
      icon: <CodeIcon className="w-6 h-6" />,
    },
    {
      category: "社内フロー",
      items: ["スタートアップ〜中堅企業の社内業務フロー", "権限設計"],
      icon: <UserIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="container-custom relative z-10">
        {/* 見出し */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyber-blue text-sm font-semibold tracking-widest uppercase">
            Scope
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">対応できるシステム・業務領域</h2>
        </div>

        {/* スコープグリッド */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {scopes.map((scope, index) => (
            <div key={index} className="cyber-card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mx-auto mb-4">
                {scope.icon}
              </div>
              <h3 className="text-white font-semibold mb-4 text-sm">{scope.category}</h3>
              <ul className="space-y-2">
                {scope.items.map((item, iIndex) => (
                  <li key={iIndex} className="text-gray-400 text-xs">
                    {item}
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
// 利用の流れセクション
// ============================================

function FlowSection() {
  const steps = [
    {
      step: 1,
      title: "お問い合わせ",
      description: "LP フォームまたはメールからご連絡",
    },
    {
      step: 2,
      title: "事前ヒアリング（無料 30分）",
      description: "現状とお困りごと、対象システムの概要を確認",
    },
    {
      step: 3,
      title: "プラン・お見積もり提示",
      description: "リスクアセスメント／簡易診断／顧問などから最適プランを提案",
    },
    {
      step: 4,
      title: "診断・レビューの実施",
      description: "合意したスコープ・期間で実施",
    },
    {
      step: 5,
      title: "レポート・フィードバックセッション",
      description: "結果説明と「次にやるべきこと」の優先順位付け",
    },
    {
      step: 6,
      title: "継続サポート（任意）",
      description: "顧問契約や定期診断など",
    },
  ];

  return (
    <section id="flow" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="container-custom relative z-10">
        {/* 見出し */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyber-blue text-sm font-semibold tracking-widest uppercase">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ご相談からレポート提出までの流れ
          </h2>
        </div>

        {/* ステップ */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* 接続線 */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-blue/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="step-number flex-shrink-0 relative z-10">{step.step}</div>
                  <div className="cyber-card p-6 flex-1">
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQセクション
// ============================================

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "まだ大きな売上規模ではないスタートアップですが、相談可能ですか？",
      answer:
        "むしろ、「伸び始める前」に最低限のセキュリティを整理する方がコスパは高いです。フェーズに合わせて軽いプランから提案します。",
    },
    {
      question: "Web3 ではない普通の Web サービスでも依頼できますか？",
      answer:
        "もちろん可能です。Web3 に特化した知見を持ちながら、通常の Web / API システムの診断・アドバイスも対応します。",
    },
    {
      question:
        "すでに別の開発会社にシステムを委託していますが、その場合でも問題ありませんか？",
      answer:
        "問題ありません。開発ベンダーとは独立した「第三者視点」としてレビュー・診断を行い、必要に応じてベンダー様への伝え方も含めてサポートします。",
    },
    {
      question: "本格的なペネトレーションテストはいつから依頼できますか？",
      answer:
        "現在、専門資格の取得と体制構築を進めており、2025年中のサービスインを目指しています。それまでの間は、リスクアセスメントと簡易診断＋要件整理で事前準備を進めることを推奨しています。",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="container-custom relative z-10">
        {/* 見出し */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyber-blue text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">よくあるご質問</h2>
        </div>

        {/* FAQ リスト */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="cyber-card overflow-hidden">
              <button
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-cyber-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 問い合わせフォームセクション
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
    // フォーム送信処理
    console.log(formData);
    alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-12 space-y-4">
            <span className="text-cyber-blue text-sm font-semibold tracking-widest uppercase">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">無料相談のお申し込み</h2>
            <p className="text-gray-400">
              まずは30分のオンラインミーティングで、現状の課題を整理しましょう。
            </p>
          </div>

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="cyber-card p-8 space-y-6 glow-box">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  お名前 <span className="text-warning-orange">*</span>
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
                <label className="block text-sm text-gray-300 mb-2">
                  会社名 <span className="text-warning-orange">*</span>
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  メールアドレス <span className="text-warning-orange">*</span>
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
                <label className="block text-sm text-gray-300 mb-2">電話番号</label>
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
              <label className="block text-sm text-gray-300 mb-2">
                ご興味のあるサービス <span className="text-warning-orange">*</span>
              </label>
              <select
                required
                className="form-input"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">選択してください</option>
                <option value="assessment">セキュリティ・リスクアセスメント</option>
                <option value="diagnosis">簡易脆弱性診断</option>
                <option value="advisor">継続的セキュリティ顧問</option>
                <option value="pentest">本格ペネトレーションテスト（将来）</option>
                <option value="other">その他・相談したい</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                ご相談内容 <span className="text-warning-orange">*</span>
              </label>
              <textarea
                required
                rows={5}
                className="form-input resize-none"
                placeholder="現在の課題やご要望をお聞かせください"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
              <ChatIcon className="w-5 h-5" />
              無料相談を申し込む
              <ArrowRightIcon className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-500 text-center">
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
    <footer className="py-12 border-t border-navy-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* ロゴ */}
          <div className="flex items-center gap-3">
            <ShieldIcon className="w-8 h-8 text-cyber-blue" />
            <div>
              <span className="font-[var(--font-orbitron)] text-lg font-bold text-white tracking-wider">
                NETSUJO
              </span>
              <span className="block text-xs text-cyber-blue tracking-widest">CYBER LAB</span>
            </div>
          </div>

          {/* リンク */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-400 hover:text-cyber-blue transition-colors">
              サービス
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-cyber-blue transition-colors">
              料金
            </a>
            <a href="#faq" className="text-gray-400 hover:text-cyber-blue transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyber-blue transition-colors">
              お問い合わせ
            </a>
          </nav>

          {/* コピーライト */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Netsujo Cyber Lab. All rights reserved.
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
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
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

