import { useEffect, useState } from "react";
import { api } from "../utils/api";

// Fetches admin-added YouTube/Facebook items for a section.
// Returns [] silently on failure so the static content on the page still renders.
export default function useMediaItems(section, lang) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let alive = true;
    api
      .listPublic(section, lang)
      .then((data) => alive && setItems(Array.isArray(data) ? data : []))
      .catch(() => alive && setItems([]));
    return () => {
      alive = false;
    };
  }, [section, lang]);

  return items;
}
