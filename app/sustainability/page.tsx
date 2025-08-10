import Beam from "@/components/Beam";

export default function Sustainability() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <h1 className="text-3xl font-semibold text-white mb-4">Sustainability</h1>
      <p className="text-white/70 max-w-3xl">
        We’re committed to reducing waste and emissions across the supply chain—from certified suppliers and consolidated freight to recyclable packaging and batch-level traceability.
      </p>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {[
          { title: "Certified Suppliers", desc: "We source from audited partners with clear QA and environmental standards." },
          { title: "Smarter Freight", desc: "Consolidated shipments and route optimization to cut emissions and cost." },
          { title: "Recyclable Packaging", desc: "Preference for materials that can be reused or recycled." },
        ].map((item) => (
          <Beam key={item.title} radius={18}>
            <div className="rounded-2xl border border-white/10 bg-[#141821] p-5 shadow-glass">
              <div className="text-white font-semibold">{item.title}</div>
              <div className="text-white/70 text-sm mt-2">{item.desc}</div>
            </div>
          </Beam>
        ))}
      </div>
    </section>
  );
}
