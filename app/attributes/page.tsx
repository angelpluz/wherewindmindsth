import { attributes, builds, innerWays, moraleNote } from "@/lib/codexData";

const heroBg = "/img/topview.png";

export default function AttributesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2f3138] via-[#f3f1ed] to-[#f9f8f6] text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,180,106,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(95,118,160,0.16),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2f3138]/80 via-transparent to-transparent" />
      </div>

      <header className="relative isolate overflow-hidden bg-gradient-to-b from-black/50 via-[#2f3138]/70 to-transparent">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#2f3138]/80 to-[#f3f1ed]/80" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-6 py-16 md:py-20">
          <p className="kicker text-sm text-amber-100">#WhereWindsMeet #Weapons #Builds</p>
          <h1 className="heading-contrast text-4xl text-[#f6e8c3] md:text-5xl">
            Attributes & Inner Way Library
          </h1>
          <p className="max-w-3xl text-sm md:text-base text-slate-100/90">
            รวมธาตุหลัก ปราณเฉพาะ และบิลด์แนะนำแบบเต็ม จับคู่ธาตุ → ปราณ → อาวุธรอง →
            สเตตัสที่เหมาะ เพื่อดึงศักยภาพสูงสุด
          </p>
          <div className="flex gap-3">
            <a
              href="/"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-xs text-amber-100 hover:bg-amber-200/20"
            >
              ← กลับหน้าหลัก
            </a>
            <a
              href="#builds"
              className="rounded-full bg-gradient-to-r from-amber-300 to-orange-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-amber-500/30 hover:translate-y-[-2px]"
            >
              ข้ามไปดูบิลด์
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <section className="mt-10 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-black/10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="kicker text-xs">#Attribute</p>
              <h2 className="heading-contrast text-2xl text-[#c7a35a]">ธาตุหลักของวิชา</h2>
              <p className="mt-1 text-sm text-slate-800/85">
                ธาตุไม่มีแพ้-ชนะ แต่จะบูสต์ดาเมจ/ฮีลเมื่อออฟตรงกับวิชาที่ใช้ เลือกให้เข้ากับสไตล์การเล่น
              </p>
            </div>
            <span className="rounded-full border border-amber-300/70 px-4 py-2 text-xs text-[#c7a35a]">
              Bellstrike • Stoneplit • Bamboocut • Silkbind
            </span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {attributes.map((attr) => (
              <div
                key={attr.name}
                className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${attr.color}`}
                  aria-hidden
                />
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="heading-contrast text-xl text-[#c7a35a]">{attr.name}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-700">
                      {attr.tone}
                    </p>
                  </div>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-slate-700">
                    {attr.focus}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-900">
                  {attr.weapons.map((w) => (
                    <span
                      key={w}
                      className="rounded-full border border-amber-300/60 bg-white/60 px-3 py-1"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="inner" className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-black/10 bg-white/80 p-7">
            <p className="kicker text-xs">#InnerWay</p>
            <h3 className="heading-contrast text-xl text-[#c7a35a]">ปราณเฉพาะวิชา</h3>
            <p className="mt-2 text-sm text-slate-800/85">
              ปราณเฉพาะของแต่ละวิชาช่วยปลดล็อกพลังหลัก เลือกปราณทอง/ม่วงตามบทบาทที่ต้องการ
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {innerWays.map((iw) => (
                <div
                  key={iw.weapon}
                  className="flex items-center justify-between rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{iw.weapon}</p>
                    <p className="text-xs text-slate-700">{iw.inner}</p>
                  </div>
                  <span className="rounded-full bg-amber-100/80 px-3 py-1 text-xs text-[#c7a35a]">
                    {iw.rarity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-white/85 via-[#f3f1ed] to-amber-50 p-7">
            <p className="kicker text-xs">#Build Tips</p>
            <h3 className="heading-contrast text-xl text-[#c7a35a]">การจับคู่ธาตุ + อาวุธที่สอง</h3>
            <p className="mt-2 text-sm text-slate-800/85">
              ปกติเลือกธาตุเดียวกันทั้งสองอาวุธเพื่อรับสเตตัสสูงสุด ยกเว้นต้องการฮีลหรือ utility ก็หยิบ
              Silkbind เป็นอาวุธรองได้
            </p>
            <div className="mt-4 rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-xs text-slate-700">
              • เน้นบอสไฟต์: เติม Battle Anthem ในชุดปราณ<br />
              • เน้นปาร์ตี้: เลือก Esoteric Revival หรือ Morale Chant ขั้นสูง<br />
              • ต้องการความรอด: ใช้ Silkbind เป็นอาวุธรองสำหรับฮีล/บัฟ
            </div>
          </div>
        </section>

        <section id="builds" className="mt-10 rounded-3xl border border-black/10 bg-white/80 p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="kicker text-xs">#Build</p>
              <h3 className="heading-contrast text-2xl text-[#c7a35a]">บิลด์พื้นฐานของเกม</h3>
              <p className="mt-1 text-sm text-slate-800/85">
                จับคู่ธาตุ + ปราณเฉพาะ แล้วเลือกสเตตัสให้ตรงบทบาท
              </p>
            </div>
            <span className="rounded-full bg-amber-100/80 px-4 py-2 text-xs text-[#c7a35a]">
              Critical / Affinity / MaxHP
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {builds.map((build) => (
              <div
                key={build.name}
                className="rounded-2xl border border-black/10 bg-white/75 p-5"
              >
                <p className="heading-contrast text-lg text-[#c7a35a]">{build.name}</p>
                <p className="text-sm font-semibold text-slate-900">{build.combo}</p>
                <p className="mt-2 text-sm text-slate-800/85">{build.description}</p>
                <div className="mt-3 text-xs text-slate-800">
                  <p>
                    <span className="font-semibold text-[#c7a35a]">ปราณ:</span> {build.inners}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold text-[#c7a35a]">สเตตัส:</span> {build.stats}
                  </p>
                  {build.notes && <p className="mt-1 text-slate-700">* {build.notes}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/70 bg-amber-50 px-5 py-4 text-sm text-slate-800">
            <p className="heading-contrast text-base text-[#c7a35a]">#MoraleChant</p>
            <p className="mt-1">{moraleNote}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
