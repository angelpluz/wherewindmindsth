import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export default async function MapTest01() {
  const filePath = path.join(process.cwd(), "app", "map", "maptest01.css");
  const rawHtml = await fs.readFile(filePath, "utf-8");

  return (
    <div className="min-h-screen bg-[#0d1320] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="text-2xl font-semibold text-amber-200">Map Test 01 (raw embed)</h1>
        <p className="text-sm text-slate-300">
          Rendered directly from <code>app/map/maptest01.css</code>. This is the original Leaflet DOM
          snapshot with markers.
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <div
          className="overflow-auto rounded-2xl border border-white/10 bg-black/40 p-4"
          dangerouslySetInnerHTML={{ __html: rawHtml }}
        />
      </div>
    </div>
  );
}
