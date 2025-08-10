import Beam from "@/components/Beam";

const categories = [
  { title: "PPE", tags: ["Masks", "Gloves", "Hi-Vis"] },
  { title: "Healthcare", tags: ["Consumables", "Carts", "Instruments"] },
  { title: "Lighting", tags: ["Industrial", "Emergency", "LED"] },
  { title: "Electrical", tags: ["Switchgear", "Cabling", "Enclosures"] },
  { title: "Tools", tags: ["Hand", "Power", "Storage"] },
  { title: "Safety & Signage", tags: ["Bollards", "Tape", "Labels"] },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <h1 className="text-3xl font-semibold text-white mb-6">Categories</h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Beam key={c.title} radius={20} className="h-full">
            <div className="rounded-2xl border border-white/10 bg-[#141821] p-5 shadow-glass h-full flex flex-col justify-between">
              <div>
                <div className="mb-2 text-base font-semibold text-white">{c.title}</div>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-xs text-white/60">Explore →</div>
            </div>
          </Beam>
        ))}
      </div>
    </section>
  );
}
