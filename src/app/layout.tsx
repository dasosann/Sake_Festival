import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sake-festival.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2026 서울 사케 페스티벌 가이드",
    template: "%s | 2026 서울 사케 페스티벌 가이드",
  },
  description:
    "SETEC 2026 사케 페스티벌 방문자를 위한 부스 지도, 양조장 정보, 출품 주류, 일정 안내를 한곳에서 확인할 수 있는 공식 가이드입니다.",
  keywords: [
    "사케 페스티벌",
    "니혼슈",
    "SETEC",
    "사케",
    "양조장",
    "부스 지도",
    "행사 일정",
    "Sake Festival Seoul",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "2026 서울 사케 페스티벌 가이드",
    title: "2026 서울 사케 페스티벌 가이드",
    description:
      "SETEC 2026 서울 사케 페스티벌 방문자를 위한 부스 지도, 양조장 정보, 출품 주류, 일정 안내를 한곳에서 확인하세요.",
  },
  twitter: {
    card: "summary",
    title: "2026 서울 사케 페스티벌 가이드",
    description:
      "부스 지도, 양조장 정보, 출품 주류, 일정 안내를 한곳에서 확인하는 사케 페스티벌 가이드",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
