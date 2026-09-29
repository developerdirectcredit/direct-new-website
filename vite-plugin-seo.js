import fs from "node:fs";
import path from "node:path";
import { routeSeo, buildSeoTags, serializeJsonLd } from "./src/seo/seoConfig.js";

// index.html me <!-- seo:start --> ... <!-- seo:end --> ke beech ka block
// har route ke liye uske apne tags se replace hota hai.
const BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function renderHead(seo) {
  const t = buildSeoTags(seo);
  const lines = [
    `<title>${esc(t.title)}</title>`,
    ...Object.entries(t.metaName).map(([k, v]) => v && `<meta name="${k}" content="${esc(v)}" />`),
    `<link rel="canonical" href="${esc(t.canonical)}" />`,
    ...Object.entries(t.metaProperty).map(([k, v]) => v && `<meta property="${k}" content="${esc(v)}" />`),
    t.breadcrumbJsonLd &&
      `<script type="application/ld+json" data-seo="breadcrumb">${serializeJsonLd(t.breadcrumbJsonLd)}</script>`,
  ].filter(Boolean);
  return `<!-- seo:start -->\n    ${lines.join("\n    ")}\n    <!-- seo:end -->`;
}

const normalize = (url = "/") => url.split(/[?#]/)[0].replace(/\/+$/, "") || "/";

export default function seoPlugin() {
  let outDir;
  return {
    name: "page-seo",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    // Dev: request URL ke hisaab se tags; build: index.html = home page.
    transformIndexHtml(html, ctx) {
      // Markers hat gaye to har route par sirf home ke tags jaate - chupchaap
      // galat build ship karne se better hai yahin fail karna.
      if (!BLOCK.test(html)) {
        throw new Error(
          "[page-seo] index.html me <!-- seo:start --> ... <!-- seo:end --> markers nahi mile. " +
            "Page-wise SEO prerender ke liye inhe wapas add karein."
        );
      }
      const seo = routeSeo[normalize(ctx.originalUrl)] || routeSeo["/"];
      return html.replace(BLOCK, renderHead(seo));
    },
    // Build ke baad har route ke liye dist/<route>/index.html likho, taaki
    // bina JS chalaye bhi crawlers/social bots ko sahi head mile.
    closeBundle() {
      const indexFile = path.join(outDir, "index.html");
      if (!fs.existsSync(indexFile)) return;
      const html = fs.readFileSync(indexFile, "utf8");
      if (!BLOCK.test(html)) {
        this.error("seo markers not found in dist/index.html - page-wise prerender failed");
      }
      // /about -> about.html (bina redirect ke, canonical se match) aur
      // /about/ -> about/index.html, dono likhte hain.
      for (const [route, seo] of Object.entries(routeSeo)) {
        if (route === "/") continue;
        const page = html.replace(BLOCK, renderHead(seo));
        for (const file of [path.join(outDir, `${route}.html`), path.join(outDir, route, "index.html")]) {
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, page);
        }
      }
    },
  };
}
