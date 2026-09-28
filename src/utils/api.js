export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function getAdminToken() {
  return localStorage.getItem("dc_admin_token") || "";
}

export function setAdminToken(token) {
  if (token) localStorage.setItem("dc_admin_token", token);
  else localStorage.removeItem("dc_admin_token");
}

async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) headers.Authorization = `Bearer ${getAdminToken()}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

async function uploadPhoto(file) {
  const form = new FormData();
  form.append("photo", file);

  const res = await fetch(`${API_BASE}/api/media/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getAdminToken()}` },
    body: form,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Upload failed");
  return data;
}

export const api = {
  login: (username, password) => request("/api/auth/login", { method: "POST", body: { username, password } }),
  sections: () => request("/api/media/sections"),
  uploadPhoto,
  listPublic: (section, lang) => request(`/api/media?section=${encodeURIComponent(section)}${lang ? `&lang=${lang}` : ""}`),
  listAdmin: (section) => request(`/api/media/admin${section ? `?section=${encodeURIComponent(section)}` : ""}`, { auth: true }),
  create: (payload) => request("/api/media", { method: "POST", body: payload, auth: true }),
  update: (id, payload) => request(`/api/media/${id}`, { method: "PUT", body: payload, auth: true }),
  remove: (id) => request(`/api/media/${id}`, { method: "DELETE", auth: true }),
};
