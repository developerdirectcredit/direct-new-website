import { useState } from "react";
import { api, setAdminToken } from "../../utils/api";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { token } = await api.login(username, password);
      setAdminToken(token);
      window.location.href = "/admin";
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-rule bg-white p-8 shadow-sm"
      >
        <h1 className="text-[22px] font-bold text-ink">Admin Login</h1>
        <p className="mt-1 text-[13px] text-ink/60">Manage Media & Speaking / CSR content.</p>

        <label className="mt-6 block text-[13px] font-semibold text-ink/70">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[15px] outline-none focus:border-signal"
          autoFocus
          required
        />

        <label className="mt-4 block text-[13px] font-semibold text-ink/70">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg border border-rule bg-paper px-3 py-2 text-[15px] outline-none focus:border-signal"
          required
        />

        {error && <p className="mt-3 text-[13px] font-semibold text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn-solid mt-6 w-full justify-center disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
