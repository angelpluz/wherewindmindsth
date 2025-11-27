const heroImage =
  "https://media.online-station.net/images/2025/11/93a472b870fd72051f99f011f51ffb2f.jpg";

type InnerWay = {
  name: string;
  path: string;
  tags: string;
  weapons: string[];
  effect: string;
  image: string;
};

const innerWays: InnerWay[] = [
  {
    name: "Echoes of Oblivion",
    path: "Bamboocut - Wind",
    tags: "Pursuit, Martial Arts, Debuff",
    weapons: ["Infernal Twinblades", "Mortal Rope Dart"],
    effect:
      "Light Attack จะติดดีบัฟ Sin; ถ้าอยู่ใน Flamelash จะติด Karma แทน (เจาะกายภาพ 10% หรือเจาะต้านทาน Bamboocut 10%).",
    image:
      "https://media.online-station.net/images/2025/11/5c7263e03985cd1a30dda5073823a78b.jpg",
  },
  {
    name: "Riptide Reflex",
    path: "Bamboocut - Wind",
    tags: "Control, Buff",
    weapons: ["Infernal Twinblades", "Mortal Rope Dart"],
    effect:
      "ใช้ Control Skill โดนศัตรู ลดคูลดาวน์ Martial Arts 1 วินาที (ทำซ้ำได้ทุก 10 วินาที).",
    image:
      "https://media.online-station.net/images/2025/11/dd0231fedd4bb200a11a36de72e7ef47.jpg",
  },
  {
    name: "Breaking Point",
    path: "Bamboocut - Wind",
    tags: "Pursuit, Buff, Stacking",
    weapons: ["Infernal Twinblades", "Mortal Rope Dart"],
    effect:
      "คริติคอลใส่ศัตรู Exhausted จะติด Disintegration สะสมได้ 3 Stack; แต่ละ Stack เพิ่มเจาะเกราะกายภาพ 10 และ Critical DMG Bonus 5%.",
    image:
      "https://media.online-station.net/images/2025/11/d480805c7d4b634ee65c0b66d5035a0d.jpg",
  },
  {
    name: "Vendetta",
    path: "Bamboocut - Wind",
    tags: "Martial Arts, Buff, Recover",
    weapons: ["Infernal Twinblades", "Mortal Rope Dart"],
    effect: "เพิ่มระยะเวลา Bounty Order ของหอกเชือกและฟื้น Grace Tokens เพิ่มเติม.",
    image:
      "https://media.online-station.net/images/2025/11/2ab60af3ae75aef97cdcf02e72957522.jpg",
  },
  {
    name: "Sword Morph",
    path: "Bellstrike - Splendor",
    tags: "Attack, Martial Arts, Damage Boost",
    weapons: ["Nameless Sword", "Nameless Spear"],
    effect:
      "ชาร์จ Nameless Sword ขณะมี Qi Shield ปล่อยการโจมตีพิเศษ; ใช้ Endurance ส่วนเกินเพิ่มดาเมจได้สูงสุด 20%.",
    image:
      "https://media.online-station.net/images/2025/11/08c30221647cf5cfdc387b32d33ee5b5.jpg",
  },
  {
    name: "Battle Anthem",
    path: "Bellstrike - Splendor",
    tags: "Attack, Damage Boost",
    weapons: ["Nameless Sword", "Nameless Spear"],
    effect: "เพิ่มดาเมจสกิลชาร์จต่อบอส 10%.",
    image:
      "https://media.online-station.net/images/2025/11/6d3aaa828cb80d96c030e05908a0a706.jpg",
  },
  {
    name: "Mountain's Might",
    path: "Bellstrike - Splendor",
    tags: "Support, Martial Arts, Cost Reduction",
    weapons: ["Nameless Sword", "Nameless Spear"],
    effect:
      "สกิล Qiankun's Lock ของ Nameless Spear ได้บัฟ Endless Gale ลด Endurance 20% นาน 5 วิ.",
    image:
      "https://media.online-station.net/images/2025/11/b6c03e2a22935b04bf5372631822a0b8.jpg",
  },
  {
    name: "Wildfire Spark",
    path: "Bellstrike - Splendor",
    tags: "Support, Recover",
    weapons: ["Nameless Sword", "Nameless Spear"],
    effect: "คืน Endurance 3.5% จากที่ใช้ไป.",
    image:
      "https://media.online-station.net/images/2025/11/5f970613858ee6f2e3728645b3bd811c.jpg",
  },
  {
    name: "Sword Horizon",
    path: "Bellstrike - Umbra",
    tags: "Attack, Martial Arts, Pursuit",
    weapons: ["Strategic Sword", "Heavenquaker Spear"],
    effect:
      "กดสกิลซ้ำช่วงจบคอมโบ Strategic Sword เพื่อปล่อย Crisscrossing Swords; ล้าง Bleed 5 Stack เพื่อเบิร์ส Bleed รุนแรง.",
    image:
      "https://media.online-station.net/images/2025/11/28263eec25f5df6fad044c2361da467c.jpg",
  },
  {
    name: "Insightful Strike",
    path: "Bellstrike - Umbra",
    tags: "Attack, Damage Boost, Dmg Reduction",
    weapons: ["Strategic Sword", "Heavenquaker Spear"],
    effect:
      "สร้าง Affinity DMG เพิ่ม Focus; เมื่อเต็มเข้าสู่ Concentration 10 วิ เพิ่ม Affinity DMG 10% และมีโอกาส 5% ลดดาเมจที่ได้รับ 40%.",
    image:
      "https://media.online-station.net/images/2025/11/1b352e1307d9d8d69791015ec1c557e7.jpg",
  },
  {
    name: "Adaptive Steel",
    path: "Bellstrike - Umbra",
    tags: "Attack, Support, Buff",
    weapons: ["Strategic Sword", "Heavenquaker Spear"],
    effect: "ได้รับ Martial Skill ตามอาวุธที่ถืออยู่ เพิ่มความยืดหยุ่นของคอมโบ.",
    image:
      "https://media.online-station.net/images/2025/11/2d9a0e18f1b11158695313ca678fb4d0.jpg",
  },
  {
    name: "Wolfchaser's Art",
    path: "Bellstrike - Umbra",
    tags: "Martial Arts, Buff",
    weapons: ["Strategic Sword", "Heavenquaker Spear"],
    effect:
      "ลดจำนวนคอมโบที่ต้องทำเพื่อได้บัฟ Sorrow Without Wine; ตีบอสที่ติด Bleed มีโอกาสเพิ่มคอมโบ 1.",
    image:
      "https://media.online-station.net/images/2025/11/51f1a1076d92e8fdae0782a90f4421e2.jpg",
  },
  {
    name: "Seasonal Edge",
    path: "General",
    tags: "Attack, Buff, Damage Boost",
    weapons: ["Universal"],
    effect: "ใช้ Dual-Weapon Skill จะสุ่มได้โบนัสโจมตีหนึ่งอย่างจากสี่แบบ.",
    image:
      "https://media.online-station.net/images/2025/11/7d9a2e2c6d0c60dd2ae117e4ac09a78f.jpg",
  },
  {
    name: "Morale Chant",
    path: "General",
    tags: "Attack, Buff, Stacking",
    weapons: ["Universal"],
    effect:
      "โจมตีหรือฮีลมีโอกาส 80% ได้ Yi River 1 Stack (คำนวณทุก 2 วิ) เพิ่มดาเมจกายภาพ/ฮีล 1% นาน 8 วิ สะสม 5 ครั้ง.",
    image:
      "https://media.online-station.net/images/2025/11/718b24216d4d1b31d381fab68429c60b.jpg",
  },
  {
    name: "Divine Roulette",
    path: "General",
    tags: "Counter, Buff, Damage Boost",
    weapons: ["Universal"],
    effect:
      "Deflection สำเร็จจะสุ่มบัฟเสริมสกิลถัดไป นาน 10 วิ ทำซ้ำได้ทุก 30 วิ.",
    image:
      "https://media.online-station.net/images/2025/11/c1bf10dcb5c23933008e985c5a42a2cf.jpg",
  },
  {
    name: "Fury Harvest",
    path: "General",
    tags: "Support, Mystic Arts, Recover",
    weapons: ["Universal"],
    effect: "การกระทำฟื้นฟูบางอย่างมีโอกาส 50% ได้ Vitality โบนัสเพิ่ม 1.",
    image:
      "https://media.online-station.net/images/2025/11/e1f59c1e7a1f52dbde5f41638cd2207e.jpg",
  },
  {
    name: "Vital Leech",
    path: "General",
    tags: "Pursuit, Recover",
    weapons: ["Universal"],
    effect:
      "ใช้ Exhaustion Execution Skill จะฟื้น HP 8% ของความเสียหายที่ทำได้จากสกิลนั้น.",
    image:
      "https://media.online-station.net/images/2025/11/e5ccb76fb7cb2270674c8a5a5ec4d193.jpg",
  },
  {
    name: "Bitter Seasons",
    path: "General",
    tags: "Attack, Debuff, Stacking",
    weapons: ["Universal"],
    effect:
      "ทำดาเมจมีโอกาส 10% ติด Poison 5 วิ สร้างดาเมจต่อเนื่อง; ลด Physical Defense 0.6% นาน 10 วิ สะสม 5 ครั้ง.",
    image:
      "https://media.online-station.net/images/2025/11/2872c0f66a3b191c6f2d57d9ca91d2d0.jpg",
  },
  {
    name: "Envigorated Warrior",
    path: "General",
    tags: "Attack, Buff, Damage Boost",
    weapons: ["Universal"],
    effect:
      "เพิ่มดาเมจและฮีล 5% แต่จะปิด 5 วิ ทันทีที่ถูกโจมตี และติด Cage ทำให้โดนดาเมจเพิ่ม 5%.",
    image:
      "https://media.online-station.net/images/2025/11/15066aa25a8c1b37baef1be44102cc15.jpg",
  },
  {
    name: "Evasive Charge",
    path: "General",
    tags: "Cost Reduction, Recover",
    weapons: ["Nameless Sword", "Nameless Spear"],
    effect:
      "หลัง Perfect Dodge มีโอกาส 50% ได้ Endurance ที่ใช้ไปคืน 100%.",
    image:
      "https://media.online-station.net/images/2025/11/6eb51dde9e74a90e083d4e6db67d4cef.jpg",
  },
  {
    name: "Fivefold Bleed",
    path: "General",
    tags: "Attack, Damage, Stacking",
    weapons: ["Universal"],
    effect:
      "ทำดาเมจมีโอกาส 10% ติด Weeping Blood 1 Stack นาน 5 วิ สะสม 5 ครั้ง; ครบ 5 จะเบิร์ส Piercing Damage.",
    image:
      "https://media.online-station.net/images/2025/11/3039dc54d0652440aaa7108d3231847e.jpg",
  },
  {
    name: "Shadow Assault",
    path: "General",
    tags: "Attack, Mystic Arts, Damage Boost",
    weapons: ["Universal"],
    effect: "เพิ่มระยะสูงสุดของ Touch of Death 1.5 หน่วย.",
    image:
      "https://media.online-station.net/images/2025/11/90235ca60a9804064efc3ce3f9145252.jpg",
  },
  {
    name: "Steadfast Stance",
    path: "General",
    tags: "Defense, Control Resistance",
    weapons: ["Universal"],
    effect: "ลดการติด Stagger เมื่อถูกโจมตีจากศัตรูระดับต่ำกว่าบอส.",
    image:
      "https://media.online-station.net/images/2025/11/b925a2baf477c81b3bc7100dbb77171e.jpg",
  },
  {
    name: "Evening Snow",
    path: "General",
    tags: "Support, Recover",
    weapons: ["Universal"],
    effect:
      "เริ่มสู้ภายใน 12 วิ ถ้า HP ต่ำกว่า 60% จะได้ Snow Vision 4 วิ ฟื้น HP 2%+600 ต่อวิ ทำงานได้ทุก 300 วิ.",
    image:
      "https://media.online-station.net/images/2025/11/d036c287d3ea20787d8c1e9dac79f23d.jpg",
  },
  {
    name: "Wind Beneath Wings",
    path: "General",
    tags: "Support, Mystic Arts, Recover",
    weapons: ["Universal"],
    effect:
      "ลด Endurance ใช้ Skywalk Dash 10%; ลงพื้นเพิ่มความเร็วเคลื่อนที่ 30% นาน 3 วิ; ชนะศัตรูฟื้น HP 1% Max HP + 1,000.",
    image:
      "https://media.online-station.net/images/2025/11/27f08b9b274421cfe8feaace02e1089d.jpg",
  },
  {
    name: "Royal Remedy",
    path: "Silkbind - Deluge",
    tags: "Support, Martial Arts, Recovery",
    weapons: ["Panacea Fan", "Soulshade Umbrella"],
    effect:
      "เพิ่มฮีลของร่างโคลนน้ำจาก Cloudburst Healing 10%; ยืนในร่างโคลนได้รับ Dewdrop เพิ่มเมื่อโดน HoT.",
    image:
      "https://media.online-station.net/images/2025/11/8414c5cff337ebcbcb600200dcc7b15f.jpg",
  },
  {
    name: "Mending Loom",
    path: "Silkbind - Deluge",
    tags: "Support, Buff, Recover",
    weapons: ["Panacea Fan", "Soulshade Umbrella"],
    effect:
      "ใช้ Echoing Grow จะฟื้น Dewdrops 5 ทันที และฮีลเพิ่ม 10% ของ Max HP สำหรับ Dewdrops ทุก 100 หน่วยที่ใช้.",
    image:
      "https://media.online-station.net/images/2025/11/cee6b4f943c4eb819c85b6327d37e3e1.jpg",
  },
  {
    name: "Esoteric Revival",
    path: "Silkbind - Deluge",
    tags: "Support, Buff, Recover",
    weapons: ["Panacea Fan", "Soulshade Umbrella"],
    effect:
      "เพิ่มฮีลสกิล Resurrection ของ Panacea Fan 50% สำหรับเป้าหมายที่เพิ่งถูกชุบชีวิต.",
    image:
      "https://media.online-station.net/images/2025/11/74797193052818ad16e5133a24a544fb.jpg",
  },
  {
    name: "Restoring Blossom",
    path: "Silkbind - Deluge",
    tags: "Support, Buff, Stacking",
    weapons: ["Panacea Fan", "Soulshade Umbrella"],
    effect:
      "ฮีลติดคริติคอลจะติดบัฟ Nurturing 1 Stack นาน 3 วิ เพิ่มการฮีลที่ได้รับ 2% สะสม 3 ครั้ง.",
    image:
      "https://media.online-station.net/images/2025/11/83ae7341691600fdf8b81ad6b38b90c7.jpg",
  },
  {
    name: "Blossom Barrage",
    path: "Silkbind - Jade",
    tags: "Attack, Martial Arts, Damage Boost",
    weapons: ["Inkwell Fan", "Ninefold Umbrella"],
    effect:
      "Spring Sorrow ของ Vernal Umbrella สะสมได้ 2 Stack; ตีโดนติด Combo effect เพิ่มดาเมจจาก Ballistic Skills 10% นาน 8 วิ.",
    image:
      "https://media.online-station.net/images/2025/11/0faed6538045d2fa156c5399ab52527e.jpg",
  },
  {
    name: "Star Reacher",
    path: "Silkbind - Jade",
    tags: "Attack, Pursuit, Buff",
    weapons: ["Inkwell Fan", "Ninefold Umbrella"],
    effect:
      "โจมตีศัตรูให้ลอยขึ้นฟ้า จะได้โบนัสโจมตีกายภาพ 10% นาน 8 วิ.",
    image:
      "https://media.online-station.net/images/2025/11/2f648dd13cbc8c5b830ffde4fe3e88ae.jpg",
  },
  {
    name: "Thunderous Bloom",
    path: "Silkbind - Jade",
    tags: "Damage Boost, Buff",
    weapons: ["Inkwell Fan", "Ninefold Umbrella"],
    effect:
      "เคลื่อนที่เกิน 15 ม. ใน 3 วิ จะได้ Spring Thunder; การโจมตีหนัก/กลางอากาศ 3 ครั้งถัดไปได้โบนัสดาเมจ 15% (คูลดาวน์ 15 วิ).",
    image:
      "https://media.online-station.net/images/2025/11/2f2fe483a9806f8c1259eeaf1029f60d.jpg",
  },
  {
    name: "Flying Gourds",
    path: "Silkbind - Jade",
    tags: "Martial Arts, Support",
    weapons: ["Inkwell Fan", "Ninefold Umbrella"],
    effect:
      "เพิ่ม Charges ของ Peak's Springless Silence เป็น 2 แต่เพิ่มคูลดาวน์อีก 3 วิ.",
    image:
      "https://media.online-station.net/images/2025/11/6f39dbe44b5af87d44f4f87638ae98f7.jpg",
  },
  {
    name: "Exquisite Scenery",
    path: "Stonesplit - Might",
    tags: "Defense, Martial Arts, Counter",
    weapons: ["Thundercry Blade", "Stormbreaker Spear"],
    effect:
      "ป้องกันด้วย Thundercry Blade แล้วสวนกลับทันที; ใช้ Perception/Heavy ปล่อย Charged Heavy ได้เลย (คูลดาวน์ 10 วิ). โจมตีด้วย Varied Combo ฟื้น Battle Will 1 แถบ.",
    image:
      "https://media.online-station.net/images/2025/11/938d051294e7498ff2c34b83f610f854.jpg",
  },
  {
    name: "Trapped Beast",
    path: "Stonesplit - Might",
    tags: "Defense, Buff, Recover",
    weapons: ["Thundercry Blade", "Stormbreaker Spear"],
    effect:
      "HP < 30% จะเปิด Cornered Beast สร้างโล่ดูดดาเมจ 30% Max HP นาน 4 วิ (คูลดาวน์ 300 วิ).",
    image:
      "https://media.online-station.net/images/2025/11/8956f3bf89b1b5553f8985605885c6ae.jpg",
  },
  {
    name: "Art of Resistance",
    path: "Stonesplit - Might",
    tags: "Defense, Buff",
    weapons: ["Thundercry Blade", "Stormbreaker Spear"],
    effect: "เพิ่มระยะเวลาของโล่ HP และบัฟที่สร้างโล่อีก 4 วิ.",
    image:
      "https://media.online-station.net/images/2025/11/18bf9d7547b8911af46517dd87dbfb26.jpg",
  },
  {
    name: "Rock Solid",
    path: "Stonesplit - Might",
    tags: "Defense, Martial Arts, DMG Reduction",
    weapons: ["Thundercry Blade", "Stormbreaker Spear"],
    effect:
      "Roar of Storm เพิ่ม DMG Reduction (ยั่วยุบอส +20%, ศัตรูทั่วไป +5%); ระหว่างเอฟเฟกต์ดาเมจที่ทำลดลง 10%.",
    image:
      "https://media.online-station.net/images/2025/11/696f5afaa64e0cf1cb9559927a75d635.jpg",
  },
];

