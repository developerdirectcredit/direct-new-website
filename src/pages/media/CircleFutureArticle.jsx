import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { circleFutureArticle as article } from "../../data/content";

const themeBadge = {
  violet: "bg-violet-100 text-violet-700",
};

export default function CircleFutureArticle() {
  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Hero ───────────── */}
      <section className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
          <Reveal>
            <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${themeBadge[article.theme]}`}>
              {article.badge}
            </span>
            <h1 className="mt-4 font-display text-[clamp(1.9rem,4.2vw,2.9rem)] font-extrabold leading-[1.3] text-ink">
              {article.title}
            </h1>
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-ink/45">
              {article.dateLabel}
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mx-auto max-w-4xl px-5 sm:px-8">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full rounded-3xl object-cover object-top shadow-xl"
            style={{ maxHeight: "480px" }}
          />
        </Reveal>
      </section>

      {/* ───────────── Body ───────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="space-y-6">
            {article.blocks.map((b, i) =>
              b.type === "quote" ? (
                <blockquote
                  key={i}
                  className="border-l-2 border-signal bg-blue-soft/60 p-6"
                >
                  <p className="font-display text-[19px] font-medium leading-relaxed text-ink">
                    {b.text}
                  </p>
                </blockquote>
              ) : (
                <p key={i} className="text-[17px] leading-[1.85] text-ink/85">
                  {b.text}
                </p>
              )
            )}
          </Reveal>

          <Reveal delay={100} className="mt-12 border-t border-rule pt-8">
            <a href="/media" className="btn-ghost">
              ← Back to Media
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
