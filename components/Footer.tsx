export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-white/70 text-sm">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 ring-1 ring-white/10" />
          <span>© {new Date().getFullYear()} Horus Australia</span>
        </div>
        <div>ISO 9001 aligned · WA & national delivery</div>
      </div>
    </footer>
  );
}
