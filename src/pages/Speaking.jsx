import { ArrowUpRight, Play, ExternalLink, Users, Handshake, TrendingUp, Target, Quote } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageNavCta from "../components/PageNavCta";
import { founder, speakingVideos, speakingFacebookVideos, speakingFacebookVideosEn } from "../data/content";
import useLanguage from "../hooks/useLanguage";

const cardsHi = [
  {
    icon: Users,
    title: "Fear se dosti",
    text: "हर बड़ी उड़ान की शुरुआत डर को पहचानने और उसे accept करने से होती है।",
    dark: true,
  },
  {
    icon: Handshake,
    title: "Advisory se Ownership tak",
    text: "सलाह से आगे बढ़कर, जिम्मेदारी लेना ही बदलाव की असली शुरुआत है।",
    dark: false,
  },
  {
    icon: TrendingUp,
    title: "Financial Inclusion",
    text: "India में credit sabse zyada zaroorat walo tak pahuchna chahiye।",
    dark: true,
  },
  {
    icon: Target,
    title: "Galti chhupana hi asli failure hai",
    text: "पारदर्शिता और सही सोच से ही मजबूत रिश्ते और बेहतर फैसले बनते हैं।",
    dark: false,
  },
];

const cardsEn = [
  {
    icon: Users,
    title: "Making Friends with Fear",
    text: "Every big leap begins with recognising your fear and accepting it.",
    dark: true,
  },
  {
    icon: Handshake,
    title: "From Advisory to Ownership",
    text: "Moving beyond advice to taking ownership - that's where real change begins.",
    dark: false,
  },
  {
    icon: TrendingUp,
    title: "Financial Inclusion",
    text: "In India, credit should reach those who need it the most.",
    dark: true,
  },
  {
    icon: Target,
    title: "Hiding a Mistake Is the Real Failure",
    text: "Transparency and the right mindset are what build strong relationships and better decisions.",
    dark: false,
  },
];

export default function Speaking() {
  const [lang] = useLanguage();
  const isEn = lang === "en";
  const cards = isEn ? cardsEn : cardsHi;
  const facebookVideos = isEn ? speakingFacebookVideosEn : speakingFacebookVideos;

  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Hero (banner, same as home page) ───────────── */}
      <section className="pt-24 sm:pt-28">
        {/* Brand banner — same image at every screen size, no mobile switch. */}
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/Yogendra%20Mishra%20Speaking.jpeg"
            alt={`${founder.name} - speaking on stage`}
            className="w-full object-cover"
          />
        </div>

        <Reveal delay={80} className="mx-auto max-w-3xl px-5 py-5 text-center sm:px-8 sm:py-7">
          <h1 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.15] text-signal">
            Speaking
          </h1>
        </Reveal>

        {/* Name plate — hero ke neeche ek ledger bar */}
        <div className="mx-auto mt-3 max-w-ledger px-5 sm:px-8">
          <div className="ledger-rule" />
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold leading-tight text-ink">
                {founder.name}
              </h2>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                {founder.role} · {founder.group}
              </p>
            </div>
            <div className="flex gap-3">
              <a href="/contact" className="btn-solid">
                Connect <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href="#videos" className="btn-ghost">
                Videos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Intro ───────────── */}
      <section className="pb-10 pt-10 sm:pb-14 sm:pt-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <p
            className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold leading-snug"
            style={{ color: "#2B7A76" }}
          >
            Stay rooted with your own, yet rise higher
          </p>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink/50">
            - Yogendra Mishra
          </p>

          <Reveal className="mt-8 max-w-3xl">
            <h2 className="text-[22px] font-bold text-ink">
              Employment in the Village - A Thought Worth Having
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink/80">
              As children, parents hoped their son would become their support. Today, the need is
              for us to make sure the village becomes a support for that son.
            </p>
          </Reveal>

          <Reveal delay={60} className="mt-12 rounded-3xl bg-white p-8 shadow-xl sm:p-10">
            <h2 className="text-[22px] font-bold text-ink">
              {isEn ? "A New Lesson from Every Conversation" : "हर बातचीत से एक नई सीख"}
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-signal" />

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full"
                      style={
                        item.dark
                          ? { backgroundColor: "#0F5D5A", color: "#fff" }
                          : { backgroundColor: "#F3E3BE", color: "#9A6B1D" }
                      }
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-[16px] font-bold leading-snug text-ink">{item.title}</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink/60">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-2xl bg-paper p-6">
              <Quote className="h-6 w-6 shrink-0 text-ink/30" />
              <p className="text-[16px] leading-relaxed text-ink/80">
                Transparency is not just a value, it&rsquo;s the foundation of every lasting relationship.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Videos ───────────── */}
      <section id="videos" className="border-y border-rule bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="View Speaking Topics" title="Speaking engagements" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {speakingVideos.map((v, i) => (
              <Reveal key={`${v.youtubeId}-${i}`} delay={i * 90}>
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
                <p className="mt-3 text-[15px] font-semibold text-ink/80">{v.title}</p>
                {v.desc && (
                  <p className="mt-1 text-[14px] leading-relaxed text-ink/60">{v.desc}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Facebook Videos ───────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="Facebook" title="Facebook Videos" />

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
                  <p className="text-[17px] font-semibold leading-snug text-ink">{v.title}</p>
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
