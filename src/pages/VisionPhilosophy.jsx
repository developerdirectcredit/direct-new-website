import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PageNavCta from "../components/PageNavCta";
import { founder, visionPage } from "../data/content";

export default function VisionPhilosophy() {
  const [expanded, setExpanded] = useState({});

  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Hero ───────────── */}
      <section className="pt-24 sm:pt-28">
        <Reveal className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/Work and Impact By Yogendra Mishra.jpeg"
            alt={founder.name}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </Reveal>

        <Reveal delay={80} className="mx-auto max-w-3xl px-5 py-5 text-center sm:px-8 sm:py-7">
          <h1 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
            {visionPage.h1}
          </h1>
        </Reveal>
      </section>

      {/* ───────────── Philosophy sections ───────────── */}
      <section className="border-y border-rule bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="space-y-16">
            {visionPage.sections.map((s, i) => {
              const canCollapse = s.paras.length > 1 && !s.noCollapse;
              const isOpen = !!expanded[i];
              const visibleParas = canCollapse && !isOpen ? s.paras.slice(0, 1) : s.paras;

              const body = (
                <>
                  <h3 className="text-[22px] font-bold text-ink">{s.heading}</h3>

                  {s.intro && (
                    <div className="mt-3 space-y-4">
                      {s.intro.map((p, j) => (
                        <p key={j} className="whitespace-pre-line text-[18px] leading-[1.85] text-ink/90">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {s.quote && (
                    <blockquote className="relative mt-6 border-l-2 border-signal bg-blue-soft/60 p-6">
                      <p className="font-display text-[20px] font-medium leading-relaxed text-ink">
                        &ldquo;{s.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}

                  <div className="mt-6 space-y-4">
                    {visibleParas.map((p, j) => (
                      <p key={j} className="whitespace-pre-line text-[18px] leading-[1.85] text-ink/90">
                        {p}
                      </p>
                    ))}
                  </div>

                  {canCollapse && (
                    <button
                      type="button"
                      onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                      className="mt-3 inline-flex items-center gap-1 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-signal transition hover:text-ink"
                    >
                      {isOpen ? "Read less" : "Read more"}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </>
              );

              if (s.image) {
                return (
                  <Reveal key={s.heading} delay={i * 60} className="grid items-center gap-10 lg:grid-cols-2">
                    <div>{body}</div>
                    <img
                      src={s.image}
                      alt={s.heading}
                      loading="lazy"
                      className="w-full rounded-3xl object-cover shadow-xl"
                    />
                  </Reveal>
                );
              }

              return (
                <Reveal key={s.heading} delay={i * 60} className="max-w-3xl">
                  {body}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <PageNavCta />

      <Footer />
    </div>
  );
}
