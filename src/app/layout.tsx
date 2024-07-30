import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/fonts.css';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import MusicPlayer from '@/components/musicplayer/MusicPlayer';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASTROBOY XL",
  description: "Astroboy XL, evento de música, 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="mY3UML78nPsdcK5gEzKogHZvbTkw7ZpowmoQOekhcFs" />
      </head>

      <body className={inter.className}>
        <header><Navbar/></header>
        <main>{children}
        </main>

        <footer><Footer/></footer>
      </body>
    </html>
  );
}
