// app/page.tsx
"use client";

import Beam from "@/components/Beam";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* HERO */}
      <section id="hero" className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Distribution, without drag.
            </h1>
            <p className="mt-5 max-w-xl text-white/70 text-base md:text-lg">
              Horus Australia sources, imports, and delivers critical goods—on time, with
              compliance, at scale.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Beam radius={16}>
                <a
                  href="#contact"
                  className="inline-block rounded-2xl bg-gradient-to-b from-[#12151C] to-[#0F1115] px-6 py-3 text-sm font-medium text-white hover:from-[#151922] hover:to-[#11151C]"
                >
                  Enquire Now
                </a>
              </Beam>
              <Beam radius={16}>
                <a
                  href="#categories"
                  className="inline-block rounded-2xl bg-gradient-to-b from-[#12151C] to-[#0F1115] px-6 py-3 text-sm font-medium text-white hover:from-[#151922] hover:to-[#11151C]"
                >
                  View Categories
                </a>
              </Beam>
            </div>

            <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
              <span>ISO 9001–aligned</span>
              <span>99.4% OTIF</span>
              <span>WA & nationwide</span>
            </div>
          </div>

          {/* Spline embed — swap src with your Spline “Web embed” URL when you export it */}
          <div className="spline-shell">
            <iframe
              className="spline-frame"
              title="Horus 3D"
              loading="lazy"
              allow="xr-spatial-tracking; fullscreen; vr"
              src="https://my.spline.design/particles-wy8iTCYkVBxXXi8rIu0jqaAb"
            />
            {/* Reduced motion fallback (optional) — replace with a poster image in /public/assets */}
            <img className="spline-poster" src="/assets/hero-poster.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Categories we supply</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "PPE", tags: ["Masks", "Gloves", "Hi-Vis"] },
            { title: "Healthcare", tags: ["Consumables", "Carts", "Instruments"] },
            { title: "Lighting", tags: ["Industrial", "Emergency", "LED"] },
            { title: "Electrical", tags: ["Switchgear", "Cabling", "Enclosures"] },
            { title: "Tools", tags: ["Hand", "Power", "Storage"] },
            { title: "Safety & Signage", tags: ["Bollards", "Tape", "Labels"] },
          ].map((c) => (
            <Beam key={c.title} radius={20} className="h-full">
              <div className="rounded-2xl border border-white/10 bg-[#141821] p-5 shadow-glass h-full flex flex-col justify-between">
                <div>
                  <div className="mb-2 text-base font-semibold text-white">{c.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 text-xs text-white/60">Request quote →</div>
              </div>
            </Beam>
          ))}
        </div>

        {/* Mid-page Enquire button */}
        <div className="mt-10">
          <Beam radius={16}>
            <a
              href="#contact"
              className="inline-block rounded-2xl bg-gradient-to-b from-[#12151C] to-[#0F1115] px-6 py-3 text-sm font-medium text-white hover:from-[#151922] hover:to-[#11151C]"
            >
              Enquire about supply
            </a>
          </Beam>
        </div>
      </section>

      {/* CAPABILITIES + SUSTAINABILITY */}
      <section id="capabilities" className="py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Capabilities</h2>
        <div className="grid gap-5 md:grid-cols-5">
          {["Procure", "Import", "Store", "Distribute", "Maintain"].map((s) => (
            <div key={s} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
              {s}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Sustainability</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Certified Suppliers",
              desc: "Audited partners with clear QA and environmental standards.",
            },
            {
              title: "Smarter Freight",
              desc: "Consolidated shipments and route optimization to cut emissions.",
            },
            {
              title: "Recyclable Packaging",
              desc: "Preference for materials that can be reused or recycled.",
            },
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

      {/* FINAL CONTACT CTA */}
      <section id="contact" className="py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Ready to talk?</h2>
        <p className="text-white/70 mb-6">
          Tell us what you need—SKUs, volumes, timelines—and we’ll respond within one business day.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Beam radius={16}>
            <a
              href="mailto:hello@horusaustralia.com.au?subject=Enquiry"
              className="inline-block rounded-2xl bg-gradient-to-b from-[#12151C] to-[#0F1115] px-6 py-3 text-sm font-medium text-white hover:from-[#151922] hover:to-[#11151C]"
            >
              Email us
            </a>
          </Beam>
          <Beam radius={16}>
            <a
              href="tel:+61XXXXXXXXX"
              className="inline-block rounded-2xl bg-gradient-to-b from-[#12151C] to-[#0F1115] px-6 py-3 text-sm font-medium text-white hover:from-[#151922] hover:to-[#11151C]"
            >
              Call now
            </a>
          </Beam>
        </div>
      </section>
    </div>
  );
}
