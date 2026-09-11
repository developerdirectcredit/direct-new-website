import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PageNavCta from "../components/PageNavCta";
import { founder, visionPage, visionPageEn } from "../data/content";
import useLanguage from "../hooks/useLanguage";
import useHashScroll from "../hooks/useHashScroll";
import linkifyDirectCredit from "../utils/linkify";

function PhilosophySection({ s, i }) {
  const [isOpen, setIsOpen] = useState(false);
  const previewCount = s.previewCount || 1;
  const canCollapse = s.paras.length > previewCount && !s.noCollapse;
  const visibleParas = canCollapse && !isOpen ? s.paras.slice(0, previewCount) : s.paras;

  const body = (
    <>
      <h3 className="text-[22px] font-bold text-ink">{s.heading}</h3>

      {s.intro && (
        <div className="mt-3 space-y-4">
          {s.intro.map((p, j) => (
            <p key={j} className="whitespace-pre-line text-[18px] leading-[1.85] text-ink/90">
              {linkifyDirectCredit(p)}
            </p>
          ))}
        </div>
      )}

      {s.quote && (
        <blockquote className="relative mt-6 border-l-2 border-signal bg-blue-soft/60 p-6">
          <p className="font-display text-[20px] font-medium leading-relaxed text-ink">
            &ldquo;{linkifyDirectCredit(s.quote)}&rdquo;
          </p>
        </blockquote>
      )}

      <div className="mt-6 space-y-4">
        {visibleParas.map((p, j) => {
          if (typeof p === "object" && p.box) {
            return (
              <div key={j} className="relative border-l-2 border-signal bg-blue-soft/60 p-6 space-y-2">
                {p.box.map((item, k) =>
                  item.bold ? (
                    <p key={k} className="text-[18px] font-bold leading-relaxed text-ink">
                      {linkifyDirectCredit(item.bold)}
                    </p>
                  ) : (
                    <p key={k} className="text-[18px] leading-relaxed text-ink/90">
                      {linkifyDirectCredit(item.text)}
                    </p>
                  )
                )}
              </div>
            );
          }
          if (typeof p === "object" && p.list) {
            return (
              <div key={j} className="relative border-l-2 border-signal bg-blue-soft/60 p-6">
                <ul className="list-disc space-y-1.5 pl-5 text-[18px] leading-relaxed text-ink">
                  {p.list.map((item, k) => (
                    <li key={k}>{linkifyDirectCredit(item)}</li>
                  ))}
                </ul>
              </div>
            );
          }
          if (typeof p === "object" && p.subheading) {
            return (
              <p key={j} className="font-display text-[24px] font-extrabold leading-snug text-ink sm:text-[28px]">
                {p.subheading}
              </p>
            );
          }
          if (typeof p === "object" && p.bold) {
            return (
              <p key={j} className="text-[18px] font-bold leading-[1.85] text-ink">
                {linkifyDirectCredit(p.bold)}
              </p>
            );
          }
          if (typeof p === "object") {
            return (
              <blockquote key={j} className="relative border-l-2 border-signal bg-blue-soft/60 p-6">
                <p className="font-display text-[20px] font-medium leading-relaxed text-ink">
                  &ldquo;{linkifyDirectCredit(p.quote)}&rdquo;
                </p>
              </blockquote>
            );
          }
          return (
            <p key={j} className="whitespace-pre-line text-[18px] leading-[1.85] text-ink/90">
              {linkifyDirectCredit(p)}
            </p>
          );
        })}
      </div>

      {canCollapse && (
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-signal transition hover:text-ink"
        >
          {isOpen ? "Read less" : "Read more"}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      )}
    </>
  );

  if (s.image) {
    const imgClass = s.matchHeight
      ? "h-full w-full rounded-3xl object-cover shadow-xl"
      : "w-full rounded-3xl object-cover shadow-xl";
    return (
      <Reveal
        id={s.id}
        delay={i * 60}
        className={`grid gap-10 lg:grid-cols-2 ${s.matchHeight ? "items-stretch" : "items-start"} ${s.id ? "scroll-mt-24" : ""}`}
      >
        <div>{body}</div>
        {s.imageLink ? (
          <a href={s.imageLink} target="_blank" rel="noopener noreferrer">
            <img src={s.image} alt={s.heading} loading="lazy" className={`${imgClass} transition hover:opacity-90`} />
          </a>
        ) : (
          <img src={s.image} alt={s.heading} loading="lazy" className={imgClass} />
        )}
      </Reveal>
    );
  }

  return (
    <Reveal id={s.id} delay={i * 60} className={`max-w-3xl ${s.id ? "scroll-mt-24" : ""}`}>
      {body}
    </Reveal>
  );
}

export default function VisionPhilosophy() {
  const [lang] = useLanguage();
  useHashScroll();
  const page = lang === "en" ? visionPageEn : visionPage;

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

        <Reveal delay={80} className="mx-auto mt-1 max-w-ledger px-5 sm:px-8">
          <div className="ledger-rule" />
          <div className="grid grid-cols-1 items-center gap-2 py-3 sm:grid-cols-[1fr_auto_1fr]">
            <span className="hidden sm:block" />
            <h1 className="text-center text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
              {page.h1}
            </h1>
            <div className="flex justify-center gap-3 sm:justify-end">
              <a href="/contact" className="btn-solid">
                Connect <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href="/about#my-journey" className="btn-ghost">
                Journey
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ───────────── Philosophy sections ───────────── */}
      <section className="border-y border-rule bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="space-y-16">
            {page.sections.map((s, i) => (
              <PhilosophySection key={s.heading} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      <PageNavCta />

      <Footer />
    </div>
  );
}
