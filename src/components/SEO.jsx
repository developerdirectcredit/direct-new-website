import { useEffect } from "react";
import { buildSeoTags, serializeJsonLd } from "../seo/seoConfig";

const BREADCRUMB_SELECTOR = 'script[type="application/ld+json"][data-seo="breadcrumb"]';

// Existing tag ko update karo, na mile to ek banao - kabhi duplicate nahi.
function upsert(selector, create, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function setMeta(attr, key, content) {
  const selector = `meta[${attr}="${key}"]`;
  if (content == null || content === "") {
    document.head.querySelectorAll(selector).forEach((el) => el.remove());
    return;
  }
  upsert(selector, () => document.createElement("meta"), { [attr]: key, content });
}

/**
 * Page-level SEO. Renders nothing; syncs <head> with the given values.
 * Usage: <SEO {...pageSeo.about} />  (see src/seo/seoConfig.js)
 */
export default function SEO(props) {
  const tags = buildSeoTags(props);
  // Primitive key so the effect re-runs only when the actual output changes.
  const key = JSON.stringify(tags);

  useEffect(() => {
    const { title, canonical, metaName, metaProperty, breadcrumbJsonLd } = JSON.parse(key);

    document.title = title;
    Object.entries(metaName).forEach(([k, v]) => setMeta("name", k, v));
    Object.entries(metaProperty).forEach(([k, v]) => setMeta("property", k, v));

    document.head.querySelectorAll('link[rel="canonical"]').forEach((el, i) => i > 0 && el.remove());
    upsert('link[rel="canonical"]', () => document.createElement("link"), {
      rel: "canonical",
      href: canonical,
    });

    document.head.querySelectorAll(BREADCRUMB_SELECTOR).forEach((el) => el.remove());
    if (breadcrumbJsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "breadcrumb";
      script.textContent = serializeJsonLd(breadcrumbJsonLd);
      document.head.appendChild(script);
    }

    // Route change/unmount par purana breadcrumb JSON-LD hata do.
    return () => {
      document.head.querySelectorAll(BREADCRUMB_SELECTOR).forEach((el) => el.remove());
    };
  }, [key]);

  return null;
}
