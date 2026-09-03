import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Photo slider — dots + arrows. Auto-advance is opt-in via `autoPlay`. */
export default function PhotoSlider({ images, alt, badge, intervalMs = 3000, autoPlay = true }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, images.length, intervalMs, index]);

  const go = (dir) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div className="group relative h-full min-h-[320px] w-full overflow-hidden rounded-3xl bg-ink">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Pichhli photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-ink opacity-0 transition group-hover:opacity-100 hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Agli photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-ink opacity-0 transition group-hover:opacity-100 hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                aria-label={`Photo ${i + 1} dikhayein`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-signal" : "w-1.5 bg-white/60 hover:bg-white/85"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {badge && (
        <div className="absolute bottom-5 left-5 border border-rule bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
          <p className="font-display text-2xl font-extrabold text-signal">{badge.stat}</p>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60">
            {badge.label}
          </p>
        </div>
      )}
    </div>
  );
}
