/* ------------------------------------------------------------------
   Page-wise SEO - single source of truth.
   Used at runtime by <SEO /> (src/components/SEO.jsx) and at build time
   by the prerender plugin (vite-plugin-seo.js), so the raw HTML that
   crawlers / social bots fetch matches what the SPA sets in the browser.
------------------------------------------------------------------- */
import {
  workImpactPage,
  bestAlternativeLendingArticle,
  leaderCustomizedLendingArticle,
  timesPowerIconArticle,
  circleFutureArticle,
} from "../data/content";

export const SITE_URL = "https://yogendramishra.in";
export const SITE_NAME = "Yogendra Mishra";

export const absoluteUrl = (path = "/") =>
  /^https?:\/\//i.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

const HOME_CRUMB = { name: "Home", path: "/" };
const crumbs = (...items) => [HOME_CRUMB, ...items];

// Meta description ke liye text ko ~155 chars par word boundary pe kaatna.
const summarize = (text, max = 155) => {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, clean.lastIndexOf(" ", max - 1))}…`;
};

export const pageSeo = {
  home: {
    title: "Yogendra Mishra | Founder and MD, Direct Credit Group",
    description:
      "Meet Yogendra Mishra, Founder and MD. 16+ years advancing financial inclusion and MSME credit access across India. Discover his journey.",
    ogDescription:
      "Meet Yogendra Mishra, Founder and MD of Direct Credit Group. 16+ years advancing financial inclusion and MSME credit access across India.",
    path: "/",
    ogType: "profile",
    ogImage: "/images/og-home.jpg",
    breadcrumbs: crumbs(),
  },
  about: {
    title: "About Yogendra Mishra | Founder and MD, Direct Credit Group",
    description:
      "From early struggles to founding Direct Credit Group, explore Yogendra Mishra's 16+ year journey building financial inclusion for India's underserved borrowers.",
    ogDescription:
      "Learn about Yogendra Mishra's 16+ year journey from early struggles to founding Direct Credit Group.",
    path: "/about",
    ogType: "profile",
    ogImage: "/images/og-about.jpg",
    breadcrumbs: crumbs({ name: "About", path: "/about" }),
  },
  visionPhilosophy: {
    title: "Vision and Philosophy | Yogendra Mishra, Direct Credit Group",
    description:
      "Explore Yogendra Mishra's vision and philosophy behind Direct Credit Group — a belief in dignity-driven lending and financial inclusion for India's underserved.",
    ogDescription:
      "Explore Yogendra Mishra's vision and philosophy behind Direct Credit Group — dignity-driven lending and financial inclusion.",
    path: "/vision-philosophy",
    ogType: "website",
    ogImage: "/images/og-vision.jpg",
    breadcrumbs: crumbs({ name: "Vision and Philosophy", path: "/vision-philosophy" }),
  },
  mediaSpeaking: {
    title: "Media and Speaking | Yogendra Mishra, Direct Credit Group",
    description:
      "Talks, panels, interviews, and speaking engagements featuring Yogendra Mishra, Founder and MD of Direct Credit Group, on financial inclusion and MSME lending.",
    ogDescription:
      "Talks, panels, and interviews featuring Yogendra Mishra on financial inclusion and MSME lending.",
    path: "/media-speaking",
    ogType: "website",
    ogImage: "/images/og-media.jpg",
    breadcrumbs: crumbs({ name: "Media and Speaking", path: "/media-speaking" }),
  },
  csr: {
    title: "CSR | Direct Credit Group, Yogendra Mishra",
    description:
      "Direct Credit Group's CSR initiatives under Yogendra Mishra focus on financial literacy, MSME empowerment, and social upliftment for underserved communities in India.",
    ogDescription:
      "Direct Credit Group's CSR initiatives focus on financial literacy, MSME empowerment, and social upliftment.",
    path: "/csr",
    ogType: "website",
    ogImage: "/images/og-csr.jpg",
    breadcrumbs: crumbs({ name: "CSR", path: "/csr" }),
  },
  recognitionHonours: {
    title: "Recognition and Honours | Yogendra Mishra, Direct Credit",
    description:
      "Awards, honours, and recognitions earned by Yogendra Mishra, Founder and MD of Direct Credit Group, for his contribution to financial inclusion in India.",
    ogDescription:
      "Awards and recognitions earned by Yogendra Mishra for his contribution to financial inclusion in India.",
    path: "/recognition-honours",
    ogType: "website",
    ogImage: "/images/og-recognition.jpg",
    breadcrumbs: crumbs({ name: "Recognition and Honours", path: "/recognition-honours" }),
  },
  insights: {
    title: "Insights | Yogendra Mishra on Financial Inclusion and MSME Credit",
    description:
      "Articles and insights by Yogendra Mishra, Founder and MD of Direct Credit Group, on financial inclusion, MSME lending, and credit access trends in India.",
    ogDescription:
      "Articles and insights by Yogendra Mishra on financial inclusion, MSME lending, and credit access trends.",
    path: "/insights",
    ogType: "website",
    ogImage: "/images/og-insights.jpg",
    breadcrumbs: crumbs({ name: "Insights", path: "/insights" }),
  },
  contact: {
    title: "Contact Yogendra Mishra | Direct Credit Group",
    description:
      "Get in touch with Yogendra Mishra and the Direct Credit Group team for media inquiries, partnerships, or MSME financial inclusion collaborations.",
    ogDescription:
      "Connect with Yogendra Mishra and Direct Credit Group for media inquiries, partnerships, and MSME financial inclusion collaborations.",
    path: "/contact",
    ogType: "website",
    ogImage: "/images/og-contact.jpg",
    breadcrumbs: crumbs({ name: "Contact", path: "/contact" }),
  },

  // Pages outside the main nav - self-referencing canonical, taaki ye home ka
  // canonical inherit na karein. Copy content.js se hi aati hai.
  workImpact: {
    title: workImpactPage.seo.title,
    description: workImpactPage.seo.description,
    path: "/work-impact",
    ogType: "website",
    ogImage: "/images/og-home.jpg",
    breadcrumbs: crumbs({ name: "Work and Impact", path: "/work-impact" }),
  },
};

const MEDIA_CRUMB = { name: "Media and Speaking", path: "/media-speaking" };
const articleSeo = (article, path, text) => ({
  title: `${article.title} | ${SITE_NAME}`,
  description: summarize(text),
  path,
  ogType: "article",
  ogImage: article.image,
  breadcrumbs: crumbs(MEDIA_CRUMB, { name: article.title, path }),
});

pageSeo.bestAlternativeLendingAward = articleSeo(
  bestAlternativeLendingArticle,
  "/media/best-alternative-lending-award",
  bestAlternativeLendingArticle.intro
);
pageSeo.leaderCustomizedLendingSolutions = articleSeo(
  leaderCustomizedLendingArticle,
  "/media/leader-in-customized-lending-solutions",
  leaderCustomizedLendingArticle.intro
);
pageSeo.timesPowerIconAward = articleSeo(
  timesPowerIconArticle,
  "/media/times-power-icon-award",
  timesPowerIconArticle.intro
);
pageSeo.circleFutureArticle = articleSeo(
  circleFutureArticle,
  "/media/apka-circle-apka-future",
  circleFutureArticle.blocks.map((b) => b.text).join(" ")
);

// URL -> SEO entry, prerender ke liye. Alias URLs (App.jsx dekhein) same page
// render karte hain, isliye unka canonical preferred URL par point karta hai.
export const routeSeo = {
  ...Object.fromEntries(Object.values(pageSeo).map((seo) => [seo.path, seo])),
  "/media": pageSeo.mediaSpeaking,
  "/speaking": pageSeo.mediaSpeaking,
  "/achievements": pageSeo.recognitionHonours,
};

/* ---------- Normalised tag data (shared by runtime + prerender) ---------- */

export function buildSeoTags({
  title,
  description,
  path = "/",
  canonical,
  ogType = "website",
  ogTitle,
  ogDescription,
  ogImage,
  breadcrumbs = [],
}) {
  const url = absoluteUrl(canonical || path);
  const image = ogImage ? absoluteUrl(ogImage) : undefined;

  return {
    title,
    canonical: url,
    metaName: {
      description,
      "twitter:card": image ? "summary_large_image" : "summary",
    },
    metaProperty: {
      "og:type": ogType,
      "og:title": ogTitle || title,
      "og:description": ogDescription || description,
      "og:url": url,
      "og:image": image,
      "og:site_name": SITE_NAME,
    },
    breadcrumbJsonLd: breadcrumbs.length
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.path),
          })),
        }
      : null,
  };
}

// JSON ko <script> ke andar safely embed karne ke liye.
export const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");
