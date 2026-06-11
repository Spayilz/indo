import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const titres = Fraunces({
  subsets: ["latin"],
  variable: "--font-titres",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const corps = Figtree({
  subsets: ["latin"],
  variable: "--font-corps",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Indonésie 2026 — Notre carnet de voyage",
  description:
    "Le plan des vacances, jour par jour. Du 26 septembre au 18 octobre 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${titres.variable} ${corps.variable}`}>
      <body>{children}</body>
    </html>
  );
}
