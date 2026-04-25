import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Header from "@/components/header";
import ScrollChrome from "@/components/ui/ScrollChrome";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Devsinn Technologies",
  description: "Devsinn Technologies - Innovative Software Solutions and Digital Excellence",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollChrome />
        <Header />
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
