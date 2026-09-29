import { useReveal } from "../hooks/useReveal";

export default function Founder() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] border border-champagne/70" />
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.75rem] border border-champagne/50 bg-navy shadow-2xl shadow-navy/15">
            <div className="absolute inset-5 rounded-[1.35rem] border border-champagne/40" aria-hidden="true" />
            <span className="relative font-display text-8xl font-semibold tracking-wide text-champagne sm:text-9xl">
              RK
            </span>
          </div>
          <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-navy px-6 py-4 text-center shadow-xl">
            <div className="font-display text-2xl font-semibold text-champagne">15 Years</div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/70">of Excellence</div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Meet the Founder</span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">Mr. Rajesh Khillan</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-stone">
            Founder, Mahaluxmi Properties
          </p>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-stone lg:text-lg">
            <p>
              With a vision rooted in honesty and a deep understanding of the local Panipat property market,
              Mr. Rajesh Khillan established Mahaluxmi Properties in 1997 to change the way people experience real
              estate — replacing confusion and mistrust with clarity and confidence.
            </p>
            <p>
              Over the past 15 years, his hands-on approach and commitment to client relationships have
              shaped Mahaluxmi Properties into a name families and businesses turn to for guidance they can trust,
              whether they are buying their first home or leasing commercial space.
            </p>
            <p>
              Today, that same personal commitment continues to guide every transaction — because for Mr.
              Khillan, every client's property decision deserves the same care as his own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
