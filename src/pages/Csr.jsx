import { useState } from "react";
import { Play, ExternalLink, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageNavCta from "../components/PageNavCta";
import { founder, csrPage, csrPageEn } from "../data/content";
import useLanguage from "../hooks/useLanguage";
import useHashScroll from "../hooks/useHashScroll";
import linkifyDirectCredit from "../utils/linkify";

export default function Csr() {
  const [lang] = useLanguage();
  useHashScroll();
  const page = lang === "en" ? csrPageEn : csrPage;
  const [expanded, setExpanded] = useState({});

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

      <Reveal delay={80} className="mx-auto max-w-3xl px-5 py-5 text-center sm:px-8 sm:py-7">
        <h1 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
          {page.h1}
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-ink/70">{page.sub}</p>
      </Reveal>

      {/* ───────────── Sections ───────────── */}
      <div className="mx-auto max-w-ledger px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="space-y-14">
          {page.sections.map((s, i) => {
            const videoCard = (v) => {
              const isFacebook = v.url && v.url.includes("facebook.com");
              const isYouTube = v.url && (v.url.includes("youtube.com") || v.url.includes("youtu.be"));
              const isInstagram = v.url && v.url.includes("instagram.com");

              if (isInstagram) {
                const idMatch = v.url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
                const igId = idMatch ? idMatch[1] : "";
                return (
                  <div
                    key={v.url}
                    className="mx-auto w-full max-w-[338px] overflow-hidden rounded-2xl shadow-xl"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    <iframe
                      src={`https://www.instagram.com/reel/${igId}/embed`}
                      title={v.title}
                      loading="lazy"
                      scrolling="no"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      className="h-full w-full border-0"
                    />
                  </div>
                );
              }

              if (isFacebook) {
                const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                  v.url
                )}&show_text=false&width=400&height=711`;
                return (
                  <div
                    key={v.url}
                    className="mx-auto w-full max-w-[338px] overflow-hidden rounded-2xl shadow-xl"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    <iframe
                      src={embedSrc}
                      title={v.title}
                      loading="lazy"
                      scrolling="no"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      className="h-full w-full border-0"
                    />
                  </div>
                );
              }

              if (isYouTube) {
                const idMatch = v.url.match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
                const videoId = idMatch ? idMatch[1] : "";
                return (
                  <div
                    key={v.url}
                    className="mx-auto w-full max-w-[338px] overflow-hidden rounded-2xl shadow-xl"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                );
              }

              const inner = (
                <>
                  {v.thumbnail && (
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                  {v.thumbnail && v.url && <span className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/35" />}
                  {v.url && (
                    <>
                      <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/15 transition group-hover:scale-105">
                        <Play className="h-7 w-7 translate-x-0.5 text-white" fill="currentColor" />
                      </span>
                      <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-[#0866FF]">
                        Watch <ExternalLink className="h-3 w-3" />
                      </span>
                    </>
                  )}
                </>
              );

              if (!v.url) {
                return (
                  <div
                    key={v.thumbnail || v.title}
                    className="relative mx-auto flex w-full max-w-[338px] items-center justify-center overflow-hidden rounded-2xl bg-[#0866FF] shadow-xl"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    {inner}
                  </div>
                );
              }

              return (
                <a
                  key={v.url}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mx-auto flex w-full max-w-[338px] items-center justify-center overflow-hidden rounded-2xl bg-[#0866FF] shadow-xl"
                  style={{ aspectRatio: "9 / 16" }}
                >
                  {inner}
                </a>
              );
            };

            const renderParas = (paras) => (
              <div className="mt-6 space-y-4">
                {paras.map((p, j) => {
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
            );

            if (s.stories && s.stories.length > 0) {
              return (
                <Reveal
                  key={s.id}
                  id={s.id}
                  delay={i * 60}
                  className="scroll-mt-24 border-t border-rule pt-10 first:border-0 first:pt-0"
                >
                  <SectionHead eyebrow="CSR & Social Impact" title={s.heading} />
                  <div
                    className={`mt-6 grid items-stretch gap-10 ${
                      s.stories.length === 1
                        ? "max-w-3xl"
                        : s.stories.length === 2
                        ? "lg:grid-cols-2"
                        : "lg:grid-cols-3"
                    }`}
                  >
                    {s.stories.map((story, k) => {
                      const storyKey = `${s.id}-${k}`;
                      const canCollapse = story.previewCount && story.paras.length > story.previewCount;
                      const isOpen = !!expanded[storyKey];
                      const visibleParas = canCollapse && !isOpen ? story.paras.slice(0, story.previewCount) : story.paras;
                      return (
                        <div key={k} className="flex h-full flex-col">
                          {videoCard(story.video)}
                          <div className="flex-1">{renderParas(visibleParas)}</div>
                          {canCollapse && (
                            <button
                              type="button"
                              onClick={() => setExpanded((prev) => ({ ...prev, [storyKey]: !prev[storyKey] }))}
                              className="mt-3 inline-flex w-fit items-center gap-1 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-signal transition hover:text-ink"
                            >
                              {isOpen ? "Read less" : "Read more"}
                              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              );
            }

            const text = (
              <>
                <SectionHead eyebrow="CSR & Social Impact" title={s.heading} />

                {s.videos && s.videos.length > 0 && (
                  <div className={`mt-6 grid gap-4 ${s.videos.length > 1 ? "sm:grid-cols-2" : ""}`}>
                    {s.videos.map((v) => videoCard(v))}
                  </div>
                )}

                {renderParas(s.paras)}
              </>
            );

            if (s.video && s.videoPosition === "right") {
              return (
                <Reveal
                  key={s.id}
                  id={s.id}
                  delay={i * 60}
                  className="scroll-mt-24 grid items-start gap-10 border-t border-rule pt-10 first:border-0 first:pt-0 lg:grid-cols-2"
                >
                  <div>{text}</div>
                  <div className="lg:sticky lg:top-28">{videoCard(s.video)}</div>
                </Reveal>
              );
            }

            return (
              <Reveal
                key={s.id}
                id={s.id}
                delay={i * 60}
                className="scroll-mt-24 max-w-3xl border-t border-rule pt-10 first:border-0 first:pt-0"
              >
                {text}
              </Reveal>
            );
          })}
        </div>
      </div>

      <PageNavCta />

      <Footer />
    </div>
  );
}
