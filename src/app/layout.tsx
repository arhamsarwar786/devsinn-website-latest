import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/header";
import ScrollChrome from "@/components/ui/ScrollChrome";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dev'sinn Technologies — AI-Powered Software Engineering",
    template: "%s | Dev'sinn Technologies",
  },
  description:
    "We build scalable web apps, mobile apps, SaaS platforms, AI agents, and automation systems that help startups and growing businesses reduce manual work, improve operations, and launch faster.",
  keywords: [
    "AI automation", "SaaS MVP development", "Flutter app development", "web app development",
    "dedicated development team", "NestJS backend", "custom software development Pakistan",
    "app rescue", "AI chatbot development", "B2B software engineering",
  ],
  authors: [{ name: "Dev'sinn Technologies", url: "https://devsinntechnologies.com" }],
  creator: "Dev'sinn Technologies",
  metadataBase: new URL("https://devsinntechnologies.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devsinntechnologies.com",
    siteName: "Dev'sinn Technologies",
    title: "Dev'sinn Technologies — AI-Powered Software Engineering",
    description:
      "Build scalable web apps, mobile apps, SaaS MVPs, AI automation, and dedicated dev teams for startups and growing businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev'sinn Technologies — AI-Powered Software Engineering",
    description:
      "Build scalable web apps, mobile apps, SaaS MVPs, AI automation systems, and dedicated development teams.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="flex flex-col bg-offwhite text-nearblack selection:bg-teal selection:text-offwhite">
        <SmoothScroll />
        <CustomCursor />
        <CookieConsent />
        <ScrollChrome />
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
