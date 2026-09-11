import { useState } from "react";
import { ArrowRight, User, Rocket, Handshake, Award, Users, ChevronDown, GraduationCap, HeartHandshake, Flag, Quote, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PageNavCta from "../components/PageNavCta";
import { founder, aboutPage, aboutPageEn } from "../data/content";
import useLanguage from "../hooks/useLanguage";
import useHashScroll from "../hooks/useHashScroll";
import linkifyDirectCredit from "../utils/linkify";

const heroStatIcons = { User, Rocket, Handshake, Award, Users, TrendingUp };
const groupIcons = { GraduationCap, HeartHandshake, Flag };
const groupThemes = {
  amber: { ring: "border-amber-200", wash: "bg-amber-50", iconBg: "bg-amber-100", iconText: "text-amber-600", title: "text-amber-700" },
  emerald: { ring: "border-emerald-200", wash: "bg-emerald-50", iconBg: "bg-emerald-100", iconText: "text-emerald-600", title: "text-emerald-700" },
  sky: { ring: "border-sky-200", wash: "bg-sky-50", iconBg: "bg-sky-100", iconText: "text-sky-600", title: "text-sky-700" },
};

function StorySection({ s, i }) {
  const [isOpen, setIsOpen] = useState(false);
  const previewCount = s.previewCount || 1;
  const canCollapse = s.paras.length > previewCount;
  const visibleParas = canCollapse && !isOpen ? s.paras.slice(0, previewCount) : s.paras;

  const body = (
    <>
      <h3 className="text-[22px] font-bold text-ink">{s.heading}</h3>
      <div className="mt-3 space-y-4">
        {visibleParas.map((p, j) => {
          if (typeof p === "object" && p.lead) {
            return (
              <div key={j} className="space-y-2">
                <p
                  className={`text-[18px] leading-[1.85] ${
                    p.boldLead ? "font-bold text-ink" : "text-ink/90"
                  }`}
                >
                  {linkifyDirectCredit(p.lead)}
                </p>
                <blockquote className="relative border-l-2 border-signal bg-blue-soft/60 p-6">
                  <p className="font-display text-[20px] font-medium leading-relaxed text-ink">
                    &ldquo;{linkifyDirectCredit(p.quote)}&rdquo;
                  </p>
                </blockquote>
              </div>
            );
          }
          if (typeof p === "object" && p.list) {
            return (
              <ul key={j} className="list-disc space-y-1.5 pl-5 text-[18px] leading-[1.85] text-ink/90">
                {p.list.map((item, k) => (
                  <li key={k}>{linkifyDirectCredit(item)}</li>
                ))}
              </ul>
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
            <p key={j} className="text-[18px] leading-[1.85] text-ink/90">
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

      {s.groups && (
        <div className="mt-6 grid items-start gap-4 sm:grid-cols-3">
          {s.groups.map((g) => {
            const GroupIcon = groupIcons[g.icon];
            const t = groupThemes[g.theme] || groupThemes.amber;
            return (
              <div key={g.title} className={`rounded-2xl border ${t.ring} ${t.wash} p-4`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${t.iconBg}`}>
                    {GroupIcon && <GroupIcon className={`h-5 w-5 ${t.iconText}`} />}
                  </div>
                  <h4 className={`mt-2 text-[16px] font-bold leading-tight ${t.title}`}>
                    {g.title} {g.subtitle}
                  </h4>
                </div>
                <div className="mt-3 space-y-2">
                  {g.quotes.map((q, k) => (
                    <div key={k} className="flex gap-2 rounded-lg border border-ink/10 bg-white p-2.5">
                      <Quote className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${t.iconText}`} />
                      <p className="text-[13px] leading-relaxed text-ink/85">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {s.closingParas && (
        <div className="mt-6 space-y-4">
          {s.closingParas.map((p, j) => (
            <div key={j} className="space-y-2">
              <p className="text-[18px] leading-[1.85] text-ink/90">{p.lead}</p>
              <blockquote className="relative border-l-2 border-signal bg-blue-soft/60 p-6">
                <p className="font-display text-[20px] font-medium leading-relaxed text-ink">
                  &ldquo;{p.quote}&rdquo;
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      )}
    </>
  );

  if (s.image) {
    const imgClass = s.matchHeight
      ? "h-full w-full rounded-3xl object-cover shadow-xl"
      : "mx-auto max-h-[420px] w-auto rounded-3xl object-contain shadow-xl";
    return (
      <Reveal
        id={s.id}
        delay={i * 70}
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
    <Reveal id={s.id} delay={i * 70} className={`max-w-3xl ${s.id ? "scroll-mt-24" : ""}`}>
      {body}
    </Reveal>
  );
}

export default function About() {
  const [lang] = useLanguage();
  useHashScroll();
  const page = lang === "en" ? aboutPageEn : aboutPage;
  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Banner ───────────── */}
      <section className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/aboutbanner.png"
            alt={founder.name}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Stats bar */}
      <Reveal delay={140} className="relative z-10 mx-auto -mt-6 max-w-5xl px-3 sm:-mt-14 sm:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:gap-6 sm:p-8 lg:grid-cols-4">
          {page.hero.stats.map((s) => {
            const Icon = heroStatIcons[s.icon];
            return (
              <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                <div
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-soft sm:h-11 sm:w-11"
                  style={{ color: "#0F5D5A" }}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[clamp(13px,3.6vw,19px)] font-extrabold leading-none text-ink">{s.stat}</p>
                  <p className="mt-1 text-[clamp(9px,2.4vw,12px)] leading-tight text-ink/55">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <div id="my-journey" className="scroll-mt-24 border-t border-rule">
        <div className="mx-auto max-w-3xl px-5 py-3 text-center sm:px-8 sm:py-4">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
              {page.story.title}
            </h2>
          </Reveal>
        </div>
      </div>

      {/* ───────────── भाग 1 — Extended Founder Story ───────────── */}
      <section id="story" className="border-y border-rule bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="space-y-14">
            {page.story.sections.map((s, i) => (
              <StorySection key={s.heading} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      <PageNavCta />

      <Footer />
    </div>
  );
}
