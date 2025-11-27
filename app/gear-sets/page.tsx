type GearSet = {
  name: string;
  bonus2: string;
  bonus4: string;
};

const hero =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80";

const gearSets: GearSet[] = [
  {
    name: "Jadeware Set",
    bonus2: "Max Physical Attack +1",
    bonus4:
      "ใช้ Martial Arts จะเปิด Jadeware Effect: เพิ่ม Affinity DMG 10% และสร้าง Affinity DMG เพิ่ม 20% แก่ศัตรูที่ถูกคุมหรือ Chi ต่ำกว่า 40% (12 วิ, คูลดาวน์ 30 วิ)",
  },
  {
    name: "Form Ben Set",
    bonus2: "Physical Defense +1",
    bonus4:
      "ยืดระยะเวลา Shield 2 วิ ถ้า Chi > 85% หรือมี Chi Shield ป้องกันดาเมจ HP 20%",
  },
  {
    name: "H Wing Set",
    bonus2: "Affinity Rate +0.1% (1%)",
    bonus4:
      "เมื่อดาเมจใดติด Affinity ได้ H Wing: เพิ่ม Physical Attack 2% นาน 5 วิ สะสมได้ 5 Stack",
  },
  {
    name: "Eagle Rise Set",
    bonus2: "Physical Defense +1",
    bonus4:
      "ทำดาเมจต่อเนื่องหรือ Heal จะได้ Eagle Rise: ลดดาเมจที่ได้รับ 1.2% (2%) นาน 10 วิ สะสม 5 ครั้ง; ครบจะได้ Eagle Guard ลดดาเมจครั้งถัดไป 90% (50% จากบอส) คูลดาวน์ 30 วิ",
  },
  {
    name: "Len WH Set",
    bonus2: "Max HP +40",
    bonus4:
      "เพิ่ม Critical Damage และ Healing 10% และเพิ่มอีก 15% เมื่อมี HP Shield",
  },
  {
    name: "Moon Flir Set",
    bonus2: "Max HP +40",
    bonus4:
      "โจมตีขณะป้องกัน มีโอกาส 30% สร้าง Shield ดูดซับ 10% Max HP นาน 20 วิ; หากมี Shield อยู่แล้วจะฟื้น HP 2% (คูลดาวน์ 60 วิ)",
  },
  {
    name: "Well of the Willow Set",
    bonus2: "Precision Rate +0.1% (1%)",
    bonus4:
      "หลัง Light Attack หรือ Airborne Light Attack: เพิ่มดาเมจ Heavy/Airborne Heavy 12% นาน 10 วิ (ทำงานสวนทางกันได้ทั้งสองแบบ)",
  },
  {
    name: "Beyond the Shield Set",
    bonus2: "Max HP +40",
    bonus4:
      "เข้าสู่ Combat ถ้าไม่โดนดาเมจ 10 วิ จะได้ Beyond the Shield: ลดดาเมจครั้งถัดไปและ 2 วิ หลังจากนั้น 40% (เอฟเฟกต์หายเมื่อออก Combat)",
  },
  {
    name: "Swallow Core Set",
    bonus2: "Min Physical Attack +1",
    bonus4:
      "Light Attack ทำดาเมจเพิ่ม 15% ต่อเป้าหมาย Chi < 40% และเพิ่ม 5% ต่อเป้าหมาย Exalted",
  },
  {
    name: "Sea Water Set",
    bonus2: "Physical Defense +1",
    bonus4:
      "Perfect Defense มีโอกาส 50% ฟื้น HP 3% Max HP และฟื้น Endurance 10",
  },
  {
    name: "Ivory Broom Set",
    bonus2: "Critical Rate +0.1% (1%)",
    bonus4:
      "HP เต็มมีโอกาส 5% สร้าง Critical Healing และ Damage และเพิ่มผล Critical อีก 15%",
  },
  {
    name: "World Snow Set",
    bonus2: "Physical Defense +1",
    bonus4:
      "เสีย HP > 40% หรือ HP ต่ำกว่า 20% การ Heal ครั้งถัดไปภายใน 5 วิ จะฟื้น HP เพิ่ม 25% Max HP (คูลดาวน์ 60 วิ)",
  },
  {
    name: "Agel Step Set",
    bonus2: "Max HP +40",
    bonus4:
      "Def สำเร็จ ลดดาเมจ 20% นาน 2 วิ สะสม Stack ได้ 3 ครั้ง",
  },
  {
    name: "Flawless Defense Set",
    bonus2: "Physical Defense +1",
    bonus4:
      "ลดดาเมจ 5% เมื่อ HP < 60% และลดเพิ่ม 1% ทุก ๆ 10% HP ที่เสีย สะสมสูงสุด 5 ครั้ง",
  },
];

export default function GearSetsPage() {
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
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${hero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0f1520]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
          <p className="kicker text-sm text-amber-100">Where Winds Meet</p>
          <h1 className="heading-contrast text-4xl md:text-5xl text-[#d6b16c]">
            Gear Sets Bonus
          </h1>
          <p className="mt-3 max-w-3xl text-slate-100/85">
            สรุปโบนัส 2 ชิ้น (พื้นฐาน) และ 4 ชิ้น (พิเศษ) สำหรับ Gear Set
            ใช้เป็นคู่มือเลือกเซ็ตให้ตรงกับบิลด์ของคุณ
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
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
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
          <p className="kicker text-xs">รวมทั้งหมด</p>
          <h2 className="heading-contrast text-2xl text-[#d6b16c]">
            Gear Set 2/4 ชิ้น
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {gearSets.map((set) => (
              <div
                key={set.name}
                className="rounded-2xl border border-white/10 bg-white/10 p-4"
              >
                <p className="heading-contrast text-lg text-[#d6b16c]">
                  {set.name}
                </p>
                <p className="mt-2 text-sm text-amber-100">โบนัส 2 ชิ้น</p>
                <p className="text-sm text-slate-100/85">{set.bonus2}</p>
                <p className="mt-2 text-sm text-amber-100">โบนัส 4 ชิ้น</p>
                <p className="text-sm text-slate-100/85">{set.bonus4}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
