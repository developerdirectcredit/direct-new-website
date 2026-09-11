import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageNavCta from "../components/PageNavCta";
import {
  founder,
  mediaVideos,
  facebookVideos,
  facebookVideosEn,
  speakingVideos,
  newspaperFeatures,
  mediaInterviewReels,
  whatMediaSaysReels,
  galleryExtraVideos,
} from "../data/content";
import useLanguage from "../hooks/useLanguage";
import useHashScroll from "../hooks/useHashScroll";
import linkifyDirectCredit from "../utils/linkify";

function FacebookCard({ v }) {
  const isFacebook = v.url && v.url.includes("facebook.com");

  return (
    <>
      {isFacebook ? (
        <div className="relative h-[350px] w-full overflow-hidden rounded-2xl bg-ink shadow-xl">
          <iframe
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v.url)}&show_text=false&width=350&height=350`}
            title={v.title}
            loading="lazy"
            scrolling="no"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute left-1/2 top-1/2 h-[145%] w-[145%] -translate-x-1/2 -translate-y-1/2 border-0"
          />
        </div>
      ) : (
        <a
          href={v.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-[350px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl"
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
      )}

      <div className="mt-4">
        {v.date && <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{v.date}</p>}
        <p className="mt-1 text-[17px] font-semibold leading-snug text-ink">{v.title}</p>
        {v.event && <p className="mt-1 text-sm font-semibold text-blue">{v.event}</p>}
        {v.desc && <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{linkifyDirectCredit(v.desc)}</p>}
      </div>
    </>
  );
}

export default function MediaSpeaking() {
  const [lang] = useLanguage();
  useHashScroll();
  const isEn = lang === "en";
  const mediaFbVideos = isEn ? facebookVideosEn : facebookVideos;
  const galleryVideos = [...mediaFbVideos, ...galleryExtraVideos];

  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Banner ───────────── */}
      <section className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/sir%20Website%20banner.jpg.jpeg"
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
            {isEn ? "Media & Speaking" : "Media & Speaking"}
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

      <span id="founders-note" className="-mt-24 block pt-24" />
      <span id="training-mentorship" className="-mt-24 block pt-24" />
      <span id="teachings-beliefs" className="-mt-24 block pt-24" />

      {/* ───────────── Speeches & Interviews ───────────── */}
      <section id="speeches-interviews" className="scroll-mt-24 border-y border-rule bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="View Speaking Topics" title="Speeches & Interviews" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {speakingVideos.map((v, i) => (
              <Reveal key={`${v.youtubeId}-${i}`} delay={i * 90}>
                <div className="h-[350px] w-full overflow-hidden rounded-2xl shadow-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                <p className="mt-3 text-[15px] font-semibold text-ink/80">{v.title}</p>
                {v.desc && <p className="mt-1 text-[14px] leading-relaxed text-ink/60">{linkifyDirectCredit(v.desc)}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Media Interviews & Video Features ───────────── */}
      <section id="media-interviews-video-features" className="scroll-mt-24 border-b border-rule bg-paper py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="Interviews" title="Media Interviews & Video Features" />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mediaVideos.map((v, i) => (
              <Reveal key={v.youtubeId} delay={i * 90}>
                <div className="h-[350px] w-full overflow-hidden rounded-2xl shadow-xl">
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
                  {v.date && <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{v.date}</p>}
                  <p className="mt-1 text-[17px] font-semibold leading-snug text-ink">{v.title}</p>
                  {v.event && <p className="mt-1 text-sm font-semibold text-blue">{v.event}</p>}
                  {v.desc && <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{linkifyDirectCredit(v.desc)}</p>}
                  {v.presenter && <p className="mt-3 border-t border-rule pt-3 text-[13px] text-ink/55">{v.presenter}</p>}
                </div>
              </Reveal>
            ))}

            {mediaFbVideos.slice(0, 2).map((v, i) => (
              <Reveal key={v.url} delay={i * 90}>
                <FacebookCard v={v} />
              </Reveal>
            ))}

            {mediaInterviewReels.map((v, i) => (
              <Reveal key={v.url} delay={i * 90}>
                <FacebookCard v={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── What Media Says ───────────── */}
      <section id="what-media-says" className="scroll-mt-24 border-y border-rule bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-[26px] font-extrabold leading-tight text-ink sm:text-[30px]">
                What Media Says
              </h2>
              <span className="mt-2 block h-0.5 w-14 bg-signal" />
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whatMediaSaysReels.map((v, i) => (
              <Reveal key={v.url} delay={i * 90} className={whatMediaSaysReels.length === 1 ? "sm:max-w-sm" : ""}>
                <FacebookCard v={v} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────── Newspaper/Magazine Features ───────────── */}
      <section id="newspaper-magazine-features" className="scroll-mt-24 border-b border-rule bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="Press" title="Newspaper/Magazine Features" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {newspaperFeatures.map((n) => (
              <a
                key={n.url}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-rule bg-paper p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-signal">{n.source}</span>
                <h3 className="text-[17px] font-bold leading-snug text-ink">{n.title}</h3>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold text-blue">
                  Read Article <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Photo/Video Gallery ───────────── */}
      <section id="photo-video-gallery" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="Gallery" title="Photo/Video Gallery" />

          <h3 className="mt-10 text-[18px] font-bold uppercase tracking-[0.08em] text-ink">Videos</h3>
          <div className="mt-6 grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryVideos.map((v, i) => (
              <Reveal key={v.url} delay={i * 90}>
                <FacebookCard v={v} />
              </Reveal>
            ))}
          </div>

          <h3 className="mt-14 text-[18px] font-bold uppercase tracking-[0.08em] text-ink">Photo Gallery</h3>

          {[
            {
              title: "DC Inauguration",
              photos: [
                { src: "/img/dc%20inauguration%201.JPG", alt: "DC Inauguration" },
                { src: "/img/DC%20Inauguration2.JPG", alt: "DC Inauguration" },
                { src: "/img/DC%20Inauguration3.JPG", alt: "DC Inauguration" },
                { src: "/img/Puja%20DC%20Inauguration.JPG", alt: "Puja DC Inauguration" },
              ],
            },
            {
              title: "Teams",
              photos: [
                { src: "/img/all%20team.JPG", alt: "Team" },
                { src: "/img/formal.JPG", alt: "Formal" },
                { src: "/img/team1.JPG", alt: "Team" },
                { src: "/img/Teams%202.png", alt: "Team" },
              ],
            },
            {
              title: "Utsav",
              photos: [
                { src: "/img/Utsav.jpeg", alt: "Utsav" },
                { src: "/img/Celebrations.jpg", alt: "Celebrations" },
                { src: "/img/birthday.JPG", alt: "Birthday" },
                { src: "/img/pooja.JPG", alt: "Pooja" },
                { src: "/img/Utsav%20_%20Krishna%20Janmashtami.JPG", alt: "Krishna Janmashtami" },
                { src: "/img/Utsav%20_%20Krishna%20Janmashtami%20(1).JPG", alt: "Krishna Janmashtami" },
              ],
            },
          ].map((group) => (
            <div key={group.title} className="mt-8">
              <h4 className="text-[14px] font-semibold uppercase tracking-[0.06em] text-ink/60">
                {group.title}
              </h4>
              {group.photos.length > 0 ? (
                <div className="mt-4 grid gap-8 md:grid-cols-2">
                  {group.photos.map((p, i) => (
                    <Reveal key={p.src} delay={i * 90}>
                      <div className="h-[420px] w-full overflow-hidden rounded-2xl shadow-xl">
                        <img
                          src={p.src}
                          alt={p.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-[14px] text-ink/50">Photos coming soon.</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <PageNavCta />

      <Footer />
    </div>
  );
}
