import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { seenAt } from "../data/content";

export default function SeenAtStrip() {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setIndex(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <p className="mb-3 text-center text-xs font-bold tracking-widest text-white/50">
        AS SEEN AT
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {seenAt.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${s.label} ko badi photo mein dekhein`}
            className="flex h-14 w-32 items-center justify-center"
          >
            <img
              src={s.image}
              alt={s.label}
              title={s.label}
              className="max-h-14 max-w-full object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://placehold.co/160x60/f4f4f4/1a1a1a?text=${encodeURIComponent(
                  s.label
                )}`;
              }}
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={seenAt[index].label}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/96 p-4 backdrop-blur-sm"
          onClick={() => setIndex(null)}
        >
          <button
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 p-2 text-white/80 hover:text-white"
            aria-label="Band karein"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={seenAt[index].image}
            alt={seenAt[index].label}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[70vh] max-w-[85vw] bg-white object-contain p-6"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://placehold.co/480x240/f4f4f4/1a1a1a?text=${encodeURIComponent(
                seenAt[index].label
              )}`;
            }}
          />
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
            {seenAt[index].label}
          </p>
        </div>
      )}
    </>
  );
}
