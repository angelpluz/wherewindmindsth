type MysticSkill = {
  name: string;
  tags: string;
  effect: string;
};

type MysticCategory = {
  id: string;
  title: string;
  items: MysticSkill[];
};

const hero =
  "https://thisisgamethailand.com/wp-content/uploads/2025/11/Where-Winds-Meet-Mystic-Skills-List-0M.jpg";

const categories: MysticCategory[] = [
  {
    id: "offensive",
    title: "Offensive Mystic Skills",
    items: [
      {
        name: "Tai Chi",
        tags: "Puzzle / Tai Chi, Shield Breaker",
        effect:
          "รวบรวมใบไม้สร้างระลอกคลื่น ดึงและหมุนศัตรู เหมาะกับศัตรูถือโล่",
      },
      {
        name: "Meridian Touch",
        tags: "Puzzle / Acupoint Strike, Qi Breaking",
        effect:
          "เลือกจุดชีพจรเพื่อสร้างผลพิเศษ มีโอกาสตรึงและทำลายจุดสำคัญ (ใช้ไม่ได้กับศัตรูระดับสูง)",
      },
      {
        name: "Celestial Seize",
        tags: "Puzzle / Take Item, Disarm",
        effect:
          "ดึงวัตถุและของในกล่องจากระยะไกล ปลดอาวุธศัตรูและสวนกลับด้วยอาวุธของพวกเขา",
      },
      {
        name: "Cloud Steps",
        tags: "Puzzle / Lightness Skill, Undercut",
        effect:
          "กระโดดสูงพุ่งใส่ศัตรูหรือไปยังจุดที่เลือก มีประสิทธิภาพกับทหารม้า",
      },
      {
        name: "Lion’s Roar",
        tags: "Area Debuff / Knockback",
        effect:
          "ตีระฆังสร้างดาเมจ ก่อนปล่อยเสียงคำราม 14 ครั้ง รับ 15% Damage Reduction และ Fortitude",
      },
      {
        name: "Leaping Toad",
        tags: "Area Debuff / Damage",
        effect:
          "กระโดดแล้วพุ่งโจมตี กดซ้ำสะสมพิษ Toad Venom ครั้งที่สามเป็น Golden Toad Crash ดาเมจวงกว้าง",
      },
      {
        name: "Ghost Bind",
        tags: "Area DMG / Control, Qi Breaking",
        effect:
          "พุ่งตรึงศัตรูได้สูงสุด 6 เป้าหมายและทำลายจุดสำคัญ (ยกเว้นศัตรูแข็งแกร่งมาก)",
      },
      {
        name: "Guardian Palm",
        tags: "Area DMG / Damage",
        effect:
          "ทุบพื้น AoE หากใช้จากความสูง 3–5 เมตร จะเป็น Lamp Light เพิ่มพลังปะทะและผลักศัตรู",
      },
      {
        name: "Flaming Meteor",
        tags: "Area DMG / Damage",
        effect:
          "พุ่ง-กระโดด-ขว้างหอกเพลิงระเบิด ก่อนพุ่งชนเหมือนดาวตก ได้ Damage Reduction 15% + Super Armor",
      },
      {
        name: "Talon Strike",
        tags: "Single-target Control / Break Defense",
        effect: "ฟาดเปิดป้องกัน ตามด้วยโจมตี 3 ครั้ง",
      },
      {
        name: "Yaksha Rush",
        tags: "Single-target Control / Break Defense",
        effect: "พุ่งฟัน ทำลายป้องกันและฟาดศัตรูลอยขึ้น",
      },
      {
        name: "Free Morph",
        tags: "Single-target Control / Combo",
        effect:
          "เตะต่อเนื่อง ดีดศัตรูขึ้นกลางอากาศแล้วทุ่มลงพื้นแบบ AoE",
      },
      {
        name: "Wolflike Frenzy",
        tags: "Single-target Control / Combo, Undercut",
        effect:
          "โค่นศัตรูล้มก่อนต่อย-ตวัด-ฟาดรัว เหมาะกับศัตรูทหารม้า",
      },
      {
        name: "Soaring Spin",
        tags: "Single-target Control / Shift",
        effect: "แทงพลังชี่แล้วหมุนฟันต่อเนื่อง ลดประสิทธิภาพการฮีลศัตรู",
      },
      {
        name: "Dragon’s Breath",
        tags: "Single-target Burst / Burn",
        effect:
          "ดื่มสุราพ่นไฟ 2 ฮิต สถานะ Ignition + Damage Reduction 15% + Fortitude",
      },
      {
        name: "Drunken Poet",
        tags: "Single-target Burst / Damage",
        effect:
          "เข้าสู่สถานะเมา กดซ้ำสูงสุด 5 ครั้ง ใช้ Vitality 6 ต่อการโจมตี",
      },
      {
        name: "Dragon Head",
        tags: "Single-target Burst / Damage",
        effect:
          "รวบใบไม้สร้างหัวมังกรพุ่งกระแทก รับ Damage Reduction 15% + Super Armor",
      },
      {
        name: "Blinding Mist",
        tags: "Support / Assassination",
        effect:
          "พ่นหมอกพิษบังวิสัยทัศน์ 5 วิ เปิดให้ใช้ Touch of Death ปิดฉาก (ไม่ทำงานกับศัตรูแข็งแกร่ง)",
      },
      {
        name: "Serene Breeze",
        tags: "Support / Break Control",
        effect:
          "ฟื้นตัวจากการถูกคุมเร็ว ลดการฟื้น Endurance ของศัตรู 50% 8 วิ",
      },
      {
        name: "Golden Body",
        tags: "Support / Shield",
        effect: "สร้างเกราะ เพิ่มการฟื้น Qi พร้อม Fortitude และลดดาเมจ 15%",
      },
      {
        name: "Ghostly Steps",
        tags: "Support / Dodge",
        effect:
          "ลดค่า Endurance การหลบ 40% เพิ่มช่วง Untargetable เล็กน้อย",
      },
      {
        name: "Honking Havoc",
        tags: "Support / Breath-Holding",
        effect:
          "ใช้ห่านโจมตีรอบตัว ติด Breath-hold 6 วิ ก่อนสร้างดาเมจรอบเล็กอีกครั้ง",
      },
      {
        name: "Glow of Fireflies",
        tags: "Support / Lightning",
        effect: "เรียกหิ่งห้อยให้แสงสว่างรอบตัว 30 วิ",
      },
      {
        name: "Veil of Stillness",
        tags: "Support / Stealth",
        effect: "ทำให้ตรวจจับได้ยากลงชั่วคราว",
      },
    ],
  },
  {
    id: "general",
    title: "General Mystic Skills",
    items: [
      {
        name: "Divine Counter",
        tags: "Counter",
        effect:
          "หลังป้องกันโจมตีจะสวนกลับและลดการฟื้น Endurance ศัตรู 50% นาน 8 วิ",
      },
      {
        name: "Star Shift",
        tags: "Assist Deflection",
        effect: "ใช้ Insight เบี่ยงการโจมตีก่อนจะโดน",
      },
      {
        name: "Still Waters",
        tags: "Enhance",
        effect:
          "ขณะกลั้นหายใจ ลดความเร็วศัตรูรอบตัว 75% แต่ใช้ Endurance ทุก 0.1 วิ",
      },
      {
        name: "Touch of Death",
        tags: "Passive / Assassination",
        effect:
          "พุ่งเข้าจุดตายด้านหลัง สังหารศัตรูอ่อนแอได้ทันทีเมื่อเข้าเงื่อนไข",
      },
      {
        name: "Wind Sense",
        tags: "Passive / Observe",
        effect: "ไฮไลต์วัตถุหรือบุคคลที่น่าสนใจในพื้นที่",
      },
    ],
  },
  {
    id: "movement",
    title: "Movement Mystic Skills",
    items: [
      {
        name: "Thousand-Mile Flight",
        tags: "Lightness Skill",
        effect: "พุ่งทะยานกลางอากาศเหมือนมังกร",
      },
      {
        name: "Meteor Flight",
        tags: "Lightness Skill",
        effect: "พุ่งตัวราวอุกกาบาต ถือหอกทะยานตามลม",
      },
      {
        name: "Fan Glider",
        tags: "Lightness Skill",
        effect: "ร่อนกลางอากาศด้วยพัด เดินทางได้อิสระ",
      },
      {
        name: "Wind Rider",
        tags: "Lightness Skill",
        effect: "ขี่สายลมล่องลอยเหนือพื้น",
      },
      {
        name: "Wallstride – Swiftstride",
        tags: "Wall Run",
        effect: "ปรับปรุงการวิ่งบนกำแพง กระโดดข้ามกำแพงได้",
      },
      {
        name: "Wallstride – Shadowdash",
        tags: "Wall Run",
        effect: "เพิ่มความคล่องตัวและวิ่งบนผิวน้ำ",
      },
      {
        name: "Threefold Skywalk",
        tags: "Movement Sub-type",
        effect: "กระโดดกลางอากาศได้ 3 ครั้งต่อเนื่อง",
      },
      {
        name: "Skywalk Dash",
        tags: "Movement Sub-type",
        effect: "หลังใช้ Threefold Skywalk สามารถพุ่งต่อได้",
      },
      {
        name: "Mighty Drop",
        tags: "Movement Sub-type",
        effect: "หยุดกลางอากาศและลงจอดเร็ว",
      },
      {
        name: "Safe Mighty Drop",
        tags: "Movement Sub-type",
        effect: "ลงจอดแบบ Mighty Drop แต่กันดาเมจล้มและโรคภัย",
      },
      {
        name: "Abyss Dive",
        tags: "Diving",
        effect: "ดำน้ำและว่ายใต้น้ำ",
      },
    ],
  },
];

