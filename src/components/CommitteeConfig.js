// CommitteeConfig.js  
// รวม logic ทั้งหมดสำหรับหน้า /committee

export default function getCommitteeConfig({ mode, amount }) {
  // โหมดที่ backend ส่งมา: "normal" | "urgent"
  // amount = มูลค่างาน

  const isHighValue = amount >= 200000; // ✅ มากกว่าหรือเท่ากับ 200,000 = งานมูลค่าสูง

  // งานมูลค่าสูง → ต้องเลือกครบ 5 คนเสมอ
  const requireAllCommittee = isHighValue;

  // role ทั้งหมดของคณะกรรมการ
  const roles = [
    {
      key: "manager",
      label: "ผู้จัดการเจ้าของงาน",
      required: true,
      locked: true,
      options: ["นาย A เจ้าของงาน"], // mock ไว้ก่อน (อนาคตมาจาก backend)
    },
    {
      key: "unitManager",
      label: "ผู้จัดการต้นสังกัด (B4)",
      required: true,
      locked: false,
      options: ["เลือกชื่อ", "ผู้จัดการ A", "ผู้จัดการ B"],
    },
    {
      key: "engineer",
      label: "วิศวกร (ที่เปิดซอง)",
      required: true,
      locked: false,
      options: ["เลือกชื่อ", "วิศวกร 1", "วิศวกร 2"],
    },
    {
      key: "service",
      label: "บริการจ้างเหมา",
      required: requireAllCommittee, // ถ้างานมูลค่าสูง → บังคับ
      locked: false,
      options: ["เลือกชื่อ", "ฝ่ายบริการ 1", "ฝ่ายบริการ 2"],
    },
    {
      key: "purchasing",
      label: "พัสดุ",
      required: requireAllCommittee, // ถ้างานมูลค่าสูง → บังคับ
      locked: false,
      options: ["เลือกชื่อ", "เจ้าหน้าที่พัสดุ 1", "เจ้าหน้าที่พัสดุ 2"],
    },
  ];

  return {
    mode,
    amount,
    isHighValue,
    requireAllCommittee,
    roles,
  };
}
