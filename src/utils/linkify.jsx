/* "Direct Credit" ka har plain-text mention ko https://directcredit.in/ se link kar deta hai. */
export default function linkifyDirectCredit(text) {
  if (typeof text !== "string") return text;
  const parts = text.split(/(Direct Credit)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part === "Direct Credit" ? (
      <a
        key={i}
        href="https://directcredit.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-1 underline-offset-2 hover:text-signal"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}
