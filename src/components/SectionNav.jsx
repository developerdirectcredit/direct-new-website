/* "On this page" jump links — SEO/UX helper. Target sections carry matching ids. */
export default function SectionNav({ items }) {
  return (
    <nav aria-label="On this page" className="section-nav mx-auto max-w-ledger px-5 pb-6 pt-2 sm:px-8">
      <p className="section-nav-title text-center font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/55">
        On this page
      </p>
      <ul className="mt-3 flex flex-wrap justify-center gap-2">
        {items.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="inline-block rounded-full border border-ink/20 px-4 py-1.5 text-[14px] text-ink transition hover:border-ink hover:bg-ink hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
