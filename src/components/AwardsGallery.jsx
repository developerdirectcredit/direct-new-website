import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { awards as awardsHi } from "../data/content";
import Reveal from "./Reveal";

export default function AwardsGallery({ awards = awardsHi }) {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % awards.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + awards.length) % awards.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {awards.map((a, i) => (
          <Reveal as="article" key={a.title} delay={i * 90} className="card group flex flex-col">
            <button
              onClick={() => setIndex(i)}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-ink"
              aria-label={`${a.title} ki photo badi karke dekhein`}
            >
              <img
                src={a.image}
                alt={`${a.title} - ${a.event}`}
                loading="lazy"
                className="h-full w-full object-cover object-top opacity-95 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
              />
              <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center bg-white/90 text-ink opacity-0 transition group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
              </span>
            </button>

            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{a.date}</p>
              <h3 className="mt-2 text-[22px] font-semibold leading-tight">{a.title}</h3>
              <p className="mt-1.5 text-sm font-semibold text-blue">{a.event}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{a.desc}</p>
              <p className="mt-4 border-t border-rule pt-3 text-[13px] text-ink/55">{a.presenter}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={awards[index].title}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/96 p-4 backdrop-blur-sm"
          onClick={() => setIndex(null)}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setIndex(null)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Band karein"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIndex((i) => (i - 1 + awards.length) % awards.length)}
              className="p-2 text-white/70 hover:text-white"
              aria-label="Pichhli photo"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <img
              src={awards[index].image}
              alt={awards[index].title}
              className="max-h-[75vh] max-w-[85vw] object-contain"
            />
            <button
              onClick={() => setIndex((i) => (i + 1) % awards.length)}
              className="p-2 text-white/70 hover:text-white"
              aria-label="Agli photo"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>

          <p className="pb-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
            {awards[index].title} · {awards[index].event}
          </p>
        </div>
      )}
    </>
  );
}
