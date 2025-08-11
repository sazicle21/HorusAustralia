import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import DarkVeil from "@/components/DarkVeil";

export const metadata = { /* ...your metadata... */ };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-text antialiased relative">
        {/* Copper gradient defs for the Beam borders */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="copper-stroke-global" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>

        {/* 🔥 Site-wide animated background */}
        <DarkVeil
          className="darkveil-root"
          hueShift={18}            // copper tint
          noiseIntensity={0.02}   // subtle grain
          scanlineIntensity={0.06}
          scanlineFrequency={0.025}
          warpAmount={0.18}
          speed={0.55}
          resolutionScale={0.9}   // dial down if GPU spikes
        />
        {/* Optional dimmer over the effect for readability */}
        <div className="darkveil-dim" />

        {/* Foreground content */}
        <main className="relative z-[1] min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
