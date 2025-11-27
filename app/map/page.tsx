"use client";

import { useMemo, useRef, useState } from "react";

type Marker = {
  id: string;
  name: string;
  category: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
};

const mapImage = "/img/map/3Where_Winds_Meet_-_2048.png";

const categories: { id: string; label: string; color: string }[] = [
  { id: "landmark", label: "Landmark", color: "#f3c969" },
  { id: "shop", label: "Shop", color: "#7dd3fc" },
  { id: "dungeon", label: "Dungeon / Cave", color: "#c084fc" },
  { id: "boss", label: "Boss", color: "#fb7185" },
  { id: "resource", label: "Resource", color: "#4ade80" },
];

const markers: Marker[] = [
  { id: "m1", name: "Old Capital Gate", category: "landmark", x: 48.5, y: 58 },
  { id: "m2", name: "Mountain Shrine", category: "landmark", x: 62, y: 32 },
  { id: "m3", name: "Boundary Stone", category: "resource", x: 54, y: 46 },
  { id: "m4", name: "Fishing Spot", category: "resource", x: 29, y: 67 },
  { id: "m5", name: "Twin Rapids Cave", category: "dungeon", x: 36, y: 42 },
  { id: "m6", name: "Shadow Puppet Shop", category: "shop", x: 44, y: 61 },
  { id: "m7", name: "Horse Ranch", category: "shop", x: 41, y: 69 },
  { id: "m8", name: "Spirit Beast Boss", category: "boss", x: 58, y: 54 },
  { id: "m9", name: "Ruined Tower", category: "landmark", x: 70, y: 63 },
  { id: "m10", name: "Hidden Grotto", category: "dungeon", x: 27, y: 55 },
];

export default function MapPage() {
  const [zoom, setZoom] = useState(1.1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const startRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const [search, setSearch] = useState("");
  const [activeCats, setActiveCats] = useState<string[]>(categories.map((c) => c.id));

  const filteredMarkers = useMemo(() => {
    const term = search.toLowerCase();
    return markers.filter(
      (m) =>
        activeCats.includes(m.category) &&
        (term.length === 0 || m.name.toLowerCase().includes(term)),
    );
  }, [search, activeCats]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -Math.sign(e.deltaY) * 0.1;
    setZoom((z) => Math.min(3, Math.max(0.8, Number((z + delta).toFixed(2)))));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPanning(true);
    startRef.current = { x: e.clientX, y: e.clientY, tx: translate.x, ty: translate.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning || !startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    setTranslate({ x: startRef.current.tx + dx, y: startRef.current.ty + dy });
  };

  const stopPan = () => {
    setIsPanning(false);
  };

  const toggleCategory = (id: string) => {
    setActiveCats((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const setAllCats = (on: boolean) => {
    setActiveCats(on ? categories.map((c) => c.id) : []);
  };

  const resetView = () => {
    setZoom(1.1);
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1320] via-[#0f1624] to-[#0b1220] text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-[#0d1320]/90 via-[#0d1320]/70 to-transparent px-6 py-3 text-sm text-slate-100 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-wide text-amber-100">
            <span className="text-lg">⛰️</span>
            <span>Where Winds Meet | Game Codex</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-amber-100">
              หน้าแรก
            </a>
            <a href="/#master-index" className="hover:text-amber-100">
              สารบัญใหญ่
            </a>
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 pb-14 pt-24">
        <div className="flex flex-col gap-4 lg:flex-row">
          <section className="flex-1 rounded-2xl border border-white/10 bg-[#0c1420]/80 shadow-xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-base text-amber-100">🗺️</span>
                <span>Drag to pan · Scroll to zoom</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom((z) => Math.min(3, Number((z + 0.15).toFixed(2))))}
                  className="h-8 w-8 rounded-md border border-white/15 bg-white/5 text-lg hover:border-amber-200/60 hover:text-amber-100"
                >
                  +
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(0.8, Number((z - 0.15).toFixed(2))))}
                  className="h-8 w-8 rounded-md border border-white/15 bg-white/5 text-lg hover:border-amber-200/60 hover:text-amber-100"
                >
                  −
                </button>
              </div>
            </div>

            <div
              className="relative h-[70vh] overflow-hidden rounded-b-2xl bg-[#0a101a]"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopPan}
              onMouseLeave={stopPan}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: isPanning ? "none" : "transform 120ms ease-out",
                }}
              >
                <img src={mapImage} alt="Where Winds Meet map" className="h-full w-full object-contain" />

                {filteredMarkers.map((m) => {
                  const cat = categories.find((c) => c.id === m.category);
                  return (
                    <div
                      key={m.id}
                      className="absolute cursor-pointer text-xs font-semibold text-slate-900"
                      style={{
                        left: `${m.x}%`,
                        top: `${m.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      title={m.name}
                    >
                      <div
                        className="rounded-full px-2 py-1 shadow-lg shadow-black/30"
                        style={{ backgroundColor: cat?.color ?? "#e2e8f0" }}
                      >
                        {m.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <aside className="w-full lg:w-[360px] lg:pl-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-lg shadow-black/40">
              <p className="kicker text-right text-xs uppercase tracking-[0.2em] text-amber-100">Map Controls</p>
              <h1 className="heading-contrast text-right text-2xl text-[#d6b16c]">Interactive Map</h1>
              <p className="mt-1 text-right text-sm text-slate-200/80">
                เลือกหมวด ค้นหา และคลิก marker เพื่อดูชื่อจุดบนแผนที่ 2048x2048
              </p>
              <div className="mt-4 flex flex-wrap justify-end gap-2 text-xs">
              <button
                onClick={() => setAllCats(true)}
                className="rounded-full border border-amber-200/60 px-3 py-1 text-amber-100 hover:bg-amber-200/15"
              >
                Show all
              </button>
              <button
                onClick={() => setAllCats(false)}
                className="rounded-full border border-white/30 px-3 py-1 text-white hover:border-amber-200/60 hover:text-amber-100"
              >
                Hide all
              </button>
              <button
                onClick={resetView}
                className="rounded-full border border-white/20 px-3 py-1 text-white hover:border-amber-200/60 hover:text-amber-100"
              >
                Reset view
              </button>
                <a
                  href={mapImage}
                  download
                  className="rounded-full border border-white/30 px-3 py-1 text-white hover:border-amber-200/60 hover:text-amber-100"
                >
                  ดาวน์โหลดภาพ
                </a>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <label className="text-xs text-slate-300">Search</label>
                  <div className="mt-1 flex gap-2">
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="ค้นหาชื่อจุด เช่น boss, shop"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-amber-200/60 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-slate-300">หมวดหมู่</p>
                  <div className="mt-2 space-y-2">
                    {categories.map((c) => {
                      const count = markers.filter((m) => m.category === c.id).length;
                      const active = activeCats.includes(c.id);
                      return (
                        <button
                          key={c.id}
                          onClick={() => toggleCategory(c.id)}
                          className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-sm ${
                            active
                              ? "border-amber-200/60 bg-amber-200/10 text-white"
                              : "border-white/10 bg-white/0 text-slate-200 hover:border-amber-200/60"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className="inline-block h-3 w-3 rounded-full"
                              style={{ backgroundColor: c.color }}
                            />
                            {c.label}
                          </span>
                          <span className="text-xs text-white/70">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
