"use client";

import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";
import "@/components/DarkVeil.css";

const vertex = `
attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`;

// ✅ Paste your full fragment shader EXACTLY as you sent it
const fragment = `...your full fragment shader here...`;

type Props = {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number; // e.g., 0.75 for performance
  className?: string;       // allow external layout styling
};

export default function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
  className = "darkveil-root", // default to full-screen root
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const parent = canvas.parentElement as HTMLElement;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas,
    });
    const gl = renderer.gl;
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uHueShift: { value: hueShift },
        uNoise: { value: noiseIntensity },
        uScan: { value: scanlineIntensity },
        uScanFreq: { value: scanlineFrequency },
        uWarp: { value: warpAmount },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w * (resolutionScale || 1), h * (resolutionScale || 1));
      program.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", resize);
    resize();

    let raf = 0;
    let start = performance.now();
    let running = true;

    const tick = () => {
      if (!running) return;
      program.uniforms.uTime.value = ((performance.now() - start) / 1000) * (speed || 0.5);
      program.uniforms.uHueShift.value = hueShift;
      program.uniforms.uNoise.value = noiseIntensity;
      program.uniforms.uScan.value = scanlineIntensity;
      program.uniforms.uScanFreq.value = scanlineFrequency;
      program.uniforms.uWarp.value = warpAmount;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(tick);
    };

    // Pause if tab hidden
    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) {
        start = performance.now(); // reset clock so it doesn't jump
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMQ = () => {
      const reduce = mq.matches;
      running = !reduce && document.visibilityState === "visible";
      if (running) {
        start = performance.now();
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
      }
    };
    mq.addEventListener?.("change", onMQ);

    // start
    onMQ();
    if (!mq.matches) onVis();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      mq.removeEventListener?.("change", onMQ);
      try {
        (mesh as any).delete?.();
        (program as any).delete?.();
        (geometry as any).delete?.();
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      } catch {}
    };
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale]);

  return <canvas ref={ref} className={`darkveil-canvas ${className}`} />;
}