export default function MysticSkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1320] via-[#101622] to-[#0f1520] text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${hero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0f1520]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
          <p className="kicker text-sm text-amber-100">Where Winds Meet</p>
          <h1 className="heading-contrast text-4xl md:text-5xl text-[#d6b16c]">
            Mystic Skills List
          </h1>
          <p className="mt-3 max-w-3xl text-slate-100/85">
            สรุปรายชื่อ Mystic Skills ครบ 3 หมวด: Offensive, General, Movement
            พร้อมแท็กและเอฟเฟกต์ ใช้เป็นคู่มือเลือกสกิลให้เหมาะสถานการณ์
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="#offensive"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/20"
            >
              Offensive
            </a>
            <a
              href="#general"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/20"
            >
              General
            </a>
            <a
              href="#movement"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/20"
            >
              Movement
            </a>
            <a
              href="/"
              className="rounded-full border border-white/40 px-4 py-2 text-white hover:border-amber-300/70 hover:text-amber-100"
            >
              กลับหน้าแรก
            </a>
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl space-y-8 px-6 pb-12">
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="kicker text-xs">Mystic Skills</p>
                <h2 className="heading-contrast text-2xl text-[#d6b16c]">
                  {cat.title}
                </h2>
              </div>
              <span className="rounded-full border border-amber-300/60 px-4 py-2 text-xs text-amber-100">
                {cat.items.length} สกิล
              </span>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {cat.items.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <p className="heading-contrast text-lg text-[#d6b16c]">
                    {skill.name}
                  </p>
                  <p className="text-xs text-slate-100/70">{skill.tags}</p>
                  <p className="mt-2 text-sm text-slate-100/85">
                    {skill.effect}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
