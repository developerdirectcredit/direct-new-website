import { useState } from "react";
import { Play, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageNavCta from "../components/PageNavCta";
import { founder, mediaPage, mediaVideos, facebookVideos, mediaReels } from "../data/content";


/* Har type/badge ka apna accent — rose, emerald, amber, violet, sky. */
const mediaThemes = {
  rose: { soft: "bg-rose-100", text: "text-rose-600", badgeBg: "bg-rose-100", badgeText: "text-rose-700" },
  emerald: { soft: "bg-emerald-100", text: "text-emerald-600", badgeBg: "bg-emerald-100", badgeText: "text-emerald-700" },
  amber: { soft: "bg-amber-100", text: "text-amber-600", badgeBg: "bg-amber-100", badgeText: "text-amber-700" },
  sky: { soft: "bg-sky-100", text: "text-sky-600", badgeBg: "bg-sky-100", badgeText: "text-sky-700" },
  violet: { soft: "bg-violet-100", text: "text-violet-600", badgeBg: "bg-violet-100", badgeText: "text-violet-700" },
};

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
            src={`https://i.ytimg.com/vi/${r.youtubeId}/hqdefault.jpg`}
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

export default function Media() {
  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Banner: full-width image, same treatment as Home page ───────────── */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/sir%20Website%20banner.jpg.jpeg"
            alt={founder.name}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </section>

      <Reveal delay={80} className="mx-auto max-w-3xl px-5 py-5 text-center sm:px-8 sm:py-7">
        <h1 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
          {mediaPage.title}
        </h1>
      </Reveal>


      {/* ───────────── Featured Highlights ───────────── */}
      <section id="highlights" className="border-y border-rule bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-[26px] font-extrabold leading-tight text-ink sm:text-[30px]">
                Featured Highlights
              </h2>
              <span className="mt-2 block h-0.5 w-14 bg-signal" />
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/60 hover:text-ink">
              View All <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mediaPage.highlights.map((h, i) => {
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
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink/60">{h.desc}</p>

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

      {/* ───────────── Videos ───────────── */}
      <section className="border-b border-rule bg-paper pb-20 pt-4 sm:pb-28 sm:pt-6">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="Videos" title="Awards & Media Mentions" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {mediaVideos.map((v, i) => (
              <Reveal key={v.youtubeId} delay={i * 90}>
                <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>

                <div className="mt-4">
                  {v.date && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{v.date}</p>
                  )}
                  <p className="mt-1 text-[17px] font-semibold leading-snug text-ink">{v.title}</p>
                  {v.event && <p className="mt-1 text-sm font-semibold text-blue">{v.event}</p>}
                  {v.desc && <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{v.desc}</p>}
                  {v.presenter && (
                    <p className="mt-3 border-t border-rule pt-3 text-[13px] text-ink/55">{v.presenter}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Reels — inside Awards & मीडिया में उल्लेख */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mediaReels.map((r, i) => (
              <Reveal key={r.url} delay={i * 90}>
                <ReelCard r={r} />
                <p className="mt-3 text-[15px] font-semibold text-ink/80">{r.title}</p>
                {r.desc && <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{r.desc}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Facebook Videos ───────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="Interviews" title="Conversations that Inspire" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {facebookVideos.map((v, i) => (
              <Reveal key={v.url} delay={i * 90}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl"
                >
                  {v.thumbnail ? (
                    <>
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/35" />
                      <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/90 text-[#0866FF] shadow-lg transition group-hover:scale-105">
                        <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
                      </span>
                      <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-[#0866FF] px-3 py-1.5 text-[12px] font-semibold text-white">
                        Watch on Facebook <ExternalLink className="h-3 w-3" />
                      </span>
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0866FF]">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 transition group-hover:scale-105">
                        <Play className="h-7 w-7 translate-x-0.5 text-white" fill="currentColor" />
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wide text-white">
                        Watch on Facebook <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  )}
                </a>

                <div className="mt-4">
                  {v.date && (
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{v.date}</p>
                  )}
                  <p className="mt-1 text-[17px] font-semibold leading-snug text-ink">{v.title}</p>
                  {v.event && <p className="mt-1 text-sm font-semibold text-blue">{v.event}</p>}
                  {v.desc && <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{v.desc}</p>}
                </div>
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
