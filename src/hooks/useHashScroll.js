import { useEffect } from "react";

/* Full-page nav ("/page#section") pe browser hash-scroll render se pehle try karta hai,
   isliye element mount hone ke baad khud scroll karte hain (kuch retries ke saath —
   images/late layout shift ki wajah se position badal sakta hai). */
export default function useHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: "start" });
    };

    scrollToEl();
    const t1 = setTimeout(scrollToEl, 100);
    const t2 = setTimeout(scrollToEl, 400);
    window.addEventListener("load", scrollToEl);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", scrollToEl);
    };
  }, []);
}
