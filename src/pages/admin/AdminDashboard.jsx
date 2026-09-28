import { useEffect, useState } from "react";
import { api, getAdminToken, setAdminToken } from "../../utils/api";

const emptyForm = { section: "", url: "", title: "", group: "", description: "", date: "", event: "", lang: "hi" };
const KNOWN_PHOTO_GROUPS = ["DC Inauguration", "Teams", "Utsav"];

export default function AdminDashboard() {
  const [authorized, setAuthorized] = useState(false);
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState("");
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!getAdminToken()) {
      window.location.href = "/admin/login";
      return;
    }
    api
      .listAdmin()
      .then((data) => {
        setItems(data);
        setAuthorized(true);
      })
      .catch(() => {
        setAdminToken(null);
        window.location.href = "/admin/login";
      });
    api.sections().then(setSections).catch(() => {});
  }, []);

  useEffect(() => {
    if (!authorized) return;
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  function loadItems() {
    api
      .listAdmin(section)
      .then(setItems)
      .catch((err) => {
        if (err.message === "Invalid or expired session" || err.message === "Login required") {
          setAdminToken(null);
          window.location.href = "/admin/login";
        }
      });
  }

  function logout() {
    setAdminToken(null);
    window.location.href = "/admin/login";
  }

  function startEdit(item) {
    setEditingId(item._id);
    setForm({
      section: item.section,
      url: item.url,
      title: item.title,
      group: item.group || "",
      description: item.description || "",
      date: item.date || "",
      event: item.event || "",
      lang: item.lang || "hi",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleDelete(id) {
    if (!confirm("Delete this item?")) return;
    await api.remove(id);
    loadItems();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.section || !form.url || !form.title) {
      setError("Section, URL and Heading are required");
      return;
    }
    setLoading(true);
    try {
      if (editingId) {
        await api.update(editingId, form);
      } else {
        await api.create(form);
      }
      setForm(emptyForm);
      setEditingId(null);
      loadItems();
    } catch (err) {
      setError(err.message || "Failed to save");
    } finally {
      setLoading(false);
    }
  }

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-paper px-5 py-10 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-[24px] font-bold text-ink">Media & CSR Admin</h1>
          <button onClick={logout} className="btn-ghost">
            Logout
          </button>
        </div>

        {/* ───────────── Add / Edit form ───────────── */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-rule bg-white p-6 shadow-sm sm:grid-cols-2"
        >
          <h2 className="col-span-full text-[16px] font-bold text-ink">
            {editingId ? "Edit item" : "Add YouTube / Facebook URL"}
          </h2>

          <div>
            <label className="block text-[13px] font-semibold text-ink/70">Section</label>
            <select
              value={form.section}
              onChange={(e) => setForm({ ...form, section: e.target.value })}
              className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
              required
            >
              <option value="">Select section...</option>
              {sections.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-ink/70">Language</label>
            <select
              value={form.lang}
              onChange={(e) => setForm({ ...form, lang: e.target.value })}
              className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
            >
              <option value="hi">Hindi (default site)</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[13px] font-semibold text-ink/70">YouTube / Facebook / Instagram URL</label>
            <input
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://www.youtube.com/watch?v=... or https://www.facebook.com/reel/..."
              className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
              required
            />
            <p className="mt-1 text-[12px] text-ink/50">
              Photo chahiye? Neeche se ek image file upload karein — uska URL yahan apne aap bhar jaayega.
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setUploading(true);
                setError("");
                try {
                  const { url } = await api.uploadPhoto(file);
                  setForm((f) => ({ ...f, url }));
                } catch (err) {
                  setError(err.message || "Upload failed");
                } finally {
                  setUploading(false);
                  e.target.value = "";
                }
              }}
              className="mt-2 block w-full text-[13px]"
            />
            {uploading && <p className="mt-1 text-[12px] text-signal">Uploading photo...</p>}
            {form.url && /\.(jpe?g|png|webp|gif|avif)(\?|$)/i.test(form.url) && (
              <img src={form.url} alt="Preview" className="mt-2 h-28 w-28 rounded-lg object-cover" />
            )}
          </div>

          {form.section === "photo-video-gallery" && (
            <div className="sm:col-span-2">
              <label className="block text-[13px] font-semibold text-ink/70">
                Photo Group / Album heading (e.g. DC Inauguration, Teams, Utsav)
              </label>
              <input
                value={form.group}
                onChange={(e) => setForm({ ...form, group: e.target.value })}
                list="photo-group-options"
                placeholder="Choose an existing group or type a new one"
                className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
              />
              <datalist id="photo-group-options">
                {KNOWN_PHOTO_GROUPS.map((g) => (
                  <option key={g} value={g} />
                ))}
              </datalist>
              <p className="mt-1 text-[12px] text-ink/50">
                Photo isi naam wale group ke neeche dikhegi. Khaali chhodne par "More Photos" me aayegi. Naya naam
                type karke bhi naya group bana sakte hain.
              </p>
            </div>
          )}

          <div className="sm:col-span-2">
            <label className="block text-[13px] font-semibold text-ink/70">Heading / Title line</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[13px] font-semibold text-ink/70">Description (optional)</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={2}
              className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-ink/70">Date (optional)</label>
            <input
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              placeholder="e.g. Apr 2025"
              className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-ink/70">
              Event / Source (optional)
            </label>
            <input
              value={form.event}
              onChange={(e) => setForm({ ...form, event: e.target.value })}
              placeholder="e.g. The Tribune"
              className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[14px] outline-none focus:border-signal"
            />
          </div>

          {error && <p className="col-span-full text-[13px] font-semibold text-red-600">{error}</p>}

          <div className="col-span-full flex gap-3">
            <button type="submit" disabled={loading} className="btn-solid disabled:opacity-60">
              {loading ? "Saving..." : editingId ? "Update Item" : "Add Item"}
            </button>
            {editingId && (
              <button type="button" onClick={cancelEdit} className="btn-ghost">
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* ───────────── Filter + list ───────────── */}
        <div className="mt-10 flex items-center justify-between gap-3">
          <h2 className="text-[16px] font-bold text-ink">All Items</h2>
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="rounded-lg border border-rule bg-white px-3 py-2 text-[13px] outline-none focus:border-signal"
          >
            <option value="">All sections</option>
            {sections.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 space-y-3">
          {items.length === 0 && <p className="text-[14px] text-ink/50">No items yet.</p>}
          {items.map((item) => (
            <div
              key={item._id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-rule bg-white p-4 shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wide text-signal">
                  {item.platform} · {sections.find((s) => s.id === item.section)?.label || item.section} · {item.lang}
                  {item.group ? ` · Group: ${item.group}` : ""}
                </p>
                <p className="mt-1 truncate text-[15px] font-semibold text-ink">{item.title}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-[12px] text-blue underline"
                >
                  {item.url}
                </a>
              </div>
              <div className="flex gap-2">
                <button onClick={() => startEdit(item)} className="btn-ghost !px-3 !py-1.5 text-[12px]">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="rounded-full border border-red-200 px-3 py-1.5 text-[12px] font-semibold text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
