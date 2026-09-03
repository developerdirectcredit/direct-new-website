import { MapPin, Mail, Globe, Facebook, Instagram, Linkedin, Youtube, X as XIcon } from "lucide-react";
import { contact, companies, founder, socials } from "../data/content";
import PinterestIcon from "./PinterestIcon";

const socialIcons = { Facebook, Instagram, Linkedin, Youtube, X: XIcon, Pinterest: PinterestIcon };

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-ledger px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src="/logo/Artboard%201.1.png"
              alt="Yogendra Mishra - Direct Credit Group"
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed">
              MSME finance, real estate, electricals, digital growth और wellness - एक ही सोच के साथ:
              सही मौका हर मेहनती इंसान तक पहुँचे।
            </p>

            {/* Download App */}
            <div className="mt-8">
              <p className="eyebrow text-white/45">Download App</p>
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="/icons/app-qr.png"
                  alt="Direct Credit App - QR code"
                  className="h-24 w-24 shrink-0 rounded-lg bg-white p-1.5"
                />
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.directcredit.android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-80"
                  >
                    <img src="/icons/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10 w-auto" />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/direct-credit-loan/id6754832108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-80"
                  >
                    <img src="/icons/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10 w-auto" />
                  </a>
                </div>
              </div>
              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-white/50">
                Scan the QR code or download the Direct Credit App.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/45">Companies</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {companies.map((c) => (
                <li key={c.name}>
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/45">Office</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-signal" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-signal" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="mt-1 h-4 w-4 shrink-0 text-signal" />
                <a
                  href={`https://${contact.site}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {contact.site}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5 border-t border-white/15 pt-10">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-full text-white shadow-md transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/30"
                  style={{ background: s.brand }}
                >
                  <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" strokeWidth={1.75} />
                </span>
                <span className="text-[11px] font-bold text-white/70 transition group-hover:text-white">
                  {s.name}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 text-center">
          <span>
            © {new Date().getFullYear()} {founder.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
