import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Landing Page Generator",
  description: "Generate beautiful landing pages with AI.",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Generate", href: "/generate" },
  { name: "Templates", href: "/templates" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Preview", href: "/preview" },
  { name: "Settings", href: "/settings" },
  { name: "Health", href: "/health" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-white">
        <header className="border-b border-gray-800 bg-gray-950">
          <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight"
            >
              AI Landing Page Generator
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}