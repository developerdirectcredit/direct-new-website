import Reveal from "./Reveal";

/* Section heading: eyebrow + ledger rule + title. Poore site ka ek hi pattern. */
export default function SectionHead({ eyebrow, title, sub, invert = false }) {
  return (
    <Reveal className="max-w-3xl">
      <p className={`eyebrow ${invert ? "text-white/55" : ""}`}>{eyebrow}</p>
      <div className={`ledger-rule mt-3 ${invert ? "bg-white/20" : ""}`} />
      <h2
        className={`mt-5 text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.15] ${
          invert ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-[17px] leading-relaxed ${invert ? "text-white/65" : "text-ink/65"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
