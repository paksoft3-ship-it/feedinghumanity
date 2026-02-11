import type { Metadata } from "next";
import { Inter, Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Feeding Humanity - Nourishing Communities, Building Trust",
  description:
    "Feeding Humanity is a global humanitarian organization dedicated to combating hunger and providing essential aid to communities in crisis. Join us in making a difference.",
  keywords: [
    "charity",
    "humanitarian",
    "food aid",
    "disaster relief",
    "zakat",
    "donation",
    "feeding humanity",
  ],
  authors: [{ name: "Feeding Humanity" }],
  openGraph: {
    title: "Feeding Humanity - Nourishing Communities, Building Trust",
    description:
      "Join us in combating hunger and providing essential aid to communities worldwide.",
    type: "website",
    locale: "en_GB",
    siteName: "Feeding Humanity",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feeding Humanity",
    description: "Nourishing Communities, Building Trust",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${merriweather.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
