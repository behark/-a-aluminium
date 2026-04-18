import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Aluminium · Dyer, Dritare & Vitrina | Partner i autorizuar REHAU",
  description:
    "A Aluminium — prodhim dhe montim i dyerve, dritareve, vitrinave, gilinderave dhe xhamave. Partner i autorizuar REHAU. Cilësi gjermane, zgjidhje moderne për shtëpi dhe biznes në Kosovë.",
  keywords:
    "dyer alumini, dritare alumini, vitrina, gilindera, xhama, REHAU Kosovo, A Aluminium, dyer dhe dritare Mitrovicë, profile alumini Kosovë",
  openGraph: {
    title: "A Aluminium · Partner i autorizuar REHAU",
    description:
      "Dyer, dritare, vitrina, gilindera dhe xhama me cilësi gjermane REHAU. Mitrovicë, Kosovë.",
    locale: "sq_AL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
