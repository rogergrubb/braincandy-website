import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "BrainCandy - Free Online Tools & Calculators", template: "%s | BrainCandy" },
  description: "Free online utility tools: percentage calculator, word counter, password generator, QR code maker, unit converter, color picker, and more. Fast, simple, no signup required.",
  keywords: ["online calculator", "free tools", "percentage calculator", "word counter", "password generator", "QR code generator", "unit converter", "color picker"],
  openGraph: { title: "BrainCandy - Free Online Tools", description: "Free online utility tools for everyday use", url: "https://braincandy.website", siteName: "BrainCandy", type: "website" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://braincandy.website" },
};

const tools = [
  { name: "Percentage Calculator", href: "/percentage-calculator" },
  { name: "Word Counter", href: "/word-counter" },
  { name: "Password Generator", href: "/password-generator" },
  { name: "QR Code Generator", href: "/qr-code-generator" },
  { name: "Color Picker", href: "/color-picker" },
  { name: "Unit Converter", href: "/unit-converter" },
  { name: "Tip Calculator", href: "/tip-calculator" },
  { name: "BMI Calculator", href: "/bmi-calculator" },
  { name: "Random Number Generator", href: "/random-number-generator" },
  { name: "Countdown Timer", href: "/countdown-timer" },
  { name: "Character Counter", href: "/character-counter" },
  { name: "Loan Calculator", href: "/loan-calculator" },
  { name: "Age Calculator", href: "/age-calculator" },
  { name: "JSON Formatter", href: "/json-formatter" },
  { name: "Case Converter", href: "/case-converter" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      </head>
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🍬</span>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">BrainCandy</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Home</Link>
                <Link href="/percentage-calculator" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Calculators</Link>
                <Link href="/word-counter" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Text Tools</Link>
                <Link href="/password-generator" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Generators</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Calculators</h3>
                <ul className="space-y-2 text-sm">{tools.filter((_, i) => i < 4).map(t => <li key={t.href}><Link href={t.href} className="hover:text-white">{t.name}</Link></li>)}</ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Generators</h3>
                <ul className="space-y-2 text-sm">{tools.filter((_, i) => i >= 4 && i < 8).map(t => <li key={t.href}><Link href={t.href} className="hover:text-white">{t.name}</Link></li>)}</ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Converters</h3>
                <ul className="space-y-2 text-sm">{tools.filter((_, i) => i >= 8 && i < 12).map(t => <li key={t.href}><Link href={t.href} className="hover:text-white">{t.name}</Link></li>)}</ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">More Tools</h3>
                <ul className="space-y-2 text-sm">{tools.filter((_, i) => i >= 12).map(t => <li key={t.href}><Link href={t.href} className="hover:text-white">{t.name}</Link></li>)}</ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} BrainCandy. All rights reserved. Free online tools for everyone.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
