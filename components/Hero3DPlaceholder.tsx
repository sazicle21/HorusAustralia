export default function Hero3DPlaceholder() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#12151C] to-[#0F1115] p-2 shadow-glass">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-inset ring-white/10">
        <svg viewBox="0 0 400 300" className="h-full w-full">
          <defs>
            <linearGradient id="fork" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="#0F1115" />
          <g opacity="0.08">
            <circle cx="90" cy="240" r="34" fill="url(#fork)" />
            <circle cx="240" cy="240" r="42" fill="url(#fork)" />
          </g>
          <g stroke="url(#fork)" strokeWidth="8" fill="none" opacity="0.85">
            <path d="M60 235h300" />
            <path d="M90 235v-60h110l40 30h60" />
            <path d="M300 240v-120" />
            <path d="M300 120h40" />
          </g>
        </svg>
      </div>
      <p className="mt-2 text-center text-xs text-white/50">Replace with Three.js or Spline scene.</p>
    </div>
  );
}
