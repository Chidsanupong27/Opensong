// CommitteeConfig.js  
export default function getCommitteeConfig({ mode, amount }) {
  const isHighValue = amount >= 200000;   // เปลี่ยนจาก > เป็น >=

  // เงื่อนไขใหม่
  // ถ้า amount >= 200000 → บังคับเลือก 5 คน
  // ถ้า urgent → บังคับเลือก 5 คน
  // ถ้า normal + amount < 200000 → เลือกแค่ 3 คน
  const requireAllCommittee = isHighValue || mode === "urgent";

  const roles = [
    {
      key: "manager",
      label: "ผู้จัดการเจ้าของงาน",
      required: true,
      locked: true,
      options: ["นาย A เจ้าของงาน"]
    },
    {
      key: "unitManager",
      label: "ผู้จัดการต้นสังกัด (B4)",
      required: true,
      locked: false,
      options: ["เลือกชื่อ", "ผู้จัดการ A", "ผู้จัดการ B"]
    },
    {
      key: "engineer",
      label: "วิศวกร (ที่เปิดซอง)",
      required: true,
      locked: false,
      options: ["เลือกชื่อ", "วิศวกร 1", "วิศวกร 2"]
    },
    {
      key: "service",
      label: "บริการจ้างเหมา",
      required: requireAllCommittee,
      locked: false,
      options: ["เลือกชื่อ", "ผู้รับเหมา 1", "ผู้รับเหมา 2"]
    },
    {
      key: "purchasing",
      label: "พัสดุ",
      required: requireAllCommittee,
      locked: false,
      options: ["เลือกชื่อ", "เจ้าหน้าที่พัสดุ 1", "เจ้าหน้าที่พัสดุ 2"]
    }
  ];

  return {
    mode,
    amount,
    isHighValue,
    requireAllCommittee,
    roles
  };
}
