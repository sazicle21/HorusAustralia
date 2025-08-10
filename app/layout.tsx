// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Horus Australia",
  description: "Distribution without drag.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-text antialiased">
        {/* Global gradient defs for beam borders */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="copper-stroke-global" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>

        {/* No header/nav anymore */}
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
