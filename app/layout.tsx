import type { Metadata } from "next";
import { Noto_Sans_JP, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://cyberlab.netsujo.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Netsujo Cyber Lab | Web3・業務システムのセキュリティ診断・コンサルティング",
    template: "%s | Netsujo Cyber Lab",
  },
  description:
    "元警視庁警察官 × Web3セキュリティ専門家による脆弱性診断・リスクアセスメント・セキュリティコンサルティング。攻撃者の視点でプロダクトの安全性を総合的に監査します。スタートアップから中堅企業まで、フェーズに合わせた最適なセキュリティ対策をご提案。",
  keywords: [
    "セキュリティ診断",
    "脆弱性診断",
    "Web3セキュリティ",
    "ブロックチェーンセキュリティ",
    "ペネトレーションテスト",
    "リスクアセスメント",
    "セキュリティコンサルティング",
    "サイバーセキュリティ",
    "OWASP",
    "NFTセキュリティ",
    "スマートコントラクト監査",
    "京都",
    "セキュリティ顧問",
  ],
  authors: [{ name: "Netsujo Cyber Lab", url: siteUrl }],
  creator: "Netsujo Cyber Lab",
  publisher: "Netsujo Cyber Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "Netsujo Cyber Lab",
    title: "Netsujo Cyber Lab | Web3・業務システムのセキュリティ診断",
    description:
      "元警視庁警察官 × Web3セキュリティ専門家による脆弱性診断・リスクアセスメント。攻撃者の視点でプロダクトの安全性を総合的に監査します。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Netsujo Cyber Lab - セキュリティ診断・コンサルティング",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netsujo Cyber Lab | セキュリティ診断・コンサルティング",
    description:
      "元警視庁警察官 × Web3セキュリティ専門家による脆弱性診断・リスクアセスメント",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

// JSON-LD 構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Netsujo Cyber Lab",
  description:
    "Web3・業務システムのセキュリティ診断・コンサルティングサービス",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  serviceType: ["セキュリティ診断", "脆弱性診断", "リスクアセスメント", "セキュリティコンサルティング"],
  areaServed: {
    "@type": "Country",
    name: "Japan",
  },
  priceRange: "¥¥¥",
  knowsAbout: [
    "Web3 Security",
    "Blockchain Security",
    "Penetration Testing",
    "Vulnerability Assessment",
    "OWASP Top 10",
    "Smart Contract Audit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
