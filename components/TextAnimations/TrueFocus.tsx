'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
};

export default function TrueFocus({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "red",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: Props) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const id = setInterval(() => {
        setCurrentIndex((p) => (p + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(id);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    const el = wordRefs.current[currentIndex];
    const parent = containerRef.current;
    if (!el || !parent) return;

    const parentRect = parent.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    setFocusRect({
      x: rect.left - parentRect.left,
      y: rect.top - parentRect.top,
      width: rect.width,
      height: rect.height,
    });
  }, [currentIndex, words.length]);

  const onEnter = (i: number) => {
    if (!manualMode) return;
    setLastActiveIndex(i);
    setCurrentIndex(i);
  };
  const onLeave = () => {
    if (!manualMode) return;
    setCurrentIndex(lastActiveIndex ?? 0);
  };

  return (
    <div
      className="focus-container"
      ref={containerRef}
      style={{ ["--border-color" as any]: borderColor }}
    >
      {words.map((word, i) => {
        const isActive = i === currentIndex;
        return (
          <span
            key={i}
            ref={(el: HTMLSpanElement | null) => {
              if (el) wordRefs.current[i] = el;
            }}
            className={`focus-word ${isActive && !manualMode ? "active" : ""} ${manualMode ? "manual" : ""}`}
            style={{ filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)` }}
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={onLeave}
          >
            {word}
          </span>
        );
      })}

      {/* Animate only position; set size via style to avoid painty trails */}
      <motion.div
        className="focus-frame"
        initial={false}
        animate={{ x: focusRect.x, y: focusRect.y, opacity: words.length ? 1 : 0 }}
        transition={{ duration: animationDuration, ease: "easeOut" }}
        style={{
          width: focusRect.width,
          height: focusRect.height,
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        <span className="corner top-left" />
        <span className="corner top-right" />
        <span className="corner bottom-left" />
        <span className="corner bottom-right" />
      </motion.div>
    </div>
  );
}
