// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DarkVeil from "@/components/DarkVeil";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horus Australia",
  description: "Distribution, without drag.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " relative"}>
        {/* Site-wide animated background */}
        <DarkVeil className="darkveil-root" speed={0.55} resolutionScale={0.9} />
        <div className="darkveil-dim" />

        {/* Foreground content sits above */}
        <main className="relative z-[1] min-h-screen">{children}</main>
      </body>
    </html>
  );
}

