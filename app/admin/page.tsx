"use client";

import { useEffect, useMemo, useState } from "react";

type Category = {
  id: string;
  slug: string;
  name: string;
  color: string | null;
};

type FormState = {
  title: string;
  description: string;
  category: string;
  x_pct: number | string;
  y_pct: number | string;
  min_zoom: number | string | null;
  max_zoom: number | string | null;
  is_active: boolean;
  image_url: string;
};

export default function AdminMarkers() {
  const [password, setPassword] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCats, setLoadingCats] = useState(false);
  const [form, setForm] = useState<FormState>({
    title: "",
    category: "resource",
    x_pct: 50,
    y_pct: 50,
    description: "",
    min_zoom: null,
    max_zoom: null,
    is_active: true,
    image_url: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("wwm_admin_key");
    if (saved) setPassword(saved);
    fetchCategories(saved ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCategories = async (adminKey?: string) => {
    try {
      setLoadingCats(true);
      const res = await fetch("/api/categories", {
        headers: adminKey ? { "x-admin-key": adminKey } : undefined,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "load categories failed");
      setCategories(data.categories ?? []);
      if (data.categories?.length && !form.category) {
        setForm((prev) => ({ ...prev, category: data.categories[0].slug }));
      }
    } catch (e) {
      console.error(e);
      setError("โหลดหมวดหมู่ไม่สำเร็จ");
    } finally {
      setLoadingCats(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setError("");
    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        category: form.category,
        x_pct: Number(form.x_pct),
        y_pct: Number(form.y_pct),
        min_zoom:
          form.min_zoom === null || form.min_zoom === undefined || form.min_zoom === ""
            ? null
            : Number(form.min_zoom),
        max_zoom:
          form.max_zoom === null || form.max_zoom === undefined || form.max_zoom === ""
            ? null
            : Number(form.max_zoom),
        is_active: form.is_active,
        image_url: form.image_url?.trim() || undefined,
      };

      if (
        !payload.title ||
        Number.isNaN(payload.x_pct) ||
        Number.isNaN(payload.y_pct) ||
        payload.x_pct < 0 ||
        payload.x_pct > 100 ||
        payload.y_pct < 0 ||
        payload.y_pct > 100
      ) {
        setError("กรอก title / x / y ให้ครบและอยู่ในช่วง 0-100");
        return;
      }

      const res = await fetch("/api/markers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(password ? { "x-admin-key": password } : {}),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "เพิ่ม marker ไม่สำเร็จ");

      setStatus("เพิ่ม marker สำเร็จ");
      setForm((prev) => ({ ...prev, title: "", description: "" }));
    } catch (err: any) {
      setError(err.message || "เพิ่ม marker ไม่สำเร็จ");
    }
  };

  const categoriesOptions = useMemo(
    () =>
      categories.map((c) => (
        <option key={c.id} value={c.slug}>
          {c.name} ({c.slug})
        </option>
      )),
    [categories],
  );

  return (
    <div className="min-h-screen bg-[#0d1320] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-semibold text-amber-200">Admin · Markers</h1>
        <p className="text-sm text-slate-300">ใช้ key จาก .env: ADMIN_DASHBOARD_PASSWORD</p>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex-1">
            <label className="text-xs text-slate-300">Admin Key (stored locally)</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                if (password) window.localStorage.setItem("wwm_admin_key", password);
              }}
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-amber-200/60 focus:outline-none"
              placeholder="ใส่รหัส admin"
            />
          </div>
          <button
            onClick={() => fetchCategories(password)}
            className="mt-6 h-10 rounded-lg border border-amber-200/60 px-4 text-sm text-amber-100 hover:bg-amber-200/10"
          >
            Reload categories
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-slate-300">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-amber-200/60 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-xs text-slate-300">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white focus:border-amber-200/60 focus:outline-none"
              >
                {loadingCats ? <option>Loading...</option> : categoriesOptions}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300">Image URL (optional)</label>
            <input
              value={form.image_url}
              onChange={(e) => setForm((prev) => ({ ...prev, image_url: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-amber-200/60 focus:outline-none"
              placeholder="https://..."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs text-slate-300">X %</label>
              <input
                type="number"
                step="0.01"
                min={0}
                max={100}
                value={form.x_pct}
                onChange={(e) => setForm((prev) => ({ ...prev, x_pct: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white focus:border-amber-200/60 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300">Y %</label>
              <input
                type="number"
                step="0.01"
                min={0}
                max={100}
                value={form.y_pct}
                onChange={(e) => setForm((prev) => ({ ...prev, y_pct: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white focus:border-amber-200/60 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-amber-200/60 focus:outline-none"
              rows={3}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="text-xs text-slate-300">Min zoom (optional)</label>
              <input
                type="number"
                step="0.1"
                value={form.min_zoom ?? ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    min_zoom: e.target.value === "" ? null : Number(e.target.value),
                  }))
                }
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white focus:border-amber-200/60 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300">Max zoom (optional)</label>
              <input
                type="number"
                step="0.1"
                value={form.max_zoom ?? ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    max_zoom: e.target.value === "" ? null : Number(e.target.value),
                  }))
                }
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0c1420] px-3 py-2 text-sm text-white focus:border-amber-200/60 focus:outline-none"
              />
            </div>
            <label className="mt-5 inline-flex items-center gap-2 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
                className="h-4 w-4 accent-amber-300"
              />
              Active
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-lg border border-amber-200/60 px-4 py-2 text-amber-100 hover:bg-amber-200/10"
        >
          เพิ่ม Marker
        </button>
        {status && <span className="text-emerald-300 text-sm">{status}</span>}
        {error && <span className="text-rose-300 text-sm">{error}</span>}
      </div>
    </form>

    <div className="mt-6 text-sm text-slate-400">
      <p>Tip: ใส่ Image URL ถ้ามีสกรีนช็อต จะกดดูได้จากจุดบนแผนที่</p>
      <p>Tip: ใช้ Dev capture mode บนหน้าแผนที่ คลิกแล้ว copy x/y% มาแปะได้เลย</p>
    </div>
  </div>
</div>
  );
}
