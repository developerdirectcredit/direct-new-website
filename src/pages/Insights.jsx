import { useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Compass,
  TrendingUp,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  Users,
  ShieldCheck,
  Scale,
  GitBranch,
  GraduationCap,
  MessageCircle,
  Rocket,
  AlertTriangle,
  Hourglass,
  Mountain,
  RotateCcw,
  Milestone,
  RefreshCw,
  Smile,
  Handshake,
  UserPlus,
  Heart,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Clock,
  Building2,
  Landmark,
  Award,
  User,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageNavCta from "../components/PageNavCta";
import { founder, insightsPage, insightsPageEn } from "../data/content";
import useLanguage from "../hooks/useLanguage";
import linkifyDirectCredit from "../utils/linkify";

const heroStatIcons = { User, Rocket, Handshake, Award, Users, BookOpen };

const sectionIcons = { Compass, TrendingUp, BookOpen, HeartHandshake, Lightbulb };

/* Har item ka apna chhota icon — box card ke top-left mein. */
const itemIcons = {
  Users,
  ShieldCheck,
  Scale,
  GitBranch,
  GraduationCap,
  TrendingUp,
  MessageCircle,
  Rocket,
  AlertTriangle,
  Hourglass,
  Mountain,
  RotateCcw,
  Milestone,
  RefreshCw,
  Smile,
  Handshake,
  UserPlus,
  Heart,
};

/* Har section ka apna accent color — overview card, icon, bullet sab isi se rangte hain. */
const sectionThemes = {
  Compass: { iconBg: "bg-rose-100", iconText: "text-rose-600", iconBgHover: "group-hover:bg-rose-500", label: "text-rose-600", dot: "bg-rose-500", ring: "hover:border-rose-300" },
  TrendingUp: { iconBg: "bg-emerald-100", iconText: "text-emerald-600", iconBgHover: "group-hover:bg-emerald-500", label: "text-emerald-600", dot: "bg-emerald-500", ring: "hover:border-emerald-300" },
  BookOpen: { iconBg: "bg-amber-100", iconText: "text-amber-600", iconBgHover: "group-hover:bg-amber-500", label: "text-amber-600", dot: "bg-amber-500", ring: "hover:border-amber-300" },
  HeartHandshake: { iconBg: "bg-violet-100", iconText: "text-violet-600", iconBgHover: "group-hover:bg-violet-500", label: "text-violet-600", dot: "bg-violet-500", ring: "hover:border-violet-300" },
  Lightbulb: { iconBg: "bg-sky-100", iconText: "text-sky-600", iconBgHover: "group-hover:bg-sky-500", label: "text-sky-600", dot: "bg-sky-500", ring: "hover:border-sky-300" },
};

const sectionSlugs = ["leadership", "business", "lessons", "culture", "notes"];

const statIcons = { Instagram, Youtube, Linkedin, Facebook, Clock, Building2, Users, Landmark, Award };

/* Har stat tile ka apna accent — icon badge aur top border isi se rangte hain. */
const statThemes = {
  indigo: { badgeBg: "bg-indigo-100", badgeText: "text-indigo-600", top: "border-t-indigo-400" },
  rose: { badgeBg: "bg-rose-100", badgeText: "text-rose-600", top: "border-t-rose-400" },
  red: { badgeBg: "bg-red-100", badgeText: "text-red-600", top: "border-t-red-400" },
  sky: { badgeBg: "bg-sky-100", badgeText: "text-sky-600", top: "border-t-sky-400" },
  emerald: { badgeBg: "bg-emerald-100", badgeText: "text-emerald-600", top: "border-t-emerald-400" },
  violet: { badgeBg: "bg-violet-100", badgeText: "text-violet-600", top: "border-t-violet-400" },
  amber: { badgeBg: "bg-amber-100", badgeText: "text-amber-600", top: "border-t-amber-400" },
  teal: { badgeBg: "bg-teal-100", badgeText: "text-teal-600", top: "border-t-teal-400" },
  orange: { badgeBg: "bg-orange-100", badgeText: "text-orange-600", top: "border-t-orange-400" },
};

/* Quick-stats grid — social reach, experience, network, recognition — ek nazar mein. */
function StatsGrid({ stats }) {
  return (
    <section className="border-t border-rule bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <SectionHead eyebrow="At a Glance" title="A Snapshot of My Journey" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {stats.items.map((s, i) => {
            const Icon = statIcons[s.icon];
            const theme = statThemes[s.theme];
            const isExternal = /^https?:\/\//i.test(s.url || "");
            return (
              <Reveal
                key={s.label}
                as={s.url ? "a" : "div"}
                href={s.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                delay={i * 50}
                className={`card group flex flex-col gap-3 border-t-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(11,27,58,0.45)] ${theme.top}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.badgeBg} ${theme.badgeText}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-ink">{s.label}</p>
                      <p className="text-[12.5px] text-ink/50">{s.sub}</p>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-ink/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink/50" />
                </div>

                <div>
                  <p className="font-display text-[26px] font-extrabold leading-none text-ink">{s.stat}</p>
                  <p className="mt-1 text-[12.5px] text-ink/45">{s.unit}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* "मेरे विचार, आपके लिए" — horizontal card carousel linking down to each dedicated section. */
function CoreInsights({ page }) {
  const trackRef = useRef(null);
  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="border-t border-rule bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{page.coreHeading.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.6vw,2.5rem)] font-extrabold leading-tight text-ink">
              {page.coreHeading.titleLine1}{" "}
              <span className="text-signal">{page.coreHeading.titleLine2}</span>
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/60">{page.coreHeading.sub}</p>
            <a href="#leadership" className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-blue">
              {page.coreHeading.viewAllLabel} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Pichhle insights dekhein"
              className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:brightness-110"
              style={{ backgroundColor: "#0F5D5A" }}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Agle insights dekhein"
              className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:brightness-110"
              style={{ backgroundColor: "#0F5D5A" }}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
          {page.sections.map((s, i) => {
            const Icon = sectionIcons[s.icon];
            const theme = sectionThemes[s.icon];
            return (
              <Reveal
                key={s.title}
                delay={i * 60}
                as="a"
                href={`#${sectionSlugs[i]}`}
                className={`group flex w-64 shrink-0 snap-start flex-col rounded-2xl border border-rule bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-28px_rgba(11,27,58,0.55)] ${theme.ring}`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${theme.iconBg} ${theme.iconText} ${theme.iconBgHover} group-hover:text-white`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[17px] font-bold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink/60">{s.intro}</p>
                <span className={`mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold ${theme.label}`}>
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Ek poora dedicated section — apne items/quotes poore paragraph ke saath, alag div mein. */
function InsightSection({ section, slug, tint }) {
  const Icon = sectionIcons[section.icon];
  const theme = sectionThemes[section.icon];

  return (
    <section id={slug} className={`scroll-mt-24 border-t border-rule py-16 sm:py-20 ${tint ? "bg-paper" : "bg-white"}`}>
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal className="flex items-center gap-4">
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${theme.iconBg} ${theme.iconText}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${theme.label}`}>{section.subtitle}</p>
            <h2 className="mt-1 text-[26px] font-bold leading-tight text-ink sm:text-[30px]">{section.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={60} className="mt-2">
          <p className="text-[16px] text-ink/60">{section.intro}</p>
        </Reveal>

        {section.items && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {section.items.map((it, i) => {
              const ItemIcon = itemIcons[it.icon];
              return (
                <Reveal
                  key={it.title}
                  delay={80 + i * 60}
                  className={`card group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-28px_rgba(11,27,58,0.55)] ${theme.ring}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${theme.iconBg} ${theme.iconText} ${theme.iconBgHover} group-hover:text-white`}
                  >
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-[15px] font-bold text-ink">{it.title}</p>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink/75">{linkifyDirectCredit(it.text)}</p>
                </Reveal>
              );
            })}
          </div>
        )}

        {section.quotes && (
          <div className="mt-10 space-y-5">
            {section.quotes.map((q, i) => (
              <Reveal
                key={q}
                delay={80 + i * 50}
                className="border-l-2 border-signal bg-blue-soft/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-soft hover:shadow-[0_18px_40px_-28px_rgba(11,27,58,0.4)]"
              >
                <p className="font-display text-[17px] italic leading-relaxed text-ink">&ldquo;{q}&rdquo;</p>
              </Reveal>
            ))}
            {section.note && (
              <Reveal delay={80 + section.quotes.length * 50} className="border border-dashed border-rule p-5 transition-colors duration-300 hover:border-signal/50">
                <p className="text-[14px] italic text-ink/50">{section.note}</p>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Insights() {
  const [lang] = useLanguage();
  const page = lang === "en" ? insightsPageEn : insightsPage;

  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Banner: full-width image, same treatment as Home page ───────────── */}
      <section className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/vision.JPG"
            alt={founder.name}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        <Reveal delay={80} className="mx-auto max-w-3xl px-5 py-5 text-center sm:px-8 sm:py-7">
          <h1 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
            {page.h1}
          </h1>
        </Reveal>
      </section>

      {/* ───────────── Hero: split panel, photo right, stats bar below ───────────── */}
      <section className="relative overflow-hidden border-t border-rule pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: text panel */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -left-4 -top-6 h-32 w-32 opacity-40"
                style={{
                  backgroundImage: "radial-gradient(rgba(15,93,90,0.25) 1.5px, transparent 1.5px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <Reveal className="relative">
                <p className="eyebrow">{page.hero.eyebrow}</p>
                <h1 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[1.15] text-ink">
                  {page.hero.titleLead}
                  <br />
                  <span style={{ color: "#0F5D5A" }}>{page.hero.titleHighlight1}</span>{" "}
                  {page.hero.titleSep}{" "}
                  <span className="text-signal">{page.hero.titleHighlight2}</span>
                </h1>

                <div className="mt-6 space-y-4">
                  {page.intro.paras.slice(0, 2).map((p, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-ink/70">
                      {linkifyDirectCredit(p)}
                    </p>
                  ))}
                </div>

                <a
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-semibold text-white transition hover:brightness-105"
                  style={{ backgroundColor: "#0F5D5A" }}
                >
                  {page.hero.ctaLabel} <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>

            {/* Right: photo */}
            <Reveal delay={100}>
              <img
                src={page.hero.image}
                alt={founder.name}
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-xl"
              />
            </Reveal>
          </div>

          {/* Quote card — full width, below the split panel */}
          <Reveal
            delay={140}
            className="mt-10 rounded-2xl p-6 text-white shadow-2xl sm:p-8"
            style={{ backgroundColor: "#0F5D5A" }}
          >
            <span className="font-display text-[38px] leading-none text-white/40">&ldquo;</span>
            <p className="-mt-4 max-w-2xl text-[16px] leading-relaxed sm:text-[17px]">{page.hero.quote}</p>
            <p className="mt-3 font-display text-[14px] text-white/80">- {founder.name}</p>
          </Reveal>
        </div>

        {/* Stats bar — same metrics as About page, for a consistent brand story */}
        <Reveal delay={140} className="relative z-10 mx-auto mt-14 max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-6 shadow-2xl sm:grid-cols-4 sm:p-8">
            {page.hero.stats.map((s) => {
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

      {/* ───────────── My Core Insights: horizontal card carousel ───────────── */}
      <CoreInsights page={page} />

      {/* ───────────── Closing quote banner ───────────── */}
      <section className="py-10" style={{ backgroundColor: "#0F5D5A" }}>
        <div className="mx-auto flex max-w-ledger flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
          <p className="flex items-start gap-3 text-[16px] leading-relaxed text-white/90 sm:text-[18px]">
            <span className="font-display text-[32px] leading-none text-white/40">&ldquo;</span>
            {linkifyDirectCredit(page.closingQuote.text)}
          </p>
          <p className="font-display text-[16px] shrink-0 text-white/70">- {founder.name}</p>
        </div>
      </section>

      {/* ───────────── Quick stats: social & network, at a glance ───────────── */}
      <StatsGrid stats={page.stats} />

      {/* ───────────── Dedicated section per category, each its own div ───────────── */}
      {page.sections.map((s, i) => (
        <InsightSection key={s.title} section={s} slug={sectionSlugs[i]} tint={i % 2 === 1} />
      ))}

      <PageNavCta />

      <Footer />
    </div>
  );
}
