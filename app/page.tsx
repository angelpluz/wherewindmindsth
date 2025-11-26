export default function Home() {
  const heroBg =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80";
  const galleryBg =
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80";

  const tocItems = [
    {
      id: "overview",
      title: "ตำนาน & บรรยากาศ",
      desc: "ทำความรู้จักแรงบันดาลใจ Wuxia และเส้นทางลมที่พัดพาเรื่องราว",
      accent: "from-amber-300/80 to-orange-500/60",
      icon: "✦",
    },
    {
      id: "news",
      title: "ข่าว & อัปเดต",
      desc: "ไทม์ไลน์กิจกรรม สิทธิ์ลงทะเบียน และของรางวัล Twitch",
      accent: "from-sky-300/80 to-emerald-400/60",
      icon: "⌘",
    },
    {
      id: "world",
      title: "แผนที่ & เมือง",
      desc: "มองภาพรวมเส้นทาง Qinghe ถึงหลงเจียง พร้อมจุดสำคัญที่ห้ามพลาด",
      accent: "from-amber-200/80 to-slate-100/60",
      icon: "⋯",
    },
    {
      id: "systems",
      title: "ระบบการเล่น",
      desc: "ศิลปะการต่อสู้ วิถีนักพรต และวิธีขีดชะตาในโลกเปิด",
      accent: "from-lime-300/80 to-amber-400/60",
      icon: "⚔",
    },
  ];

  const features = [
    {
      title: "สายลมพาค้นหา",
      detail: "สำรวจดินแดนเปิดกว้าง เดินทางด้วยม้า โดรนเหยี่ยว หรือร่อนลงจากหน้าผา",
      tags: ["Exploration", "Freedom"],
    },
    {
      title: "ร่ายรำอาวุธ",
      detail: "สลับท่วงท่าอาวุธ วาดดาบ ปาหอก หรือใช้พลังภายในขัดจังหวะศัตรู",
      tags: ["Combat", "Build Craft"],
    },
    {
      title: "ตัดสินใจเป็นตำนาน",
      detail: "เลือกเส้นทางคุณธรรม แสดงตัวเป็นองครักษ์ หรือเป็นเงาในตลาดค่ำคืน",
      tags: ["Roleplay", "Choice"],
    },
    {
      title: "งานศิลป์โลกโบราณ",
      detail: "ดนตรี พู่กัน และสถาปัตยกรรมราชวงศ์ถัง ถ่ายทอดผ่านสีทองและหมึก",
      tags: ["Art Direction", "Lore"],
    },
  ];

  const newsHighlights = [
    {
      date: "2025-11-23",
      title: "หัวใจรวมเป็นหนึ่ง",
      summary: "ชวนแฟนๆ รวมพลที่เส้นทางไม้ไผ่ พร้อมภารกิจรับชุดนักเดินลม",
    },
    {
      date: "2025-11-14",
      title: "ของขวัญสายลม",
      summary: "ของตกแต่ง พาหนะ และอีโมตเปิดตัวพร้อมกิจกรรมลานพิธี",
    },
    {
      date: "2025-11-10",
      title: "เชื่อมบัญชีไร้รอยต่อ",
      summary: "คู่มือ cross-progression ระหว่าง PC, Steam, Epic และ PlayStation",
    },
  ];

  const journeyStops = [
    { name: "Qinghe", detail: "หมู่บ้านริมทะเลสาบ ลมอ่อนและตลาดเช้า", status: "พร้อมสำรวจ" },
    { name: "Kaifeng", detail: "มหานครวุ่นวายที่รวมหัตถศิลป์และการค้า", status: "กิจกรรมเทศกาล" },
    { name: "Longjiang", detail: "ขุนเขาและทุ่งดอกไม้ จุดชมอาทิตย์ลับยอดไม้", status: "Stay tuned" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,180,106,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(49,130,206,0.16),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950" />
      </div>

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/60 bg-amber-200/10 text-lg text-amber-200">
              风
            </div>
            <div>
              <p className="kicker text-[10px]">Where Wind Mind</p>
              <p className="heading-contrast text-lg text-amber-100">
                Codex Library
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-200/90 md:flex">
            <a href="#toc" className="hover:text-amber-200">
              สารบัญ
            </a>
            <a href="#overview" className="hover:text-amber-200">
              เรื่องราว
            </a>
            <a href="#news" className="hover:text-amber-200">
              ข่าว
            </a>
            <a href="#world" className="hover:text-amber-200">
              โลก
            </a>
            <a href="#cta" className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/10">
              Play PC Now
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="hero"
          className="relative isolate flex min-h-screen items-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-slate-950/85 to-slate-950" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-28 pb-16 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="kicker text-sm">สารบัญโลก Wuxia</p>
              <h1 className="heading-contrast text-4xl leading-tight text-amber-100 md:text-6xl">
                Where Wind Mind
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-100/90">
                ศูนย์รวมข้อมูล แรงบันดาลใจ และกิจกรรมของโลกเปิดแนว Wuxia
                ที่ให้คุณนิยามเส้นทางของตนเอง ไม่ว่าจะออกสำรวจหุบเขาหรือฝึกเพลงดาบใต้จันทร์
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#toc"
                  className="rounded-full bg-gradient-to-r from-amber-300 to-orange-600 px-6 py-3 text-slate-950 shadow-lg shadow-amber-500/30 transition hover:translate-y-[-2px]"
                >
                  เปิดสารบัญ
                </a>
                <a
                  href="#news"
                  className="rounded-full border border-white/15 px-5 py-3 text-slate-100 transition hover:border-amber-300/70 hover:text-amber-100"
                >
                  ข่าวล่าสุด
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 md:max-w-lg">
                {[
                  { label: "แนวเกม", value: "Open-World Wuxia RPG" },
                  { label: "แพลตฟอร์ม", value: "PC, PS5, Steam, Epic" },
                  { label: "โหมด", value: "Single + Online Co-op" },
                  { label: "อารมณ์", value: "หมึกทอง, ลมเย็น, เสรีภาพ" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-panel rounded-xl px-4 py-3 text-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-slate-100">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel relative mt-4 w-full max-w-md self-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-amber-200/5 to-slate-900/60" />
              <div className="relative">
                <p className="kicker text-sm">จุดเด่นเด่น</p>
                <p className="heading-contrast mt-2 text-xl text-amber-100">
                  เสียงลมยังเล่าเรื่อง
                </p>
                <p className="mt-3 text-sm text-slate-200/90">
                  ไกด์สั้นๆ สำหรับผู้มาใหม่: เริ่มจากการสำรวจเส้นทางไม้ไผ่
                  ฟังบทเพลงพิณ ขี่ม้าไปยัง Qinghe และรับรางวัล Twitch Drops
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {["สำรวจ", "ต่อสู้", "ร่วมทีม", "เล่าเรื่อง"].map((item) => (
                    <div
                      key={item}
                      className="gradient-border rounded-xl px-4 py-3 text-center text-amber-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-xs text-slate-200/80">
                  สายลมพัดผ่านภูเขาและสายน้ำ
                  ทุกการตัดสินใจคือหมึกที่คุณขีดบนม้วนผ้าขาวของตำนาน
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="toc"
          className="relative mx-auto -mt-12 max-w-6xl px-6 pb-16 lg:-mt-20"
        >
          <div className="glass-panel rounded-3xl border border-white/10 p-6 shadow-2xl shadow-slate-900/60">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="kicker text-xs">สารบัญเดินลม</p>
                <p className="heading-contrast text-2xl text-amber-100">
                  เลือกบทที่อยากเริ่ม
                </p>
                <p className="mt-2 max-w-2xl text-sm text-slate-200/90">
                  โครงร่างนี้ช่วยให้กดไปส่วนสำคัญได้เร็ว ทั้งข้อมูลตำนาน ข่าว
                  ระบบการเล่น และแผนที่เดินทาง
                </p>
              </div>
              <a
                href="#cta"
                className="rounded-full border border-amber-300/70 px-5 py-3 text-sm text-amber-100 transition hover:bg-amber-200/10"
              >
                เริ่มเล่นทันที
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-amber-200/70 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <p className="heading-contrast text-xl text-amber-100">
                      {item.title}
                    </p>
                    <span className="text-lg text-amber-200">{item.icon}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/85">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="overview"
          className="relative mx-auto max-w-6xl px-6 pb-16"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel overflow-hidden rounded-3xl border border-white/10 p-8">
              <p className="kicker text-xs">เนื้อเรื่องย่อ</p>
              <h2 className="heading-contrast text-3xl text-amber-100">
                ให้ลมพาเรื่องราวของคุณ
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-200/90">
                ตั้งอยู่ในยุคจีนศตวรรษที่สิบ ผู้เล่นรับบทเป็นนักดาบหนุ่มที่ออกจากบ้านไม้ไผ่
                เพื่อค้นหาความจริงที่ถูกลืม เรียนรู้เพลงดาบ วิถีแพทย์ และศาสตร์หมิง
                ทุกเส้นทางคือคำตอบที่แตกต่าง คุณจะเป็นผู้คุ้มกันเมือง หรือเป็นตำนานที่พัดผ่านโดยไม่ฝากชื่อ?
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                  >
                    <p className="heading-contrast text-lg text-amber-100">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-200/85">
                      {item.detail}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-amber-300/50 px-3 py-1 text-amber-100/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryBg})` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <p className="kicker text-xs">โทนภาพ</p>
                <h3 className="heading-contrast text-2xl text-amber-100">
                  หมึกทอง & หมอกเย็น
                </h3>
                <p className="mt-3 text-sm text-slate-100/90">
                  สีทองของตำนาน ตัดกับหมอกสีเทาและแสงเช้าบนทุ่งดอกไม้
                  คือหัวใจของภาพลักษณ์ Where Wind Mind
                </p>
                <div className="mt-4 flex gap-3 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-amber-100">
                    Moodboard
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-amber-100">
                    Lighting
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-amber-100">
                    Motion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="relative mx-auto max-w-6xl px-6 pb-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="kicker text-xs">ข่าว & กิจกรรม</p>
              <h2 className="heading-contrast text-3xl text-amber-100">
                สรุปไฮไลต์แบบรวดเร็ว
              </h2>
            </div>
            <a
              href="#cta"
              className="text-sm text-amber-100 underline decoration-amber-300/70 underline-offset-4"
            >
              รับของรางวัล Twitch Drops
            </a>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {newsHighlights.map((item) => (
              <div
                key={item.date}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/40"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                  {item.date}
                </p>
                <p className="mt-1 heading-contrast text-lg text-amber-100">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-200/85">{item.summary}</p>
                <button className="mt-4 text-sm text-amber-100 underline decoration-amber-300/60 underline-offset-4">
                  อ่านต่อ
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="world" className="relative mx-auto max-w-6xl px-6 pb-16">
          <div className="glass-panel overflow-hidden rounded-3xl border border-white/10 p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="kicker text-xs">เส้นทางการเดินทาง</p>
                <h2 className="heading-contrast text-3xl text-amber-100">
                  แผนที่สายลม
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-200/85">
                  จาก Qinghe ไป Kaifeng สู่ Longjiang
                  เส้นทางนี้คือโครงสร้างหลักของการสำรวจ พร้อมจุดพักที่ซ่อนเนื้อเรื่องเสริม
                </p>
              </div>
              <span className="rounded-full border border-amber-300/60 px-4 py-2 text-xs text-amber-100">
                Scroll to explore
              </span>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-800 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(216,180,106,0.12),transparent_40%)]" />
                <div className="relative flex flex-col gap-6">
                  {journeyStops.map((stop, index) => (
                    <div
                      key={stop.name}
                      className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-none last:pb-0"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/60 bg-amber-200/10 text-lg text-amber-100">
                        {`0${index + 1}`}
                      </div>
                      <div>
                        <p className="heading-contrast text-xl text-amber-100">
                          {stop.name}
                        </p>
                        <p className="text-sm text-slate-200/85">
                          {stop.detail}
                        </p>
                        <p className="mt-1 text-xs text-amber-200/80">
                          {stop.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <p className="kicker text-xs">บรรยากาศ</p>
                <h3 className="heading-contrast text-2xl text-amber-100">
                  ลมหายใจแห่งสนามดอกไม้
                </h3>
                <p className="mt-2 text-sm text-slate-200/85">
                  ไฟส้มยามเย็นสะท้อนกับทุ่งดอกไม้สีม่วงและแดง
                  เสียงกลองในหมู่บ้านเล็ก และหมอกเบาบางที่ช่วยซ่อนกลิ่นอายอันตราย
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                      อุณหภูมิ
                    </p>
                    <p className="mt-1 font-semibold text-slate-100">
                      เย็นสบาย 12°C
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                      เวลา
                    </p>
                    <p className="mt-1 font-semibold text-slate-100">
                      เช้าตรู่ & โพล้เพล้
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-amber-200/10 px-4 py-3 text-xs text-amber-50">
                  เคล็ดลับ: ใช้ลมพยุงตัวกระโดดข้ามลำธาร
                  แล้วลงสู่เส้นทางหลักเพื่อพบซ่อนของพ่อค้าเร่
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="systems"
          className="relative mx-auto max-w-6xl px-6 pb-16 lg:pb-20"
        >
          <div className="glass-panel overflow-hidden rounded-3xl border border-white/10 p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="kicker text-xs">ระบบการเล่น</p>
                <h2 className="heading-contrast text-3xl text-amber-100">
                  วิถีแห่งหมึก & ดาบ
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-200/85">
                  ใช้อาวุธ สกิลภายใน และเครื่องดนตรีเพื่อสร้างฉากต่อสู้ในแบบของคุณ
                  ระบบเควสแบบหลายคำตอบทำให้ทุกตัวเลือกมีผลกับชื่อเสียงในแต่ละเมือง
                </p>
              </div>
              <span className="rounded-full bg-amber-200/10 px-4 py-2 text-xs text-amber-100">
                Wuxia Sandbox
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "เพลงดาบ & พลังลม",
                  copy: "ผสมคอมโบด้วยจังหวะหนักเบา ใช้ลมพัดให้คู่ต่อสู้เสียสมดุล",
                },
                {
                  title: "สายอาชีพ",
                  copy: "แพทย์ นักพรต ช่างตีดาบ หรือพ่อค้า—สลับบทบาทได้ตามเมือง",
                },
                {
                  title: "ร่วมทีม",
                  copy: "เชิญเพื่อนมาร่วมลงดันเจี้ยน เปิดใช้งานค่ายพักและแบ่งปันบัฟ",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                >
                  <p className="heading-contrast text-xl text-amber-100">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-200/85">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="relative mx-auto max-w-6xl px-6 pb-16 lg:pb-24"
        >
          <div className="glass-panel overflow-hidden rounded-3xl border border-amber-200/40 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-800 p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="kicker text-xs">พร้อมออกเดินทาง</p>
                <h2 className="heading-contrast text-3xl text-amber-100">
                  เล่นบน PC หรือจองล่วงหน้าบนมือถือ
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-200/90">
                  เลือกแพลตฟอร์มที่สะดวก แล้วออกสู่ดินแดนสายลมวันนี้
                  สิทธิ์รับของรางวัล Twitch Drops ยังเปิดอยู่สำหรับผู้ชมสตรีมสด
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-gradient-to-r from-amber-300 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:translate-y-[-2px]"
                  href="#hero"
                >
                  Play PC Now
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-300/70 hover:text-amber-50"
                  href="#news"
                >
                  ดูกิจกรรมล่าสุด
                </a>
              </div>
            </div>
            <div className="mt-6 grid gap-4 text-xs text-slate-200/80 sm:grid-cols-2 md:grid-cols-4">
              {[
                "PlayStation 5",
                "Steam",
                "Epic Games",
                "Cross progression",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-amber-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
