"use client";

import Spline from "@splinetool/react-spline";

export default function SplineHero() {
  return (
    <div className="spline-shell">
      <div className="spline-canvas">
        <Spline scene="https://prod.spline.design/EGF5QsKcb-ks-PtJ/scene.splinecode" />
      </div>
      {/* Optional: add /public/assets/hero-poster.jpg for reduced-motion users */}
      <img className="spline-poster" src="/assets/hero-poster.jpg" alt="" />
    </div>
  );
}
