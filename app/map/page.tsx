"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type RawMarker = {
  id: string;
  name?: string;
  lat?: string;
  lng?: string;
  category_id?: string;
  desc?: string;
};

type MarkerPoint = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: string;
  source: string;
};

const ENDPOINT_KEYS = [
  "list",
  "batu",
  "aneh",
  "cave",
  "soundofheaven",
  "windofpath",
  "windofsacriface",
  "relic",
  "cat",
  "injustice",
  "adventure",
  "meow",
  "knowladge",
  "story",
  "moon",
  "uncounted",
  "precious",
  "gourmet",
  "special",
  "toilet",
  "healing",
  "makeafriend",
  "Gib-a-Gab",
  "book",
  "guard",
  "Outpost",
  "boss",
  "materialart",
  "pemancing",
  "mabuk",
  "kartu",
  "panah",
  "melodi",
  "tebakan",
  "gulat",
  "mysticlist",
  "innerwayslist",
];

const endpointLabels: Record<string, string> = {
  list: "Treasure",
  batu: "Teleport",
  aneh: "Oddities",
  cave: "Cave",
  soundofheaven: "Universal Harmony",
  windofpath: "Hidden Path",
  windofsacriface: "Ghost Fire",
  relic: "Antique",
  cat: "Cat Play",
  injustice: "Injustice",
  adventure: "Adventure",
  meow: "Meow Treasure",
  knowladge: "Knowledge",
  story: "Story",
  moon: "Moon Shadow",
  uncounted: "Uncounted",
  precious: "Precious",
  gourmet: "Gourmet",
  special: "Special",
  toilet: "Toilet",
  healing: "Healing",
  makeafriend: "Make a friend",
  Gib-a-Gab: "Gib-a-Gab",
  book: "Book",
  guard: "Guard",
  Outpost: "Outpost",
  boss: "Boss",
  materialart: "Material Art",
  pemancing: "Fishing",
  mabuk: "Pot",
  kartu: "Card",
  panah: "Archery",
  melodi: "Melody",
  tebakan: "Riddle",
  gulat: "Sumo",
  mysticlist: "Mystic",
  innerwayslist: "Inner Way",
};

const endpointColors: Record<string, string> = {
  list: "#f3c969",
  batu: "#38bdf8",
  aneh: "#f472b6",
  boss: "#fb7185",
  cave: "#a855f7",
  materialart: "#22c55e",
  mysticlist: "#c084fc",
  innerwayslist: "#f97316",
};

const iconUrls: Record<string, string> = {
  list: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/petiharta.webp",
  batu: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/batuteleport.webp",
  boss: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/boss.webp",
  adventure: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/adventure.webp",
  cave: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/gua.webp",
  materialart: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/jutsu.webp",
  aneh: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/strange.webp",
  soundofheaven: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/soundofheaven.webp",
  windofpath: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/windingpathinsearchoftranquility.webp",
  windofsacriface: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/windsacrifaceandfiretour.webp",
  relic: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/relic.webp",
  cat: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/catplay.webp",
  injustice: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/injustic.webp",
  meow: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/meow.webp",
  knowladge: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/knoweverything.webp",
  story: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/lightanddarkstory.webp",
  moon: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/moonshadowoverlap.webp",
  uncounted: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/default.png",
  precious: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/treasureinpalmofyourhand.webp",
  gourmet: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/gourmetfood.webp",
  special: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/specialmuscles.webp",
  toilet: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/toilet.webp",
  healing: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/healing.webp",
  makeafriend: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/makefriend.webp",
  Gib-a-Gab: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/Gib-a-Gab.webp",
  book: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/book.webp",
  guard: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/guard.webp",
  Outpost: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/strongehold.webp",
  pemancing: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/fishing.webp",
  mabuk: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/pot.webp",
  kartu: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/miaodao.webp",
  panah: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/archer.webp",
  melodi: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/melody.webp",
  tebakan: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/riddle.webp",
  gulat: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/summo.webp",
  mysticlist: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/tehnik.webp",
  innerwayslist: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/innerway.webp",
};

