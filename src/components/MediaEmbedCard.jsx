import { Play, ExternalLink } from "lucide-react";
import { extractYoutubeId } from "../utils/mediaEmbed";
import linkifyDirectCredit from "../utils/linkify";

// Renders one admin-added YouTube/Facebook/Instagram/link item with its heading line,
// matching the look of the existing hand-written media cards on the site.
export default function MediaEmbedCard({ item }) {
  const { url, title, description, date, event, platform } = item;

  let media = null;

  if (platform === "youtube") {
    const youtubeId = extractYoutubeId(url);
    media = (
      <div className="h-[350px] w-full overflow-hidden rounded-2xl shadow-xl">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  } else if (platform === "facebook") {
    media = (
      <div className="relative h-[350px] w-full overflow-hidden rounded-2xl bg-ink shadow-xl">
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=350&height=350`}
          title={title}
          loading="lazy"
          scrolling="no"
          allow="autoplay; encrypted-media; picture-in-picture"
          className="absolute left-1/2 top-1/2 h-[145%] w-[145%] -translate-x-1/2 -translate-y-1/2 border-0"
        />
      </div>
    );
  } else if (platform === "photo") {
    media = (
      <div className="h-[350px] w-full overflow-hidden rounded-2xl shadow-xl">
        <img src={url} alt={title} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  } else if (platform === "instagram") {
    const idMatch = url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
    const igId = idMatch ? idMatch[1] : "";
    media = (
      <div className="mx-auto h-[420px] w-full max-w-[338px] overflow-hidden rounded-2xl shadow-xl">
        <iframe
          src={`https://www.instagram.com/reel/${igId}/embed`}
          title={title}
          loading="lazy"
          scrolling="no"
          allow="autoplay; encrypted-media; picture-in-picture"
          className="h-full w-full border-0"
        />
      </div>
    );
  } else {
    media = (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-[350px] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-ink shadow-xl"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 transition group-hover:scale-105">
          <Play className="h-7 w-7 translate-x-0.5 text-white" fill="currentColor" />
        </span>
        <span className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wide text-white">
          Open Link <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </a>
    );
  }

  return (
    <div>
      {media}
      <div className="mt-4">
        {date && <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{date}</p>}
        <p className="mt-1 text-[17px] font-semibold leading-snug text-ink">{title}</p>
        {event && <p className="mt-1 text-sm font-semibold text-blue">{event}</p>}
        {description && <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{linkifyDirectCredit(description)}</p>}
      </div>
    </div>
  );
}
