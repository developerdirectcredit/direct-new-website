import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Handshake,
  User,
  Lock,
  Tag,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { founder, contact, connectPage } from "../data/content";
import useLanguage from "../hooks/useLanguage";

const featureIcons = { Send, ShieldCheck, Handshake, User };

export default function Contact() {
  const [lang] = useLanguage();
  const isEn = lang === "en";
  const features = isEn ? connectPage.featuresEn : connectPage.features;
  const reasons = isEn ? connectPage.reasonsEn : connectPage.reasons;
  const customSubjectPlaceholder = isEn ? "Type your subject" : "Apna subject likhein";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalSubject = subject === "other" ? customSubject : subject;
    const mailSubject = encodeURIComponent(finalSubject || `Website enquiry - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${mailSubject}&body=${body}`;
  };

  return (
    <div id="top">
      <Navbar />

      {/* ───────────── Hero (banner, same as home page) ───────────── */}
      <section className="pt-24 sm:pt-28">
        {/* Brand banner - same image at every screen size, no mobile switch. */}
        <div className="mx-auto max-w-[1600px] px-0 sm:px-5">
          <img
            src="/img/Connect%20with%20Yogendra%20Mishra.jpg"
            alt={`Connect with ${founder.name}`}
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
              <a href={`mailto:${contact.email}`} className="btn-solid">
                Email <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href="#form" className="btn-ghost">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Connect: features + quick-connect + form ───────────── */}
      <section id="form" className="border-b border-rule bg-white pb-20 pt-16 sm:pb-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <Reveal className="text-center">
            <h2 className="text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-tight text-ink">
              {connectPage.eyebrow}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
            {/* Left: feature cards + quick connect */}
            <div>
              <div className="grid gap-5 sm:grid-cols-2">
                {features.map((f, i) => {
                  const Icon = featureIcons[f.icon];
                  return (
                    <Reveal
                      key={f.title}
                      delay={i * 60}
                      className="rounded-2xl border border-rule bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div
                        className="mx-auto grid h-14 w-14 place-items-center rounded-full"
                        style={{ backgroundColor: "#F4EBD9" }}
                      >
                        <Icon className="h-6 w-6" style={{ color: "#0F5D5A" }} />
                      </div>
                      <p className="mt-4 text-[16px] font-bold text-ink">{f.title}</p>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/55">{f.desc}</p>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Right: form card */}
            <Reveal delay={100} className="rounded-3xl border border-rule bg-white p-6 shadow-xl sm:p-8">
              <div className="text-center">
                <h3 className="font-display text-[24px] font-extrabold text-ink">{connectPage.formLabels.heading}</h3>
                <span className="mx-auto mt-2 block h-0.5 w-14" style={{ backgroundColor: "#D8A94E" }} />
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[13.5px] font-semibold text-ink">
                      {connectPage.formLabels.name} <span style={{ color: "#D8A94E" }}>*</span>
                    </span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-rule px-3.5 py-3 focus-within:border-blue">
                      <User className="h-4 w-4 shrink-0 text-ink/35" />
                      <input
                        type="text"
                        required
                        placeholder={connectPage.formLabels.namePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-[14.5px] text-ink outline-none placeholder:text-ink/35"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-[13.5px] font-semibold text-ink">
                      {connectPage.formLabels.email} <span style={{ color: "#D8A94E" }}>*</span>
                    </span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-rule px-3.5 py-3 focus-within:border-blue">
                      <Mail className="h-4 w-4 shrink-0 text-ink/35" />
                      <input
                        type="email"
                        required
                        placeholder={connectPage.formLabels.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-[14.5px] text-ink outline-none placeholder:text-ink/35"
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="text-[13.5px] font-semibold text-ink">{connectPage.formLabels.subject}</span>
                  <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-rule px-3.5 py-3 focus-within:border-blue">
                    <Tag className="h-4 w-4 shrink-0 text-ink/35" />
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-transparent text-[14.5px] text-ink outline-none"
                    >
                      <option value="" disabled>
                        {connectPage.formLabels.subjectPlaceholder}
                      </option>
                      {reasons.map((r) => (
                        <option key={r.key} value={r.title}>
                          {r.title} - {r.desc}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {subject === "other" && (
                    <input
                      type="text"
                      required
                      placeholder={customSubjectPlaceholder}
                      value={customSubject}
                      onChange={(e) => setCustomSubject(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-rule px-3.5 py-3 text-[14.5px] text-ink outline-none placeholder:text-ink/35 focus:border-blue"
                    />
                  )}
                </label>

                <label className="block">
                  <span className="text-[13.5px] font-semibold text-ink">
                    {connectPage.formLabels.message} <span style={{ color: "#D8A94E" }}>*</span>
                  </span>
                  <textarea
                    required
                    rows={5}
                    placeholder={connectPage.formLabels.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-rule px-3.5 py-3 text-[14.5px] text-ink outline-none placeholder:text-ink/35 focus:border-blue"
                  />
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[15px] font-semibold text-white transition hover:brightness-105"
                  style={{ background: "linear-gradient(90deg, #0F5D5A, #D8A94E)" }}
                >
                  <Send className="h-4 w-4" />
                  {connectPage.formLabels.submit}
                </button>

                <p className="flex items-start justify-center gap-1.5 text-center text-[12.5px] text-ink/45">
                  <Lock className="mt-0.5 h-3 w-3 shrink-0" />
                  {connectPage.formLabels.privacy}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── Reach out ───────────── */}
      <section className="border-y border-rule bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-ledger px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal className="space-y-6">
              <div>
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-[20px] font-semibold text-ink hover:text-blue"
                >
                  <Mail className="h-5 w-5 shrink-0 text-signal" />
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="eyebrow">Office</p>
                <p className="mt-2 flex items-start gap-2 text-[17px] leading-relaxed text-ink/80">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-signal" />
                  {contact.address}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
              <img
                src="/img/founder-desk.jpg"
                alt="Yogendra Kumar Mishra, Direct Credit ke Noida office mein"
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