function useLeafletScript() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as any).L) {
      setReady(true);
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet/dist/leaflet.js";
    script.async = true;
    script.onload = () => setReady(true);
    script.onerror = () => setReady(false);
    document.body.appendChild(script);
  }, []);
  return ready;
}

async function fetchBatch(): Promise<Record<string, RawMarker[]>> {
  const resp = await fetch("/api/markers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoints: ENDPOINT_KEYS }),
  });
  if (!resp.ok) throw new Error(`API error ${resp.status}`);
  const json = await resp.json();
  const normalized: Record<string, RawMarker[]> = {};
  Object.entries(json as Record<string, Record<string, RawMarker>>).forEach(([key, value]) => {
    normalized[key] = value ? Object.values(value) : [];
  });
  return normalized;
}

function convertMarkers(raw: Record<string, RawMarker[]>): MarkerPoint[] {
  const markers: MarkerPoint[] = [];
  Object.entries(raw).forEach(([key, list]) => {
    list.forEach((item) => {
      const lat = Number(item.lat);
      const lng = Number(item.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
      markers.push({
        id: item.id,
        name: item.name || "Unknown",
        lat,
        lng,
        category: item.category_id || "n/a",
        source: key,
      });
    });
  });
  return markers;
}

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);
  const iconCache = useRef<Record<string, any>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "ready">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [markers, setMarkers] = useState<MarkerPoint[]>([]);
  const [activeSources, setActiveSources] = useState<string[]>(ENDPOINT_KEYS);
  const leafletReady = useLeafletScript();

  useEffect(() => {
    if (!leafletReady || !mapRef.current || mapInstance.current) return;
    const L = (window as any).L;
    const TILE_BOUNDS = { minX: 0, maxX: 256, minY: 0, maxY: 256 };
    const PAN_BUFFER = 50;
    const mapBounds = [
      [TILE_BOUNDS.minY - PAN_BUFFER, TILE_BOUNDS.minX - PAN_BUFFER],
      [TILE_BOUNDS.maxY + PAN_BUFFER, TILE_BOUNDS.maxX + PAN_BUFFER],
    ];

    const crsSimple = L.extend({}, L.CRS.Simple, {
      transformation: new L.Transformation(1, 0, 1, 0),
    });

    const map = L.map(mapRef.current, {
      crs: crsSimple,
      minZoom: 3,
      maxZoom: 8,
      maxBounds: mapBounds,
      maxBoundsViscosity: 0.7,
      zoomControl: true,
      attributionControl: false,
    }).setView([128, 180], 5);

    L.tileLayer("https://ik.imagekit.io/k3lv5clxs/wherewindmeet/tiles/{z}_{x}_{y}.webp?v=20251121", {
      minZoom: 3,
      maxZoom: 8,
      maxNativeZoom: 7,
      noWrap: true,
      crossOrigin: true,
      errorTileUrl: "https://ik.imagekit.io/k3lv5clxs/wherewindmeet/tiles/7_127_126.webp",
    }).addTo(map);

    mapInstance.current = map;
  }, [leafletReady]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setStatus("loading");
      setErrorMsg(null);
      try {
        const raw = await fetchBatch();
        if (cancelled) return;
        const pts = convertMarkers(raw);
        setMarkers(pts);
        setStatus("ready");
      } catch (err: any) {
        if (cancelled) return;
        setErrorMsg(err?.message || "Fetch error");
        setStatus("error");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;
    const L = (window as any).L;
    if (!L) return;
    map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });
    const filtered = markers.filter((m) => activeSources.includes(m.source));
    filtered.forEach((m) => {
      const color = endpointColors[m.source] || "#f8fafc";
      const url = iconUrls[m.source];
      let icon: any = null;
      if (url) {
        if (!iconCache.current[url]) {
          iconCache.current[url] = L.icon({
            iconUrl: url,
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            popupAnchor: [0, -28],
            className: "wwm-marker",
          });
        }
        icon = iconCache.current[url];
      }
      (icon
        ? L.marker([m.lat, m.lng], { icon })
        : L.circleMarker([m.lat, m.lng], {
            radius: 6,
            color,
            fillColor: color,
            fillOpacity: 0.85,
            weight: 1,
          })
      )
        .bindPopup(`<strong>${m.name}</strong><br/>Source: ${endpointLabels[m.source] || m.source}`)
        .addTo(map);
    });
  }, [markers, activeSources]);

  const sourceList = useMemo(
    () =>
      ENDPOINT_KEYS.map((key) => ({
        key,
        label: endpointLabels[key] || key,
        icon: iconUrls[key],
      })),
    [],
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1320] via-[#0f1624] to-[#0b1220] text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-[#0d1320]/90 via-[#0d1320]/70 to-transparent px-6 py-3 text-sm text-slate-100 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide text-amber-100">
            <span className="text-lg">🌬️</span>
            <span>Where Winds Meet | Game Codex</span>
          </Link>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 pb-14 pt-24">
        <div className="grid gap-4 lg:grid-cols-[1fr_320px] items-start">
          <div className="rounded-2xl border border-white/10 bg-[#0c1420]/80 shadow-xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-base text-amber-100">🗺️</span>
                <span>Live map (tiles from imagekit, data from DB/worker)</span>
              </div>
              <div className="text-xs text-slate-400">Zoom & drag to explore</div>
            </div>
            <div ref={mapRef} className="h-[70vh] w-full rounded-b-2xl" />
          </div>

          <div className="h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0c1420]/80 p-4 shadow-lg shadow-black/40">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-200/40 to-amber-500/40 border border-amber-200/40">
                <img
                  src="https://ik.imagekit.io/k3lv5clxs/wherewindmeet/Simbol/faviconV2.ico?updatedAt=1762922428848"
                  alt="Where Winds Meet"
                  className="h-7 w-7"
                />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.28em] text-amber-100">Where Winds Meet</p>
                <p className="text-base font-semibold text-amber-50">Game Codex</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100">Data source</p>
              <h2 className="mt-1 text-lg font-semibold text-amber-50">API Filters</h2>
            </div>
            <div className="mt-3 flex gap-2 text-xs">
              <button
                onClick={() => setActiveSources(ENDPOINT_KEYS)}
                className="rounded-md border border-amber-200/60 bg-amber-200/10 px-3 py-1 text-amber-100 hover:bg-amber-200/20"
              >
                Use all
              </button>
              <button
                onClick={() => setActiveSources([])}
                className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-slate-200 hover:border-amber-200/60 hover:text-amber-100"
              >
                Clear all
              </button>
            </div>

            {status === "loading" && (
              <p className="mt-3 text-xs text-slate-200">Loading markers...</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-xs text-rose-200">Error: {errorMsg}</p>
            )}

            <div className="mt-4 space-y-2">
              {sourceList.map((s) => {
                const active = activeSources.includes(s.key);
                const color = endpointColors[s.key] || "#e2e8f0";
                return (
                  <button
                    key={s.key}
                    onClick={() =>
                      setActiveSources((prev) =>
                        prev.includes(s.key) ? prev.filter((x) => x !== s.key) : [...prev, s.key],
                      )
                    }
                    className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-sm transition ${
                      active
                        ? "border-amber-200/60 bg-amber-200/10 text-white"
                        : "border-white/10 bg-white/0 text-slate-200 hover:border-amber-200/60"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {s.icon ? (
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="h-6 w-6 rounded-full bg-black/20 object-contain p-1"
                        />
                      ) : (
                        <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                      )}
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
