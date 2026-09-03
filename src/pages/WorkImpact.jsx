import { useEffect } from "react";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import { founder, journey, workImpactPage, journeyNarrative } from "../data/content";

export default function WorkImpact() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = workImpactPage.seo.title;

    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content");
    if (meta) meta.setAttribute("content", workImpactPage.seo.description);

    return () => {
      document.title = prevTitle;
      if (meta && prevDescription != null) meta.setAttribute("content", prevDescription);
    };
  }, []);

  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Hero (banner, same as home page) ───────────── */}
      <section className="pt-16 sm:pt-20">
        {/* Brand banner - same image at every screen size, no mobile switch. */}
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <a href="/contact" aria-label="Let's Connect - Contact page par jaayein">
            <img
              src="/img/Work%20and%20Impact%20By%20Yogendra%20Mishra.jpeg"
              alt="Work & Impact - Yogendra Mishra, Founder & MD, Direct Credit"
              className="w-full cursor-pointer object-cover"
            />
          </a>
        </div>

        {/* Name plate - hero ke neeche ek ledger bar */}
        <div className="mx-auto mt-8 max-w-ledger px-5 sm:px-8">
          <div className="ledger-rule" />
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold leading-tight text-ink">
                {founder.name}
              </h1>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                {founder.role} · {founder.group}
              </p>
            </div>
            <div className="flex gap-3">
              <a href="/contact" className="btn-solid">
                Connect <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href="#journey" className="btn-ghost">
                Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Page Intro ───────────── */}
      <section className="pb-10 pt-10 sm:pb-14 sm:pt-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{workImpactPage.intro.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold leading-[1.25] text-ink">
              {workImpactPage.intro.headline}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/70">{workImpactPage.intro.subline}</p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── My Journey ───────────── */}
      <section id="journey" className="border-y border-rule bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead
            eyebrow="The ledger"
            title="My Journey"
            sub="हर entry एक कंपनी नहीं - एक सीख है।"
          />

          <div className="relative mt-16">
            {/* dashed spine */}
            <div className="absolute left-5 top-2 bottom-2 border-l-2 border-dashed border-signal/40 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-12 sm:space-y-4">
              {journey.map((j, i) => {
                const isRight = i % 2 === 0;
                return (
                  <Reveal
                    key={j.year}
                    delay={i * 70}
                    className={`relative flex sm:items-center ${
                      isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* node */}
                    <div
                      className={`absolute left-5 top-1 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border-4 border-white shadow ${
                        j.upcoming ? "bg-ink/30" : "bg-signal"
                      } sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2`}
                    />

                    <div className="w-full pl-14 sm:w-1/2 sm:pl-0">
                      <div className={`sm:max-w-md ${isRight ? "sm:ml-12 sm:text-left" : "sm:mr-12 sm:text-right sm:ml-auto"}`}>
                        <p
                          className={`flex items-center gap-2 font-display text-[2.1rem] font-extrabold italic leading-none ${
                            j.upcoming ? "text-ink/40" : "text-signal"
                          } ${isRight ? "sm:justify-start" : "sm:justify-end"}`}
                        >
                          <ArrowRight className="h-6 w-6 shrink-0 not-italic" />
                          {j.year}
                        </p>
                        <h3 className="mt-2 text-[18px] font-bold leading-snug text-blue">
                          {j.label}
                          {j.upcoming && (
                            <span className="ml-3 border border-rule px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                              Planned
                            </span>
                          )}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{j.text}</p>
                      </div>
                    </div>

                    <div className="hidden sm:block sm:w-1/2" />
                  </Reveal>
                );
              })}
            </div>

            {/* arrows on the spine, one per gap between years */}
            {journey.slice(0, -1).map((j, i) => (
              <div
                key={`arrow-${j.year}`}
                className="pointer-events-none absolute left-5 z-10 -translate-x-1/2 sm:left-1/2"
                style={{ top: `calc(${((i + 1) / journey.length) * 100}% - 0.6rem)` }}
              >
                <ArrowDown className="h-4 w-4 rounded-full bg-white text-signal" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── The Journey - narrative ───────────── */}
      <section className="border-t border-rule bg-paper py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead
            eyebrow={journeyNarrative.eyebrow}
            title={journeyNarrative.title}
            sub={journeyNarrative.sub}
          />

          <div className="mt-12 space-y-8">
            {journeyNarrative.entries.map((e, i) => (
              <Reveal
                key={`${e.year}-${e.heading}`}
                delay={i * 60}
                className="grid gap-2 border-t border-rule pt-6 sm:grid-cols-[110px_1fr] sm:gap-8"
              >
                <p className="font-display text-[1.6rem] font-extrabold italic leading-none text-signal">
                  {e.year}
                </p>
                <div>
                  <h3 className="text-[18px] font-bold leading-snug text-ink">{e.heading}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={journeyNarrative.entries.length * 60} className="mt-10 border-t border-rule pt-6">
            <p className="text-[17px] leading-relaxed text-ink/80">
              <strong className="text-ink">Today:</strong> {journeyNarrative.today}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Closing CTA ───────────── */}
      <section id="connect" className="bg-blue py-14 text-white sm:py-16">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <p className="max-w-2xl text-[19px] font-semibold leading-relaxed sm:text-[22px]">
            {journeyNarrative.cta.line}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href={journeyNarrative.cta.primary.href} className="btn bg-white text-blue hover:bg-ink hover:text-white">
              {journeyNarrative.cta.primary.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={journeyNarrative.cta.secondary.href}
              className="btn border border-white/50 text-white hover:bg-white hover:text-blue"
            >
              {journeyNarrative.cta.secondary.label} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
