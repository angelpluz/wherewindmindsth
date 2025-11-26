export const attributes = [
  {
    name: "Bellstrike",
    tone: "น้ำเงิน",
    focus: "เอาตัวรอดสูง โล่/หลบหลีก",
    weapons: ["Nameless Sword", "Strategic Sword", "Heavenquaker Spear", "Nameless Spear"],
    color: "from-sky-300/70 to-slate-400/60",
  },
  {
    name: "Stoneplit",
    tone: "น้ำตาล",
    focus: "รับดาเมจ ยืนชน",
    weapons: ["Stormbreaker Spear", "Thundercry Blade"],
    color: "from-amber-300/70 to-amber-600/60",
  },
  {
    name: "Bamboocut",
    tone: "ม่วง",
    focus: "ความคล่องตัว สูงสปีด",
    weapons: ["Infernal Twinblades", "Mortal Rope Dart"],
    color: "from-violet-300/70 to-purple-600/60",
  },
  {
    name: "Silkbind",
    tone: "เขียว",
    focus: "ซัพพอร์ต ฮีล/บัฟ",
    weapons: ["Panacea Fan", "Inkwell Fan", "Soulshade Umbrella", "Vernal Umbrella"],
    color: "from-emerald-300/70 to-teal-500/60",
  },
];

export const innerWays = [
  { weapon: "Nameless Sword", inner: "Sword Morph", rarity: "ทอง" },
  { weapon: "Strategic Sword", inner: "Sword Horizon", rarity: "ทอง" },
  { weapon: "Heavenquaker Spear", inner: "Wolfchaser's Art", rarity: "ม่วง" },
  { weapon: "Nameless Spear", inner: "Mountain's Might", rarity: "ม่วง" },
  { weapon: "Stormbreaker Spear", inner: "Rock Solid", rarity: "ม่วง" },
  { weapon: "Thundercry Blade", inner: "Exquisite Scenery", rarity: "ทอง" },
  { weapon: "Infernal Twinblades", inner: "Echoes of Oblivion", rarity: "ทอง" },
  { weapon: "Mortal Rope Dart", inner: "Vendetta", rarity: "ม่วง" },
  { weapon: "Panacea Fan", inner: "Royal Remedy / Esoteric Revival", rarity: "ทอง / ม่วง" },
  { weapon: "Inkwell Fan", inner: "Flying Gourds", rarity: "ม่วง" },
  { weapon: "Soulshade Umbrella", inner: "Mending Loom", rarity: "ม่วง" },
  { weapon: "Vernal Umbrella", inner: "Blossom Barrage", rarity: "ทอง" },
];

export const builds = [
  {
    name: "Balance Build",
    combo: "Nameless Sword + Nameless Spear",
    description: "ครบเครื่อง สร้างโล่ + CC + เบิร์ส เหมาะเริ่มเกมและบอสไฟต์ทั่วไป",
    inners: "Sword Morph + Mountain's Might + Breaking Point + Battle Anthem",
    stats: "Critical",
    notes: "Battle Anthem เน้นเฉพาะบอสไฟต์",
  },
  {
    name: "DoT Build",
    combo: "Strategic Sword + Heavenquaker Spear",
    description: "สายดีบัฟ/เผา DOT วางดีบัฟแล้วล้างเพื่อเบิร์สดาเมจเร็ว",
    inners: "Sword Horizon + Wolfchaser's Art + Insightful Strike + Bitter Seasons",
    stats: "Affinity",
    notes: "",
  },
  {
    name: "Tank Build",
    combo: "Thundercry Blade + Stormbreaker Spear",
    description: "ยืนชนบอส สร้างโล่ ยั่วยุ ลดเกราะ ดาเมจต่อฮิตหนักแต่ช้า",
    inners: "Exquisite Scenery + Art of Resistance + Trapped Beast + Battle Anthem",
    stats: "MaxHP",
    notes: "Battle Anthem ใช้เมื่อบอสไฟต์",
  },
  {
    name: "Melee DPS",
    combo: "Infernal Twinblades + Mortal Rope Dart",
    description: "ความถี่ฮิตสูง คล่องตัว สร้างดาเมจต่อเนื่องจาก Rodents และคอมโบ",
    inners: "Echoes of Oblivion + Morale Chant + Vendetta + Breaking Point",
    stats: "Critical",
    notes: "",
  },
  {
    name: "Range DPS",
    combo: "Inkwell Fan + Vernal Umbrella",
    description: "ดาเมจระยะไกล ขัดจังหวะดี มีเบิร์สกลางอากาศ สนับสนุนจากร่ม",
    inners: "Blossom Barrage + Morale Chant + Battle Anthem + Fivefold Bleed",
    stats: "Critical",
    notes: "Battle Anthem ใช้เฉพาะบอสไฟต์",
  },
  {
    name: "Full Support",
    combo: "Panacea Fan + Soulshade Umbrella",
    description: "ชุดซัพพอร์ต/ฮีลที่ดีที่สุด เล่นทีมได้ทั้งฮีลเดี่ยว กลุ่ม และชุบ",
    inners: "Royal Remedy + Restoring Blossom + Esoteric Revival + Mending Loom",
    stats: "Critical",
    notes: "Esoteric Revival เลือกใช้เมื่อเล่นปาร์ตี้",
  },
];

export const moraleNote =
  "Morale Chant เก่งจริง แต่จะเห็นผลชัดเมื่อปลดอย่างน้อยขั้น 3 และจะโดดเด่นมากที่ขั้น 6 ช่วงต้นเกมอาจยังไม่รู้สึกแรง";
