# Direct Credit — Founder site (React + Tailwind)

Yogendra Kumar Mishra ka founder page. React 18 + Vite + Tailwind CSS v3, lucide-react icons.

## Chalane ke liye

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ — normal build (assets alag files mein)
```

Ek self-contained single HTML file chahiye (email/WhatsApp par bhejne ke liye):

```bash
SINGLE=1 npm run build
```

## Structure

```
public/img/            banner, office photo, teen award photos
src/data/content.js    saara text — copy badalni ho to sirf yahi file
src/pages/Founder.jsx  page ke saare sections
src/components/        Navbar, Footer, Reveal, AwardsGallery, Faq
tailwind.config.js     brand tokens (colors + fonts)
```

## Design tokens

| Token | Value | Use |
|---|---|---|
| `ink` | `#0B1B3A` | headings, dark sections |
| `blue` | `#1034A6` | brand blue, CTAs |
| `blue-soft` | `#E7ECF9` | quote / hover fills |
| `signal` | `#E01B22` | accent only — ticks, eyebrows, numbers |
| `paper` | `#F6F7FB` | page background |
| `rule` | `#D8DEEC` | hairline grid |

Fonts (Google Fonts, `index.html` mein linked): **Anek Devanagari** (display), **Mukta** (body — Hindi + Latin dono), **IBM Plex Mono** (years, labels, buttons).

Signature element: `.ledger-rule` — har section ke heading ke upar hairline jiske start par chhota laal tick hai. Journey section usi grid par ek ledger ki tarah bana hai.

## Existing React app mein daalna ho to

Ye site abhi single page hai (anchor links `#story`, `#journey`…). Agar aapke app mein `react-router-dom` already hai:

1. `npm i lucide-react`
2. `src/pages/Founder.jsx`, `src/components/*`, `src/data/content.js` copy karein.
3. `tailwind.config.js` ke `theme.extend` aur `src/index.css` ke `@layer` blocks apne project mein merge karein.
4. `public/img/*` apne `public/` mein rakhein (paths `/img/...` hain).
5. Route jodein: `<Route path="/founder" element={<Founder />} />`, aur `Navbar`/`Footer` ko apne existing components se replace kar dein.

## Award details (magazine ke hisaab se)

Purane code mein teen awards ke titles aur photos aapas mein mismatch the. Yahan magazine (pages 24–25) ke hisaab se theek kiya gaya hai:

| Photo | Award | Event | Presented by |
|---|---|---|---|
| `award-gadkari.jpg` | Leader in Customized Lending Solutions | Viksit Bharat 2047 — Vision of New India Conclave | Shri Nitin Gadkari |
| `award-times.jpg` | Excellence in Tailored Financial Solutions | Times Power Icons 2024 — North | Malaika Arora |
| `award-manjhi.jpg` | Best Alternative Lending Platform | Bharat Ki Udaan | Shri Jitan Ram Manjhi |

## Check karne layak baatein

- `content.js` mein "10000+ families" aur "16+ years" claims content doc se aaye hain — publish se pehle verify kar lein.
- Contact section abhi `directcredit.in` aur phone par jaata hai; form chahiye to `#connect` mein jodein.
- Images `public/img/` mein compress ho chuki hain; original full-res files apne paas rakhein.
