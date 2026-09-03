import {
  ArrowUpRight,
  ArrowRight,
  HandCoins,
  Building2,
  Leaf,
  ChevronRight,
  ArrowDown,
  Cpu,
  Star,
  Quote,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import AwardsGallery from "../components/AwardsGallery";
import SeenAtStrip from "../components/SeenAtStrip";
import SectionHead from "../components/SectionHead";
import Faq from "../components/Faq";
import PageNavCta from "../components/PageNavCta";
import {
  founder,
  story,
  impact,
  turningPoint,
  journey,
  companies,
  voices,
  closingQuote,
} from "../data/content";

const companyIcons = { Building2, Leaf, HandCoins, Cpu };

export default function Founder() {
  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Hero ───────────── */}
      <section className="pt-16 sm:pt-20">
        {/* Brand banner - same image at every screen size, no mobile switch. */}
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/founder-banner.jpg"
            alt="Yogendra Mishra, Founder & MD, Direct Credit - हर मेहनती इंसान एक मौके का हकदार है"
            className="w-full object-cover"
          />
        </div>

        {/* Name plate - hero ke neeche ek ledger bar */}
        <div className="mx-auto mt-3 max-w-ledger px-5 sm:px-8">
          <div className="ledger-rule" />
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold leading-tight text-ink">
                {founder.name}
              </h1>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                {founder.role} · {founder.group}
              </p>
            </div>
            <div className="flex gap-3">
              <a href="/contact" className="btn-solid">
                Connect <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href="#journey" className="btn-ghost">
                Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── As seen at ───────────── */}
      <section className="bg-slate-900 py-5">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SeenAtStrip />
        </div>
      </section>

      {/* ───────────── Story ───────────── */}
      <section id="story" className="pb-10 pt-10 sm:pb-14 sm:pt-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead
            eyebrow="2009 · Pratapgarh → Noida"
            title="हर मेहनती इंसान को आगे बढ़ने का एक मौका मिलना चाहिए। "
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal className="space-y-6">
              {story.map((p, i) => (
                <p key={i} className="text-[18px] leading-[1.85] text-ink/90">
                  {p}
                </p>
              ))}

              <a
                href="/about#story"
                className="inline-flex items-center gap-2 font-semibold text-blue hover:text-signal"
              >
                मेरी पूरी कहानी पढ़िए <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
              <img
                src="/img/founder-desk.jpg"
                alt="Yogendra Kumar Mishra, Direct Credit ke Noida office mein"
                loading="lazy"
                className="hidden w-full object-cover md:block"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── Impact stats ───────────── */}
      <section className="py-10 sm:py-14" style={{ backgroundColor: "#2B7A76" }}>
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="grid gap-10 text-center sm:grid-cols-3">
            {impact.map((n, i) => (
              <Reveal key={n.unit} delay={i * 80} className="rounded-xl p-2 transition hover:-translate-y-1 hover:bg-white/10">
                <p className="text-[clamp(2.4rem,5vw,3.4rem)] font-extrabold leading-none text-white">
                  {n.stat}
                </p>
                <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.12em] text-white/85">
                  {n.unit}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70">{n.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Turning point ───────────── */}
      <section className="pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead
            eyebrow="Credit Finserve → Direct Credit"
            title={turningPoint.title}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="space-y-6">
              {turningPoint.paras.map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.85] text-ink/75">
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal delay={120} className="border-t-2 border-signal bg-white p-8">
              <p className="font-display text-[21px] font-medium leading-relaxed text-ink">
                “{turningPoint.quote}”
              </p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                - {founder.name}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── Journey ledger ───────────── */}
      <section id="journey" className="border-y border-rule bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead
            eyebrow="The ledger"
            title="My Journey"
            sub="हर entry एक कंपनी नहीं - एक सीख है।"
          />

          <div className="relative mt-16">
            {/* dashed spine */}
            <div className="absolute left-5 top-2 bottom-2 border-l-2 border-dashed border-signal/40 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-12 sm:space-y-4">
              {journey.map((j, i) => {
                const isRight = i % 2 === 0;
                return (
                  <Reveal
                    key={j.year}
                    delay={i * 70}
                    className={`relative flex sm:items-center ${
                      isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* node */}
                    <div
                      className={`absolute left-5 top-1 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border-4 border-white shadow ${
                        j.upcoming ? "bg-ink/30" : "bg-signal"
                      } sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2`}
                    />

                    <div className="w-full pl-14 sm:w-1/2 sm:pl-0">
                      <div className={`sm:max-w-md ${isRight ? "sm:ml-12 sm:text-left" : "sm:mr-12 sm:text-right sm:ml-auto"}`}>
                        <p
                          className={`flex items-center gap-2 font-display text-[2.1rem] font-extrabold italic leading-none ${
                            j.upcoming ? "text-ink/40" : "text-signal"
                          } ${isRight ? "sm:justify-start" : "sm:justify-end"}`}
                        >
                          <ArrowRight className="h-6 w-6 shrink-0 not-italic" />
                          {j.year}
                        </p>
                        {j.logo && (
                          <div className={`mt-2 flex flex-col gap-1.5 ${isRight ? "items-start" : "sm:items-end"}`}>
                            <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-full border border-rule bg-white shadow-sm">
                              <img src={j.logo} alt={`${j.label} logo`} className="h-full w-full object-contain" />
                            </div>
                            {j.url && (
                              <a
                                href={j.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.1em] text-signal hover:underline"
                              >
                                Visit website <ArrowUpRight className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        )}
                        <h3 className="mt-2 text-[18px] font-bold leading-snug text-blue">
                          {j.label}
                          {j.upcoming && (
                            <span className="ml-3 border border-rule px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                              Planned
                            </span>
                          )}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{j.text}</p>
                      </div>
                    </div>

                    <div className="hidden sm:block sm:w-1/2" />
                  </Reveal>
                );
              })}
            </div>

            {/* arrows on the spine, one per gap between years */}
            {journey.slice(0, -1).map((j, i) => (
              <div
                key={`arrow-${j.year}`}
                className="pointer-events-none absolute left-5 z-10 -translate-x-1/2 sm:left-1/2"
                style={{ top: `calc(${((i + 1) / journey.length) * 100}% - 0.6rem)` }}
              >
                <ArrowDown className="h-4 w-4 rounded-full bg-white text-signal" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Recognition ───────────── */}
      <section id="recognition" className="py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead
            eyebrow="Recognition"
            title="मंच पर मिला भरोसा"
            sub="Consistency, integrity और customers पर focus - इन्हीं का नतीजा। Photo par tap karke poori tasveer dekhein."
          />
          <AwardsGallery />
          <div className="mt-10 flex justify-center">
            <a href="/media" className="btn-ghost">
              पूरा मीडिया देखें <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── Companies ───────────── */}
      <section id="companies" className="border-y border-rule bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead
            eyebrow="Direct Credit Group"
            title="जो कंपनियाँ बनीं"
            sub="हर विचार को हकीकत में बदलने का सफ़र - ये सिर्फ business नहीं, समस्याओं के समाधान हैं।"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c, i) => {
              const Icon = companyIcons[c.icon] || HandCoins;
              return (
                <Reveal
                  key={c.name}
                  delay={i * 70}
                  className={`flex flex-col rounded-2xl border ${c.theme.border} bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between">
                    {c.logo ? (
                      <div className={`grid h-24 w-24 place-items-center rounded-xl border-2 ${c.theme.border} bg-white p-2.5 shadow-sm`}>
                        <img src={c.logo} alt={`${c.name} logo`} className="h-full w-full object-contain" />
                      </div>
                    ) : (
                      <div className={`grid h-24 w-24 place-items-center rounded-full ${c.theme.iconBg} text-white`}>
                        <Icon className="h-9 w-9" />
                      </div>
                    )}
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gray-200 text-gray-400 transition hover:border-gray-300 hover:text-gray-600"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-ink">{c.name}</h3>
                  <p className="text-xs text-ink/40">{c.legal}</p>
                  <span className={`mt-1.5 inline-block w-fit rounded-full ${c.theme.badgeBg} ${c.theme.badgeText} px-3 py-1 text-xs font-semibold`}>
                    {c.category}
                  </span>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{c.desc}</p>

                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-5 flex items-center justify-center gap-2 rounded-xl ${c.theme.buttonBg} ${c.theme.buttonText} py-3 text-sm font-semibold transition hover:brightness-95`}
                    >
                      Explore {c.name} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Voices ───────────── */}
      <section className="border-y border-rule bg-[#FCF6EF] py-14 sm:py-20">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-amber-600"> People's Voice</p>
            <div className="mt-2 h-0.5 w-10 bg-amber-500" />
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3rem)] font-extrabold leading-[1.15] text-ink">
              Stories That Inspire Me
              <br />
             
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {voices.map((v, i) => (
              <Reveal
                key={v.who}
                delay={i * 80}
                className="relative flex flex-col rounded-2xl border border-rule bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="h-8 w-8 text-amber-500" fill="currentColor" strokeWidth={0} />
                <p className="mt-4 flex-1 text-[17px] leading-relaxed text-ink">{v.quote}</p>

                <div className="mt-6 flex items-center gap-3 border-t border-rule pt-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-100 font-display text-[15px] font-bold text-amber-700">
                    {v.who.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold leading-snug text-ink">{v.who}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-amber-600">{v.where}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 text-amber-500" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 rotate-180 text-amber-200" fill="currentColor" strokeWidth={0} />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-rule" />
            <Quote className="h-6 w-6 text-amber-300" fill="currentColor" strokeWidth={0} />
            <div className="h-px flex-1 bg-rule" />
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section id="faq" className="py-10 sm:py-14">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <SectionHead eyebrow="FAQ" title="अक्सर पूछे जाने वाले सवाल" />
          <Faq />
        </div>
      </section>

      {/* ───────────── CEO's Message ───────────── */}
      <section className="relative overflow-hidden py-10 sm:py-14" style={{ backgroundColor: "#EDE1E6" }}>
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="grid items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
            <Reveal className="justify-self-center sm:pt-8 sm:justify-self-start">
              <div
                className="h-64 w-64 overflow-hidden rounded-full border-[6px] sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
                style={{ borderColor: "#0B1E33", backgroundColor: "#F2867D" }}
              >
                <img
                  src="/img/IMG_0510.JPG"
                  alt="Yogendra Kumar Mishra, CEO, Direct Credit"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="sm:pt-16">
              <div className="relative mb-4 h-14 w-20">
                <svg viewBox="0 0 90 70" className="absolute -left-2 top-0 h-16 w-24 text-ink/40">
                  <polygon points="0,0 90,20 20,70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg viewBox="0 0 60 60" className="absolute left-4 top-6 h-9 w-9 text-signal">
                  <polygon points="0,0 55,28 0,56" fill="currentColor" />
                </svg>
              </div>
              <h2 className="font-display text-[clamp(2.6rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.92] text-signal">
                CEO&rsquo;s
                <br />
                Message
              </h2>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-12 max-w-3xl">
            <p className="font-display text-[22px] font-bold italic text-ink">
              Dear Valued Clients and Partners,
            </p>
            <p className="mt-6 text-[17px] leading-[1.9] text-blue">
              At Direct Credit, our vision has always extended beyond lending - it is about{" "}
              <strong className="font-bold">
                empowering individuals, entrepreneurs, families and MSMEs
              </strong>{" "}
              (whose contribution to nation&rsquo;s GDP is ~30%) with the tools they need to{" "}
              <strong className="font-bold">grow, sustain,</strong> and{" "}
              <strong className="font-bold">thrive.</strong>
            </p>
            <p className="mt-6 text-[17px] leading-[1.9] text-blue">
              We understand that every household has a unique financial journey - from the need
              for timely funding to launching or scaling a business, and even accessing
              government-backed schemes and subsidies. That&rsquo;s why we, along with our group
              companies, have built a powerful ecosystem designed to cater to these diverse needs
              with <strong className="font-bold">clarity, speed,</strong> and{" "}
              <strong className="font-bold">integrity.</strong>
            </p>
          </Reveal>

          <div className="relative mt-16 h-16 w-24">
            <svg viewBox="0 0 90 70" className="absolute left-0 top-0 h-16 w-24 text-ink/40">
              <polygon points="90,0 0,20 70,70" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <svg viewBox="0 0 60 60" className="absolute left-6 top-6 h-9 w-9 text-signal">
              <polygon points="60,0 5,28 60,56" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* ───────────── Closing ───────────── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="font-display text-[clamp(1.4rem,3vw,2rem)] font-medium leading-[1.5] text-ink">
            “{closingQuote}”
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-signal" />
          <img
            src="/logo/Artboard%201.1.png"
            alt={`${founder.name} signature`}
            className="mx-auto mt-6 h-10 w-auto object-contain"
          />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
            Founder &amp; MD - Direct Credit · Direct Realtors · Elec Home · Digital Works · Trust Me
          </p>
        </div>
      </section>

      <PageNavCta />

      <Footer />
    </div>
  );
}
