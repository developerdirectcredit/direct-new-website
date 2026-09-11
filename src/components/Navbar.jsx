import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import useLanguage from "../hooks/useLanguage";

const visionDropdown = [
  { href: "/vision-philosophy#founder-notes", label: "Founder's Note" },
];

const aboutDropdown = [
  { href: "/about#my-journey", label: "Intro" },
  { href: "/about#family-journey", label: "Family & Personal Journey" },
  { href: "/about#education", label: "Education" },
  { href: "/about#team-leadership", label: "Team & Leadership" },
  { href: "/about#sports-lifestyle", label: "Sports & Lifestyle" },
  { href: "/about#favourite-things", label: "Favourite Things & Interests" },
];

const csrDropdown = [
  { href: "/csr#essential-goods-distribution", label: "Essential Goods Distribution" },
  { href: "/csr#supporting-families-in-difficult-times", label: "Supporting Families in Difficult Times" },
  { href: "/csr#entrepreneurship-livelihood-support", label: "Entrepreneurship & Livelihood Support" },
  { href: "/csr#smart-class-initiative", label: "Smart Class Initiative " },
  { href: "/csr#skill-development-empowerment", label: "Skill Development & Empowerment" },
  { href: "/csr#beneficiary-stories", label: "Beneficiary Stories" },
];

const mediaSpeakingDropdown = [
  { href: "/media-speaking#speeches-interviews", label: "Speeches & Interviews" },
  { href: "/media-speaking#media-interviews-video-features", label: "Media Interviews & Video Features" },
  { href: "/media-speaking#what-media-says", label: "What Media Says " },
  { href: "/media-speaking#newspaper-magazine-features", label: "Newspaper/Magazine Features" },
  { href: "/media-speaking#photo-video-gallery", label: "Photo/Video Gallery" },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/vision-philosophy", label: "Vision & Philosophy", children: visionDropdown },
  // { href: "/work-impact", label: "Work & Impact" },
  { href: "/media-speaking", label: "Media & Speaking", children: mediaSpeakingDropdown },
  { href: "/csr", label: "CSR & Social Impact", children: csrDropdown },
  { href: "/recognition-honours", label: "Recognition & Honours" },
  { href: "/about", label: "About", children: aboutDropdown },
  { href: "/contact", label: "Connect" },
];

function LanguageToggle({ className = "" }) {
  const [lang, setLanguage] = useLanguage();
  return (
    <div className={`inline-flex items-center rounded-full border border-white/20 p-0.5 font-mono text-[10px] uppercase tracking-[0.08em] ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-pressed={lang === "hi"}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "hi" ? "bg-signal text-ink" : "text-white/70 hover:text-white"
        }`}
      >
        हिं
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "en" ? "bg-signal text-ink" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink transition-colors duration-300 ${
        solid ? "border-b border-white/10 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/logo/Artboard%201.1.png"
            alt="Yogendra Mishra"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {links.map((l) =>
            l.children ? (
              <div key={l.href} className="group relative">
                <a
                  href={l.href}
                  className="flex items-center gap-1 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.06em] text-white transition hover:text-signal xl:text-[12px]"
                >
                  {l.label}
                  <ChevronDown className="h-3 w-3 transition group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-0 top-full z-50 w-80 rounded-xl border border-white/10 bg-ink py-2 opacity-0 shadow-2xl transition duration-150 group-hover:visible group-hover:opacity-100">
                  {l.children.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2.5 text-[12px] normal-case tracking-normal text-white/80 transition hover:bg-white/5 hover:text-signal"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.06em] text-white transition hover:text-signal xl:text-[12px]"
              >
                {l.label}
              </a>
            )
          )}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu band karein" : "Menu kholein"}
            aria-expanded={open}
            className="p-1.5 text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-ledger flex-col px-5 py-2 sm:px-8">
            {links.map((l) => (
              <div key={l.href} className="border-b border-white/10 last:border-0">
                <div className="flex items-center justify-between">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block flex-1 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white"
                  >
                    {l.label}
                  </a>
                  {l.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSection((prev) => (prev === l.href ? null : l.href))
                      }
                      aria-label={openSection === l.href ? "Collapse" : "Expand"}
                      aria-expanded={openSection === l.href}
                      className="p-3 text-white/70"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSection === l.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {l.children && openSection === l.href && (
                  <div className="flex flex-col pb-3 pl-4">
                    {l.children.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-[12px] normal-case text-white/70 transition hover:text-signal"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
