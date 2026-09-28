export function extractYoutubeId(url = "") {
  const shorts = url.match(/youtube\.com\/shorts\/([\w-]+)/);
  if (shorts) return shorts[1];
  const watch = url.match(/[?&]v=([\w-]+)/);
  if (watch) return watch[1];
  const short = url.match(/youtu\.be\/([\w-]+)/);
  if (short) return short[1];
  const embed = url.match(/youtube\.com\/embed\/([\w-]+)/);
  if (embed) return embed[1];
  return null;
}
