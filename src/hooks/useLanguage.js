import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "site-lang";
const EVENT_NAME = "site-lang-change";

function readLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "hi";
  } catch {
    return "hi";
  }
}

export default function useLanguage() {
  const [lang, setLang] = useState(readLang);

  useEffect(() => {
    const onChange = (e) => setLang(e.detail || readLang());
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  const setLanguage = useCallback((next) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    setLang(next);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: next }));
  }, []);

  return [lang, setLanguage];
}
