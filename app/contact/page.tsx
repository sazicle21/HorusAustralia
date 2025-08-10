import Beam from "@/components/Beam";

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10 md:py-14">
      <h1 className="text-3xl font-semibold text-white mb-6">Get in touch</h1>
      <Beam radius={16} className="block">
        <form
          className="rounded-2xl border border-white/10 bg-[#141821] p-5 shadow-glass"
          onSubmit={(e) => { e.preventDefault(); alert("Submitted"); }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Name" className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" />
            <input required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" />
          </div>
          <input required placeholder="Company" className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" />
          <textarea required rows={4} placeholder="What do you need?" className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40" />
          <div className="mt-4">
            <Beam radius={16}>
              <button className="rounded-2xl bg-gradient-to-b from-[#12151C] to-[#0F1115] px-5 py-3 text-sm font-medium text-white hover:from-[#151922] hover:to-[#11151C]" type="submit">
                Send
              </button>
            </Beam>
          </div>
        </form>
      </Beam>
    </section>
  );
}
