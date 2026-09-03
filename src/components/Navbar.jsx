import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/vision-philosophy", label: "Vision & Philosophy" },
  { href: "/insights", label: "Insights" },
  // { href: "/work-impact", label: "Work & Impact" },
  { href: "/media", label: "Media" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.06em] text-white transition hover:text-signal xl:text-[12px]"
            >
              {l.label}
            </a>
          ))}
          <a href="/contact" className="btn-solid !px-5 !py-2.5 shrink-0">
            Connect
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menu band karein" : "Menu kholein"}
          aria-expanded={open}
          className="p-1.5 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-ledger flex-col px-5 py-2 sm:px-8">
            {[...links, { href: "#connect", label: "Connect" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
