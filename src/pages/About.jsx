import { useState } from "react";
import { ArrowRight, User, Rocket, Handshake, Award, Users, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PageNavCta from "../components/PageNavCta";
import { founder, aboutPage } from "../data/content";

const heroStatIcons = { User, Rocket, Handshake, Award, Users };

export default function About() {
  const [expanded, setExpanded] = useState({});
  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Hero: split panel, photo right, stats bar overlap ───────────── */}
      <section className="relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10">
        <div className="grid lg:grid-cols-2">
          {/* Left: text panel */}
          <div className="relative bg-paper px-5 py-14 sm:px-10 lg:py-20">
            <div
              className="pointer-events-none absolute left-0 top-0 h-40 w-40 opacity-40"
              style={{
                backgroundImage: "radial-gradient(rgba(15,93,90,0.25) 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
            <Reveal className="relative max-w-lg">
              <p className="eyebrow">{aboutPage.hero.eyebrow}</p>
              <h1 className="mt-4 whitespace-nowrap font-display text-[clamp(1.5rem,3.6vw,3.1rem)] font-extrabold uppercase leading-[1.1] text-ink">
                {aboutPage.hero.titlePlain}{" "}
                <span style={{ color: "#1338A0" }}>{aboutPage.hero.titleHighlightBlue}</span>{" "}
                <span style={{ color: "#E31E24" }}>{aboutPage.hero.titleHighlightRed}</span>{" "}
                {aboutPage.hero.titleSuffix}
              </h1>
              <p className="mt-3 text-[18px] font-medium text-ink/70">{aboutPage.hero.role}</p>

              <blockquote className="mt-6 border-l-2 pl-4" style={{ borderColor: "#0F5D5A" }}>
                <p className="text-[16px] leading-relaxed text-ink/70">
                  {aboutPage.sub}
                </p>
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-semibold text-white transition hover:brightness-105"
                  style={{ backgroundColor: "#0F5D5A" }}
                >
                  {aboutPage.hero.ctaLabel} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: photo + quote card */}
          <Reveal delay={100} className="relative min-h-[320px]">
            <img
              src={aboutPage.hero.image}
              alt={founder.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute right-6 top-6 max-w-[15rem] rounded-2xl p-6 text-white shadow-2xl sm:right-10 sm:top-10"
              style={{ backgroundColor: "#0F5D5A" }}
            >
              <span className="font-display text-[38px] leading-none text-white/40">&ldquo;</span>
              <p className="-mt-4 text-[16px] leading-relaxed">{aboutPage.hero.quote}</p>
              <p className="mt-3 font-display text-[14px] text-white/80">{founder.name}</p>
            </div>
          </Reveal>
        </div>

        {/* Floating stats bar */}
        <Reveal delay={140} className="relative z-10 mx-auto -mt-14 max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-2xl sm:grid-cols-3 sm:p-8">
            {aboutPage.hero.stats.map((s) => {
              const Icon = heroStatIcons[s.icon];
              return (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-soft" style={{ color: "#0F5D5A" }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-[19px] font-extrabold leading-none text-ink">{s.stat}</p>
                    <p className="mt-1 text-[12px] leading-tight text-ink/55">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <div className="border-t border-rule">
        <div className="mx-auto max-w-3xl px-5 py-3 text-center sm:px-8 sm:py-4">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
              {aboutPage.story.title}
            </h2>
          </Reveal>
        </div>
      </div>

      {/* ───────────── भाग 1 — Extended Founder Story ───────────── */}
      <section id="story" className="border-y border-rule bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="space-y-14">
            {aboutPage.story.sections.map((s, i) => {
              const canCollapse = s.paras.length > 1 && !s.image;
              const isOpen = !!expanded[i];
              const visibleParas = canCollapse && !isOpen ? s.paras.slice(0, 1) : s.paras;

              const body = (
                <>
                  <h3 className="text-[22px] font-bold text-ink">{s.heading}</h3>
                  <div className="mt-3 space-y-4">
                    {visibleParas.map((p, j) => (
                      <p key={j} className="text-[18px] leading-[1.85] text-ink/90">
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
                  <Reveal key={s.heading} delay={i * 70} className="grid items-start gap-10 lg:grid-cols-2">
                    <div>{body}</div>
                    <img
                      src={s.image}
                      alt={s.heading}
                      loading="lazy"
                      className="mx-auto max-h-[420px] w-auto rounded-3xl object-contain shadow-xl"
                    />
                  </Reveal>
                );
              }

              return (
                <Reveal key={s.heading} delay={i * 70} className="max-w-3xl">
                  {body}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={80} className="relative mt-14 max-w-3xl border-l-2 border-signal bg-blue-soft/60 p-6">
            <p className="font-display text-[20px] font-medium leading-relaxed text-ink">
              &ldquo;{aboutPage.story.quote}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── भाग 2 — Personal Background ───────────── */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.personal.sections.map((s, i) => (
              <Reveal
                key={s.heading}
                delay={i * 80}
                className="card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40 hover:shadow-[0_18px_40px_-28px_rgba(11,27,58,0.55)]"
              >
                <h3 className="text-[19px] font-semibold text-ink">{s.heading}</h3>
                {s.text && (
                  <p className="mt-3 text-[17px] leading-relaxed text-ink/90">{s.text}</p>
                )}
                {s.placeholder && (
                  <p className="mt-3 border border-dashed border-signal/40 bg-signal/5 p-3 font-mono text-[12px] leading-relaxed text-ink/55">
                    <span className="font-semibold uppercase tracking-[0.1em] text-signal">
                      Content pending -{" "}
                    </span>
                    {s.placeholder}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageNavCta />

      <Footer />
    </div>
  );
}
