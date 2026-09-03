import { Calendar, MapPin, List } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { leaderCustomizedLendingArticle as article } from "../../data/content";

const themeBadge = {
  amber: "bg-amber-100 text-amber-700",
};

export default function LeaderCustomizedLendingSolutions() {
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
            <h1 className="mt-4 font-display text-[clamp(1.9rem,4.2vw,2.9rem)] font-extrabold leading-[1.2] text-ink">
              {article.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-ink/55">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {article.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="mx-auto max-w-4xl px-5 sm:px-8">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </Reveal>
      </section>

      {/* ───────────── Body ───────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* Table of contents */}
          <Reveal className="rounded-2xl border border-rule bg-paper p-5">
            <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-ink/70">
              <List className="h-4 w-4" />
              Table of Contents
            </p>
            <ul className="mt-3 space-y-1.5">
              {article.toc.map((t) => (
                <li key={t} className="text-[14.5px] text-blue">
                  <a href="#section-1" className="hover:underline">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={60} className="mt-10">
            <h2 id="section-1" className="scroll-mt-24 text-[22px] font-bold text-ink">
              {article.toc[0]}
            </h2>

            <div className="mt-5 space-y-5">
              <p className="text-[17px] leading-[1.85] text-ink/85">{article.intro}</p>
              {article.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.85] text-ink/85">
                  {p}
                </p>
              ))}
            </div>

            <blockquote className="relative mt-8 border-l-2 border-signal bg-blue-soft/60 p-6">
              <p className="font-display text-[19px] font-medium leading-relaxed text-ink">
                &ldquo;{article.quote}&rdquo;
              </p>
              <p className="mt-3 text-[14px] font-semibold text-blue">- {article.quoteBy}</p>
            </blockquote>

            <div className="mt-8 space-y-5">
              {article.closingParas.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.85] text-ink/85">
                  {p}
                </p>
              ))}
            </div>

            {article.relatedLabel && (
              <p className="mt-8 border-t border-rule pt-6 text-[14px] text-ink/55">
                <span className="font-semibold text-ink/70">Read More: </span>
                <a href="/media/times-power-icon-award" className="text-blue hover:underline">
                  {article.relatedLabel}
                </a>
              </p>
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
