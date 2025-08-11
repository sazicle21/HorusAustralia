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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background */}
        <div className="background-container">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.03}
            scanlineIntensity={0.05}
            speed={0.5}
            scanlineFrequency={200.0}
            warpAmount={0.1}
            resolutionScale={1}
          />
        </div>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
