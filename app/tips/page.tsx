type Tip = {
  title: string;
  detail: string;
};

const hero =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80";

const tips: Tip[] = [
  {
    title: "หาของอัป Mystic Skill",
    detail:
      "เข้า Joy Battle > Wanderling Part > Challenge ใช้ Energy น้อยและประหยัด currency ที่สุดสำหรับวัตถุดิบ Mystic Skill.",
  },
  {
    title: "ไอคอนแมลงบนแผนที่",
    detail:
      "แมลงใช้เพิ่ม Max End, Vitality, Max HP, Max Physical Attack. คุยเชง (ริมน้ำ) เลือก Innerway Manual หรือคุยไป๋ G ในไคเฟิงเลือก Audity Exchange (แมลงชิงเหอ/ไคเฟิงไม่เหมือนกัน).",
  },
  {
    title: "วิชาตัวเบาในไคเฟิง",
    detail:
      "สะสม Exploration เมืองไคเฟิงครบ 4,000 แต้ม (เลเวล 4) เพื่อได้ Flight Medallion. เร่งเก็บแต้มด้วยเควส Tesla Clear Outpost และเปิดแท่นวาร์ป.",
  },
  {
    title: "Endurance vs Vitality",
    detail:
      "Endurance ใช้เคลื่อนที่/หลบ/ไต่กำแพง/วิชาตัวเบา. Vitality ใช้ร่าย Mystic Skill.",
  },
  {
    title: "ใส่ Gear Set ให้ครบ",
    detail:
      "โบนัส 2/4 ชิ้นสำคัญต่อบิลด์ โจมตี/ป้องกันสูงขึ้นมาก (ดูรายละเอียดเซ็ตได้ที่หน้ารวม Gear Sets).",
  },
  {
    title: "การจูน (Tuning)",
    detail:
      "จูนเพิ่มค่าสุ่ม เช่น Physical Attack, Affinity, Crit, Max HP. ค่อย ๆ จูนทีละบรรทัดเพื่อเปลี่ยนอาวุธได้ทันทีหากสเตตัสไม่ตรงสาย.",
  },
  {
    title: "Arsenal เลเวล 51",
    detail:
      "ปลดล็อกที่เลเวล 51 ใส่เกียร์/อาวุธเก่าเพิ่ม Marshal Mastery Level และได้บัฟถาวรโดยไม่เสียของเก่า.",
  },
  {
    title: "ดูพัฒนาการตัวละคร",
    detail:
      "เมนู Develop > Improvement Guide > Development Guide ดูกราฟวงกลม ชี้ว่าขาดอะไร พยายามให้เป็นสีเขียวครบ.",
  },
  {
    title: "มินิเกมอย่ามองข้าม",
    detail:
      "ให้ Attribute Point ฟรี ลดการใช้ Stamina หรือเพิ่มโอกาสได้ไอเทมพิเศษ ควรเล่นเก็บเรื่อย ๆ.",
  },
  {
    title: "ตามหาไอเทม",
    detail:
      "คลิกไอเทมแล้วดู “How to Obtain” จะบอกแหล่งดรอป, โหมด, หรือร้านค้าที่ใช้ซื้อ.",
  },
];

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1320] via-[#101622] to-[#0f1520] text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-[#0d1320]/90 via-[#0d1320]/70 to-transparent px-6 py-3 text-sm text-slate-100 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-wide text-amber-100">
            <span className="text-lg">风</span>
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

      <div className="relative isolate overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${hero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0f1520]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
          <p className="kicker text-sm text-amber-100">Where Winds Meet</p>
          <h1 className="heading-contrast text-4xl md:text-5xl text-[#d6b16c]">
            10 Tips สำหรับผู้เล่นใหม่
          </h1>
          <p className="mt-3 max-w-3xl text-slate-100/85">
            รวม 10 ข้อสำคัญที่ช่วยให้ผู้เล่นใหม่อัปตัวเร็ว รู้แหล่งฟาร์ม และใช้ระบบต่าง ๆ ได้คุ้มค่า
          </p>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((tip, idx) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/20"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-amber-200">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="heading-contrast text-lg text-[#d6b16c]">{tip.title}</p>
              </div>
              <p className="mt-2 text-sm text-slate-100/85">{tip.detail}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
