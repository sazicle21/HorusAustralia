import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 ring-1 ring-white/10" />
          <div className="text-white">
            <div className="text-sm font-semibold leading-tight">Horus Australia</div>
            <div className="text-[11px] text-white/60">HorusAustralia.com.au</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
