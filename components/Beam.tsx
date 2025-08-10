"use client";

import { useEffect, useRef } from "react";

type BeamProps = { radius?: number; className?: string; children: React.ReactNode };

export default function Beam({ radius = 20, className = "", children }: BeamProps) {
  const rectRef = useRef<SVGRectElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rect = rectRef.current;
    const wrap = wrapRef.current;
    if (!rect || !wrap) return;

    const update = () => {
      try {
        const len = rect.getTotalLength();
        rect.style.strokeDasharray = String(len);
        rect.style.strokeDashoffset = String(len);
      } catch {}
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={`beam-wrap ${className}`} style={{ ["--r" as any]: `${radius}px` }}>
      <div className="beam-clip">
        <svg className="beam-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <rect ref={rectRef} x="1" y="1" width="98" height="98" rx={radius} ry={radius} className="beam-rect" />
        </svg>
      </div>
      <div className="beam-surface">{children}</div>
    </div>
  );
}
