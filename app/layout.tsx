import type { Metadata } from "next";
import { Noto_Sans_JP, Inter, Orbitron, JetBrains_Mono } from "next/font/google";
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

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Netsujo Cyber Lab | Web3・業務システムのセキュリティ研究開発",
  description:
    "元警視庁警察官 × Web3専門家による「攻撃者の目線」で守るセキュリティ設計。リスクアセスメント、脆弱性診断、セキュリティコンサルティングを提供します。",
  keywords: [
    "セキュリティ",
    "Web3",
    "ブロックチェーン",
    "脆弱性診断",
    "ペネトレーションテスト",
    "サイバーセキュリティ",
    "京都",
  ],
  authors: [{ name: "Netsujo Cyber Lab" }],
  openGraph: {
    title: "Netsujo Cyber Lab | Web3・業務システムのセキュリティ研究開発",
    description:
      "元警視庁警察官 × Web3専門家による「攻撃者の目線」で守るセキュリティ設計",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netsujo Cyber Lab",
    description:
      "元警視庁警察官 × Web3専門家による「攻撃者の目線」で守るセキュリティ設計",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

