/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#232323",        // warm charcoal — headings, dark sections
        blue: {
          DEFAULT: "#536B62", // muted sage — secondary brand accent
          soft: "#E7EDE8",
        },
        signal: "#E85B3F",    // warm terracotta — primary accent
        paper: "#F7F3ED",     // warm ivory page background
        rule: "#DCD5CB",      // warm hairline rules of the ledger grid
      },
      fontFamily: {
        display: ['"Anek Devanagari"', '"Noto Sans Devanagari"', "system-ui", "sans-serif"],
        body: ["Mukta", '"Noto Sans Devanagari"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { ledger: "72rem" },
    },
  },
  plugins: [],
};
