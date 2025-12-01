import { UserCircle, Building2, Wrench } from "lucide-react";
import Dropdown from "./Dropdown";

export default function CardLeft({ selected, onChange }) {
  // selected → object ที่เก็บค่าที่เลือกไว้ทั้งหมด (manager, unitManager, engineer)
  // onChange → ฟังก์ชันสำหรับอัปเดตค่าใน state ของ CommitteePage

  return (
    // กล่องด้านซ้าย สีขาว มีขอบ มีเงา
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">

      {/* Dropdown 1: เลือกผู้จัดการเจ้าของโรงงาน */}
      <Dropdown
        icon={<UserCircle className="w-5 h-5 text-green-600" />} // ไอคอนจาก lucide-react
        label="ผู้จัดการเจ้าของโรงงาน"                      // ชื่อหัวข้อ
        value={selected.manager}                                // ค่าที่ถูกเลือกปัจจุบัน
        onChange={(v) => onChange("manager", v)}                 // ส่งค่าใหม่กลับไป setState
        options={["เลือกชื่อ", "ผู้จัดการ 1", "ผู้จัดการ 2"]}  // รายการชื่อใน dropdown
      />

      {/* Dropdown 2: เลือกผู้จัดการ B4 (ต้นสังกัดที่เปิดซอง) */}
      <Dropdown
        icon={<Building2 className="w-5 h-5 text-purple-600" />}
        label="ผู้จัดการต้นสังกัดที่เปิดซอง (B4)"
        value={selected.unitManager}
        onChange={(v) => onChange("unitManager", v)}
        options={["เลือกชื่อ", "ผู้จัดการ A", "ผู้จัดการ B"]}
      />

      {/* Dropdown 3: เลือกวิศวกรผู้เปิดซอง */}
      <Dropdown
        icon={<Wrench className="w-5 h-5 text-red-600" />}
        label="วิศวกร (ที่เปิดซอง)"
        value={selected.engineer}
        onChange={(v) => onChange("engineer", v)}
        options={["เลือกชื่อ", "วิศวกร 1", "วิศวกร 2"]}
      />

    </div>
  );
}
