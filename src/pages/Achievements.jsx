import { useState } from "react";
import { Calendar, ArrowRight, Play, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageNavCta from "../components/PageNavCta";
import { founder, mediaPage, mediaPageEn, mediaReels } from "../data/content";
import useLanguage from "../hooks/useLanguage";
import useHashScroll from "../hooks/useHashScroll";
import linkifyDirectCredit from "../utils/linkify";

function ReelCard({ r }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl bg-ink shadow-xl" style={{ aspectRatio: "9 / 16" }}>
      {playing || !r.youtubeId ? (
        <iframe
          src={r.embed}
          title={r.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${r.title} chalayein`}
          className="group relative block h-full w-full"
        >
          <img
            src={r.thumbnail || `https://i.ytimg.com/vi/${r.youtubeId}/hqdefault.jpg`}
            alt={r.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 grid place-items-center bg-ink/25 transition group-hover:bg-ink/35">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition group-hover:scale-105">
              <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

/* Har type/badge ka apna accent — rose, emerald, amber, violet, sky. */
const mediaThemes = {
  rose: { soft: "bg-rose-100", text: "text-rose-600", badgeBg: "bg-rose-100", badgeText: "text-rose-700" },
  emerald: { soft: "bg-emerald-100", text: "text-emerald-600", badgeBg: "bg-emerald-100", badgeText: "text-emerald-700" },
  amber: { soft: "bg-amber-100", text: "text-amber-600", badgeBg: "bg-amber-100", badgeText: "text-amber-700" },
  sky: { soft: "bg-sky-100", text: "text-sky-600", badgeBg: "bg-sky-100", badgeText: "text-sky-700" },
  violet: { soft: "bg-violet-100", text: "text-violet-600", badgeBg: "bg-violet-100", badgeText: "text-violet-700" },
};

export default function Achievements() {
  const [lang] = useLanguage();
  useHashScroll();
  const isEn = lang === "en";
  const page = isEn ? mediaPageEn : mediaPage;

  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Banner ───────────── */}
      <section className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/Yogendra%20mishra.png"
            alt={founder.name}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </section>

      <Reveal delay={80} className="mx-auto mt-1 max-w-ledger px-5 sm:px-8">
        <div className="ledger-rule" />
        <div className="grid grid-cols-1 items-center gap-2 py-3 sm:grid-cols-[1fr_auto_1fr]">
          <span className="hidden sm:block" />
          <h1 className="text-center text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
            {isEn ? "Achievements & Awards" : "Recognition & Honours"}
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

      {/* ───────────── Awards ───────────── */}
      <section id="power-icon-awards" className="scroll-mt-24">
        <div className="mx-auto max-w-ledger px-5 pb-16 sm:px-8 sm:pb-20">
          <SectionHead eyebrow="Recognition" title={isEn ? "Awards" : "Awards"} />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.highlights.map((h, i) => {
              const theme = mediaThemes[h.theme];
              return (
                <Reveal
                  key={h.title}
                  delay={i * 80}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={h.image}
                      alt={h.title}
                      loading="lazy"
                      className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                        h.imagePosition === "center" ? "object-center" : "object-top"
                      }`}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span className={`w-fit rounded-full ${theme.badgeBg} ${theme.badgeText} px-3 py-1 text-[11px] font-bold uppercase tracking-wide`}>
                      {h.badge}
                    </span>
                    <h3 className="mt-3 text-[17px] font-bold leading-snug text-ink">{h.title}</h3>
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink/60">{linkifyDirectCredit(h.desc)}</p>

                    <p className="mt-4 flex items-center gap-1.5 text-[12px] text-ink/45">
                      <Calendar className="h-3.5 w-3.5" />
                      {h.date}
                    </p>
                    <a href={h.url || "#"} className={`mt-3 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold ${theme.text}`}>
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Corporate Milestones Coverage ───────────── */}
      <section id="corporate-milestones-coverage" className="scroll-mt-24 border-t border-rule bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="Milestones" title="Corporate Milestones Coverage" />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mediaReels.map((r, i) => (
              <Reveal key={r.url} delay={i * 90}>
                <ReelCard r={r} />
                <p className="mt-3 text-[15px] font-semibold text-ink/80">{r.title}</p>
                {r.desc && <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{linkifyDirectCredit(r.desc)}</p>}
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
