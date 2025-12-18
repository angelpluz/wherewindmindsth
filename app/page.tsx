export default function Home() {
  const heroBg = "/img/topview.png";
  const fieldBg =
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80";

  const masterIndex = [
    {
      id: "attributes",
      title: "Attributes & Builds",
      desc: "ธาตุหลัก ปราณเฉพาะ และบิลด์แนะนำพร้อมสเตตัส",
    },
    {
      id: "inner-ways",
      title: "Inner Ways (กำลังภายใน)",
      desc: "Passive/ปราณเฉพาะ, วิธีอัปเกรด, Path & บัฟสำคัญ",
    },
    {
      id: "mystic-skills",
      title: "Mystic Skills",
      desc: "Offensive / General / Movement และเอฟเฟกต์ครบถ้วน",
    },
    {
      id: "tips",
      title: "10 Tips ผู้เล่นใหม่",
      desc: "สรุป 10 ข้อควรรู้ ฟาร์มไว ใช้ระบบคุ้ม",
    },
    {
      id: "gear-sets",
      title: "Gear Sets",
      desc: "โบนัสเซ็ต 2/4 ชิ้น สำหรับบิลด์และสายการเล่น",
    },
    {
      id: "lore",
      title: "ฐานข้อมูลโลก / Lore Codex",
      desc: "เรื่องเล่า Jianghu, สำนัก, ตัวละคร, เมือง, เหตุการณ์",
    },
    {
      id: "martial",
      title: "คลาส / สายวิชา / Martial Arts Codex",
      desc: "สกิลทั้งหมด, Build แนะนำ, Tier List, วิธีปลดล็อก",
    },
    {
      id: "new-player",
      title: "ไกด์สำหรับผู้เล่นใหม่",
      desc: "เริ่มต้น, อาชีพแนะนำ, ระบบสำคัญ, ฟาร์มของ",
    },
    {
      id: "systems",
      title: "ระบบเกมทั้งหมด",
      desc: "Combat, Cultivation, การเดินทาง, Co-op, PvP",
    },
    {
      id: "items",
      title: "อาวุธ / อุปกรณ์ / ไอเทม",
      desc: "ดาบ เกราะ คอสตูม ไอเทมหายาก พร้อมตัวกรอง",
    },
    {
      id: "map",
      title: "แผนที่แบบ Interactive",
      desc: "บอสโลก ของลับ Qi nodes ตำราและซอกลับ",
    },
    {
      id: "quests",
      title: "เควสต์ (Quest Database)",
      desc: "เมนเควสต์ เควสต์รอง เควสต์ลับ ไอเทมปลดแมพ",
    },
    {
      id: "events",
      title: "กิจกรรม & อีเวนต์",
      desc: "ข่าวกิจกรรม Twitch Drops อีเวนต์รายเดือน",
    },
    {
      id: "pvp-pve",
      title: "เนื้อหา PvP / PvE",
      desc: "ไกด์บอส ฟาร์ม ดันเจี้ยน คอมโบ Duel และ Tier List",
    },
    {
      id: "tools",
      title: "เครื่องมือเสริม (Tools)",
      desc: "Skill Planner, Damage/Stat Calculator แบบอินเตอร์แอคทีฟ",
    },
    {
      id: "news",
      title: "ข่าวเกม (News Hub)",
      desc: "อัปเดต, แพทช์โน้ตแปลไทย, ข่าว Twitch/YouTube",
    },
    {
      id: "cross",
      title: "คู่มือการเชื่อมบัญชี / Cross-Progression",
      desc: "สรุปขั้นตอน, ภาพประกอบ, คำเตือนที่ต้องรู้",
    },
    {
      id: "community",
      title: "คอมมูนิตี้",
      desc: "ฟอรั่ม Q&A, รีวิวสกิล/คลาส, แชร์ Build ของตัวเอง",
    },
  ];

  const sections = [
    {
      id: "lore",
      number: "01",
      kicker: "Lore Codex",
      title: "ฐานข้อมูลโลก / Lore Codex",
      summary:
        "หัวข้อดึงคนอ่านมากที่สุด รวบรวม Jianghu, สำนัก, เมือง, เหตุการณ์ และตำนานลับทั้งหมด",
      groups: [
        {
          title: "หัวข้อหลัก",
          items: [
            "ประวัติ Jianghu",
            "กลุ่ม / สำนัก / Frctions ต่างๆ",
            "ตัวละครหลัก & ตัวละครสำคัญในเนื้อเรื่อง",
            "ประวัติพื้นที่ & เมืองแต่ละโซน",
            "เหตุการณ์สำคัญใน Timeline",
            "ตำนาน / Wuxia myth / สถานที่ลับ",
          ],
        },
        {
          title: "ฟีเจอร์เสริม",
          items: [
            "ไทม์ไลน์แบบ Scroll",
            "แผนที่ Interactive (คลิกแล้วโชว์ข้อมูล)",
          ],
        },
      ],
    },
    {
      id: "martial",
      number: "02",
      kicker: "Martial Arts",
      title: "คลาส / สายวิชา / Martial Arts Codex",
      summary:
        "จุดขายของเกม เน้นสกิลเต็มรูปแบบ Build แนะนำ และ Tier List สำหรับ PvE/PvP",
      groups: [
        {
          title: "เนื้อหาที่ต้องมี",
          items: [
            "รายชื่อสายวิชา / สกิลทั้งหมด",
            "Build แนะนำ",
            "Tier List สำหรับ PvE / PvP",
            "วิธีปลดล็อกสกิล",
            "ไอเทมอัปเกรด / ตำราสกิล",
            "วิดีโอสาธิตคอมโบ",
          ],
        },
        {
          title: "ฟีเจอร์เสริม",
          items: [
            "ค้นหาสกิลตามชื่อ",
            "ค้นหาตามประเภท (ดาบ, ง้าว, หมัด, ธนู)",
          ],
        },
      ],
    },
    {
      id: "new-player",
      number: "03",
      kicker: "New Player Guide",
      title: "ไกด์สำหรับผู้เล่นใหม่",
      summary:
        "คีย์เวิร์ดที่คน Google เยอะที่สุด รวมวิธีเริ่มต้นและข้อควรทำ/ไม่ควรทำ",
      groups: [
        {
          title: "หัวข้อหลัก",
          items: [
            "เริ่มต้นเกมยังไง",
            "อาชีพไหนดีสำหรับผู้เริ่ม",
            "ระบบสำคัญในเกม (Cultivation, Qi, Dantian)",
            "วิธีฟาร์มของ / อัปของเร็ว",
            "สิ่งที่มือใหม่ควรทำ/ไม่ควรทำ",
          ],
        },
      ],
    },
    {
      id: "systems",
      number: "04",
      kicker: "Game System Index",
      title: "ระบบเกมทั้งหมด (Game System Index)",
      summary: "แยกหมวดชัดเจน เหมือนสารบัญองค์ความรู้",
      groups: [
        {
          title: "ระบบหลัก",
          items: [
            "ระบบต่อสู้ (Combat)",
            "ระบบฝึกพลัง / Cultivation",
            "ระบบการเดินทาง / Mount / Movement",
            "ระบบวรยุทธ์ลับ / Secret Arts",
            "ระบบค้าขาย / Crafting / Gathering",
            "ระบบ Co-op / Multiplayer",
            "ระบบ PvP / Jianghu Duel",
          ],
        },
      ],
    },
    {
      id: "items",
      number: "05",
      kicker: "Item Database",
      title: "อาวุธ / อุปกรณ์ / ไอเทม",
      summary: "ทำเป็นฐานข้อมูลค้นหาได้ พร้อมตัวกรองและสเตตัส",
      groups: [
        {
          title: "รายการหลัก",
          items: [
            "รายการอาวุธทั้งหมด",
            "สเตตัส + วิธีหา",
            "ไอเทมชุดเกราะ",
            "ชุดคอสตูม / Cosmetics",
            "ไอเทมหายาก / Epic drops",
            "วัตถุดิบ / ของเก็บในโลก",
          ],
        },
        {
          title: "ฟีเจอร์เสริม",
          items: ["ระบบค้นหา + ตัวกรอง (Rare / Stat / Type)"],
        },
      ],
    },
    {
      id: "map",
      number: "06",
      kicker: "Interactive Map",
      title: "แผนที่แบบ Interactive",
      summary: "จุดที่แฟนไซต์ต้องมี ติดหมุดข้อมูลสำคัญทั่วโลก",
      groups: [
        {
          title: "หมุดสำคัญ",
          items: [
            "ตำแหน่งบอสโลก",
            "ตำแหน่งหาของลับ",
            "ตำแหน่งลมหายใจพลังงาน / Qi nodes",
            "ตำรา / Secret Manuals ตามจุดต่าง ๆ",
            "ซอกลับในแผนที่",
          ],
        },
      ],
    },
    {
      id: "quests",
      number: "07",
      kicker: "Quest Database",
      title: "เควสต์ (Quest Database)",
      summary: "แตกหมวดชัดเจน พร้อมขั้นตอนและของรางวัล",
      groups: [
        {
          title: "หมวดเควสต์",
          items: [
            "เควสต์หลัก",
            "เควสต์รอง",
            "เควสต์ลับ",
            "วิธีปลดแมพ / ไอเทม",
            "ภาคต่อของเควสต์สำคัญ",
            "ทำแบบ FFXIV Guild Guide ก็ได้",
          ],
        },
      ],
    },
    {
      id: "events",
      number: "08",
      kicker: "Events Codex",
      title: "กิจกรรม & อีเวนต์",
      summary: "อัปเดตใกล้เคียงกับ Official ทั้งข่าวและ Twitch Drops",
      groups: [
        {
          title: "คอนเทนต์",
          items: [
            "ข่าวกิจกรรมล่าสุด",
            "Twitch Drops (มีแน่นอน)",
            "Event รายเดือน",
          ],
        },
      ],
    },
    {
      id: "pvp-pve",
      number: "09",
      kicker: "PvE / PvP",
      title: "เนื้อหา PvP / PvE",
      summary: "แยกคอนเทนต์สองฝั่งชัดเจน พร้อมแนวทางและ Tier List",
      groups: [
        {
          title: "PvE Guide",
          items: [
            "วิธีล้มบอส",
            "ลำดับการฟาร์ม",
            "ไกด์ลงดันเจี้ยน",
          ],
        },
        {
          title: "PvP Guide",
          items: [
            "ตัวละครไหนเด่นใน Duel",
            "คอมโบ PvP",
            "วิธีแก้อีกฝ่าย",
            "Tier list PvP",
          ],
        },
      ],
    },
    {
      id: "tools",
      number: "10",
      kicker: "Tools",
      title: "เครื่องมือเสริม (Tools)",
      summary:
        "ทำให้เว็บโดดเด่น: ตัวจำลองสกิลและตัวคำนวณค่าต่างๆ ด้วย React + JSON",
      groups: [
        {
          title: "เครื่องมือหลัก",
          items: [
            "ตัวจำลองสกิล (Skill Planner)",
            "ตัวคำนวณ Damage",
            "ตัวคำนวณค่าสถานะ",
          ],
        },
        {
          title: "ฟีเจอร์เสริม",
          items: ["บันทึก/แชร์ Build", "ปุ่มคัดลอกลิงก์แบ่งปัน"],
        },
      ],
    },
    {
      id: "news",
      number: "11",
      kicker: "News Hub",
      title: "ข่าวเกม (News Hub)",
      summary: "รวบรวมจากเว็บออฟฟิเชียลและโซเชียล อัปเดตต่อเนื่อง",
      groups: [
        {
          title: "หมวดข่าว",
          items: [
            "ข่าวเวอร์ชันอัปเดต",
            "แพทช์โน้ตแปลไทย (โคตรดึงคนเข้าเว็บ)",
            "ข่าวกิจกรรม Twitch / YouTube",
          ],
        },
      ],
    },
    {
      id: "cross",
      number: "12",
      kicker: "Cross-Progression",
      title: "คู่มือการเชื่อมบัญชี / Cross-Progression",
      summary: "ย่อยข้อมูลจากเว็บออฟฟิเชียลให้สั้น กระชับ และปลอดภัย",
      groups: [
        {
          title: "สิ่งที่ควรมี",
          items: [
            "ขั้นตอนเชื่อมบัญชีสั้น ๆ",
            "ภาพตัวอย่างปุ่ม/เมนู",
            "คำเตือน/เงื่อนไขที่ต้องรู้",
          ],
        },
      ],
    },
    {
      id: "community",
      number: "13",
      kicker: "Community",
      title: "คอมมูนิตี้",
      summary:
        "ทำให้เว็บมีสังคม แชร์ความรู้ และรีวิวร่วมกัน สร้างความต่อเนื่อง",
      groups: [
        {
          title: "ฟีเจอร์ชุมชน",
          items: [
            "ฟอรั่ม Q&A",
            "รีวิวสกิล / รีวิวคลาส",
            "อัปโหลด Build ของตัวเอง",
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2f3138] via-[#f3f1ed] to-[#f9f8f6] text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,180,106,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(95,118,160,0.16),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2f3138]/80 via-transparent to-transparent" />
      </div>

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-gradient-to-b from-[#0d1520]/80 via-[#0d1520]/60 to-transparent text-slate-100 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/60 bg-amber-200/10 text-lg text-amber-200">
              风
            </div>
            <div>
              <p className="kicker text-[10px]">Where Winds Meet</p>
              <p className="heading-contrast text-lg text-amber-100">
                Game Codex
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-200/90 md:flex">
            <a href="#master-index" className="hover:text-amber-200">
              สารบัญใหญ่
            </a>
            <a href="#lore" className="hover:text-amber-200">
              Lore
            </a>
              <a href="/#" className="hover:text-amber-200">
              Map
            </a>
            <a href="#martial" className="hover:text-amber-200">
              สายวิชา
            </a>
            <a href="#systems" className="hover:text-amber-200">
              ระบบเกม
            </a>
            <a href="#items" className="hover:text-amber-200">
              ไอเทม
            </a>
            <a
              href="#tools"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/10"
            >
              Tools
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="hero"
          className="relative isolate min-h-[65vh] overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f16]/60 via-transparent to-[#f3f1ed]/80" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-end px-6 pb-8 pt-32 text-center text-slate-100">
            <a
              href="#master-index"
              className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm text-white transition hover:border-amber-300/70 hover:text-amber-100"
            >
              ไปที่สารบัญใหญ่
            </a>
          </div>
        </section>

        <section
          id="master-index"
          className="relative mx-auto -mt-12 max-w-6xl px-6 pb-16 lg:-mt-20"
        >
          <div className="glass-panel rounded-3xl border border-black/10 p-6 shadow-2xl shadow-black/10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="kicker text-xs">14. สารบัญใหญ่ (Master Index)</p>
                <p className="heading-contrast text-2xl text-[#c7a35a]">
                  คลิกดูหมวดที่ต้องการ
                </p>
                <p className="mt-2 max-w-2xl text-sm text-slate-900/85">
                  โครงสร้างหลักของเว็บแฟนไซต์ตามที่กำหนด
                  ใช้เป็นจุดเริ่มทุกหมวดสำคัญ ทั้ง Lore, Martial Arts, ระบบเกม,
                  ไอเทม, แผนที่, เควสต์, PvE/PvP, Tools และข่าว
                </p>
              </div>
              <span className="rounded-full border border-amber-300/70 px-4 py-2 text-xs text-amber-100">
                Mockup + Content Plan
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {masterIndex.map((item, idx) => (
                <a
                  key={item.id}
                  href={
                    item.id === "attributes"
                      ? "/attributes"
                      : item.id === "inner-ways"
                        ? "/inner-ways"
                        : item.id === "mystic-skills"
                          ? "/mystic-skills"
                          : item.id === "gear-sets"
                            ? "/gear-sets"
                            : item.id === "tips"
                              ? "/tips"
                              : `#${item.id}`
                  }
                  className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-4 transition hover:-translate-y-1 hover:border-amber-200/70 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300/80 via-orange-400/70 to-sky-300/60"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                        {String(idx + 1).padStart(2, "0")}
                      </p>
                      <p className="heading-contrast text-xl text-[#c7a35a]">
                        {item.title}
                      </p>
                    </div>
                    <span className="text-lg text-amber-200">→</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-900/80">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
