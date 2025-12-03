"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MapTest02Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1320] via-[#0f1624] to-[#0b1220] text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-[#0d1320]/90 via-[#0d1320]/70 to-transparent px-6 py-3 text-sm text-slate-100 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide text-amber-100">
            <span className="text-lg">🌬️</span>
            <span>Where Winds Meet | Game Codex</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/map" className="hover:text-amber-100">
              Map (native)
            </Link>
            <a
              href="/map/maptest02/raw"
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs hover:border-amber-200/60 hover:text-amber-100"
              target="_blank"
              rel="noreferrer"
            >
              Raw full map
            </a>
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 pb-14 pt-24">
        <div className="rounded-2xl border border-white/10 bg-[#0c1420]/80 shadow-xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2 text-slate-200">
              <span className="text-base text-amber-100">🧭</span>
              <div>
                <p className="text-sm font-semibold">Full Data Map (maptest02)</p>
                <p className="text-xs text-slate-400">ใช้ธีมเดียวกับหน้าหลัก แต่ฝังข้อมูลทั้งหมดจาก HTML</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Live data จากต้นทาง
              </span>
            </div>
          </div>

          <div className="relative h-[80vh] overflow-hidden rounded-b-2xl bg-[#0a101a]">
            {!mounted ? (
              <div className="flex h-full items-center justify-center text-sm text-slate-300">
                Loading iframe...
              </div>
            ) : (
              <iframe
                title="Maptest02 full map"
                src="/map/maptest02/raw"
                className="h-full w-full border-0"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
