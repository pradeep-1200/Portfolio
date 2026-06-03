import "./tailwind.css";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import ScrollProgress from "../components/ScrollProgress";
import CommandPalette from "../components/CommandPalette";
import ThemeToggle from "../components/ThemeToggle";
import Particles from "../components/Particles";
import useLenis from "../components/useLenis";
import LenisClient from "../components/LenisClient";

export const metadata = {
  title: "Pradeep's Portfolio",
  description: "Full Stack Developer | Flutter Developer | Problem Solver",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        <CommandPalette />
        <LenisClient />
        <div className="min-h-screen">
          <Particles />
          <div className="fixed top-4 right-6 z-50">
            <ThemeToggle />
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Particles />
      </body>
    </html>
  );
}
