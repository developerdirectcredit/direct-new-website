import { ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Vision & Philosophy", href: "/vision-philosophy" },
  { label: "Media & Speaking", href: "/media-speaking" },
  { label: "CSR & Social Impact", href: "/csr" },
  { label: "Achievements & Awards", href: "/recognition-honours" },
  { label: "About", href: "/about" },
];

/* Har page ke neeche same nav CTA strip — dusre sections tak le jaane ke liye. */
export default function PageNavCta() {
  return (
    <section id="connect" className="bg-blue py-16 text-white sm:py-20">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <div className="flex flex-wrap gap-4">
          {links.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className={
                i === 0
                  ? "btn bg-white text-blue hover:bg-ink hover:text-white"
                  : "btn border border-white/50 text-white hover:bg-white hover:text-blue"
              }
            >
              {c.label} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