export default function InnerWaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1320] via-[#101622] to-[#0f1520] text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0f1520]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
          <p className="kicker text-sm text-amber-100">Where Winds Meet</p>
          <h1 className="heading-contrast text-4xl md:text-5xl text-[#d6b16c]">
            Inner Ways Guide
          </h1>
          <p className="mt-3 max-w-3xl text-slate-100/85">
            สรุปกำลังภายใน (Inner Ways) คือ Passive Skill ที่ปลดล็อกโบนัสและกลไกเพิ่มพลังให้สายอาวุธ
            พร้อมวิธีอัปเกรด และตัวอย่างเอฟเฟกต์เด่น ๆ
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="#what"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/20"
            >
              กำลังภายในคืออะไร
            </a>
            <a
              href="#upgrade"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/20"
            >
              วิธีอัปเกรด
            </a>
            <a
              href="#list"
              className="rounded-full border border-amber-300/70 px-4 py-2 text-amber-100 hover:bg-amber-200/20"
            >
              รายการ Inner Ways
            </a>
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl space-y-10 px-6 py-12">
        <section
          id="what"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
        >
          <h2 className="heading-contrast text-2xl text-[#d6b16c]">กำลังภายใน (Inner Ways) คือ?</h2>
          <p className="mt-3 text-slate-100/85">
            Inner Ways คือ Passive Skill ที่เพิ่มบัฟติดตัวหรือเอฟเฟกต์ตามเงื่อนไข
            ทำงานได้ดีที่สุดเมื่อจับคู่กับ Martial Arts ใน Path เดียวกัน
            รวมถึงมีแบบ General Path ที่ใช้ได้กับทุกสายการเล่น
          </p>
          <p className="mt-2 text-slate-100/80">
            บาง Inner Way เปิดเมคคานิกใหม่ เช่น เสริมคอมโบ, เพิ่มเจาะเกราะ, ลดคูลดาวน์ หรือเพิ่มการฟื้นฟู
            จึงเป็นชิ้นส่วนสำคัญของบิลด์ทุกสาย
          </p>
        </section>

        <section
          id="upgrade"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
        >
          <h2 className="heading-contrast text-2xl text-[#d6b16c]">
            อยากอัปเกรดกำลังภายในต้องทำยังไง?
          </h2>
          <ul className="mt-3 space-y-2 text-slate-100/85">
            <li>ปลดระบบ Breakthrough เมื่อเล่น Solo Mode ถึงเลเวล 4.</li>
            <li>
              การอัป Tiers ใช้ Notes/Inner Way Advance Items ที่ตรงกับชื่อ Inner Way เช่น Echoes of
              Oblivion ต้องใช้ Echoes of Oblivion: Notes.
            </li>
            <li>
              หา Notes เพิ่มได้จาก Tips Exchange โดยแลก Bookplates (สุ่มความหายากและ Path).
            </li>
            <li>
              ใช้ Inner Way Conversion เพื่อย้ายการอัปเกรดจากตัวเก่าไปตัวใหม่หากเปลี่ยนสาย.
            </li>
          </ul>
        </section>

        <section
          id="list"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="kicker text-xs">ตัวอย่าง Inner Ways เด่น</p>
              <h3 className="heading-contrast text-2xl text-[#d6b16c]">เลือกดู Path + เอฟเฟกต์</h3>
            </div>
            <a
              href="https://wherewindsmeet.wiki.fextralife.com/Inner+Ways"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-amber-100 underline decoration-amber-300/70 underline-offset-4 hover:text-amber-200"
            >
              แหล่งข้อมูลเต็ม
            </a>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {innerWays.map((inner) => (
              <div
                key={inner.name}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-4"
              >
                <div className="flex gap-3">
                  <img
                    src={inner.image}
                    alt={inner.name}
                    className="h-16 w-12 rounded-md border border-white/10 object-cover"
                  />
                  <div className="flex-1">
                    <p className="heading-contrast text-lg text-[#d6b16c]">{inner.name}</p>
                    <p className="text-xs text-slate-100/70">{inner.path}</p>
                    <p className="text-xs text-slate-100/70">{inner.tags}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-100/85">{inner.effect}</p>
                <p className="mt-2 text-xs text-slate-200/80">
                  เหมาะกับ: {inner.weapons.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
          <h3 className="heading-contrast text-lg text-[#d6b16c]">อ้างอิง</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-100/85">
            <li>
              <a
                href="https://game8.co/games/Where-Winds-Meet/archives/564726"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-amber-300/70 hover:text-amber-100"
              >
                game8.co: Where Winds Meet Inner Ways
              </a>
            </li>
            <li>
              <a
                href="https://wherewindsmeet.wiki.fextralife.com/Inner+Ways"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-amber-300/70 hover:text-amber-100"
              >
                wherewindsmeet.wiki.fextralife.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
