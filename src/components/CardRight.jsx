import Dropdown from "./Dropdown";
import { Package, UserRound } from "lucide-react";

export default function CardRight({
  isSpecial,       // boolean → เช็คว่าติ๊ก "กรณีพิเศษ" ไว้ไหม
  setIsSpecial,    // ฟังก์ชันปรับค่า isSpecial (เปิด/ปิด)
  selected,        // object เก็บค่าที่เลือกใน dropdown (matManager, contractorManager)
  onChange,        // ฟังก์ชันอัปเดตค่า dropdown ต่าง ๆ
}) {
  return (
    // กล่องสีน้ำเงินเข้มด้านขวา
    <div className="bg-[#0A2A8C] text-white rounded-2xl p-6 shadow-xl">

      {/* Checkbox: เปิด/ปิดกรณีพิเศษ SD/BD หรือมูลค่าสูงกว่า 200,000 */} 
      <label className="flex items-center gap-3 text-lg mb-6">
        <input
          type="checkbox"
          checked={isSpecial}                // ค่าปัจจุบันของ checkbox
          onChange={(e) => setIsSpecial(e.target.checked)} // เปลี่ยน state เมื่อคลิก
          className="w-5 h-5 accent-pink-500"
        />
        กรณีพิเศษ แบบ SD, BD หรือ มากกว่า 200,000 บาท
      </label>

      {/* หาก isSpecial === true → แสดง dropdown เพิ่มเติม */}
      {isSpecial && (
        <>
          {/* Dropdown เลือกผู้จัดการวัสดุ */}
          <Dropdown
            darkMode                         // ใช้โหมด dropdown พื้นหลังเข้ม
            icon={<Package className="w-5 h-5 text-yellow-300" />} // ไอคอน
            label="ผู้จัดการวัสดุ"
            value={selected.matManager}      // ค่าที่เลือกอยู่ตอนนี้
            onChange={(v) => onChange("matManager", v)} // ส่งค่ากลับไปอัปเดต state
            options={["เลือกชื่อ", "ผู้จัดการวัสดุ 1", "ผู้จัดการวัสดุ 2"]}
          />

          {/* Dropdown เลือกผู้จัดการรับเหมา */}
          <Dropdown
            darkMode
            icon={<UserRound className="w-5 h-5 text-pink-300" />}
            label="ผู้จัดการรับเหมา"
            value={selected.contractorManager}
            onChange={(v) => onChange("contractorManager", v)}
            options={["เลือกชื่อ", "ผู้รับเหมา 1", "ผู้รับเหมา 2"]}
          />
        </>
      )}
    </div>
  );
}







// หน้าที่ของ CardRight

// เป็นฟอร์มสำหรับ ผู้จัดการพิเศษ (กรณี SD/BD หรือราคา > 200,000)

// เปิด dropdown เฉพาะเมื่อ checkbox ถูกติ๊ก

// ใช้ darkMode ใน Dropdown เพื่อเข้ากับพื้นสีน้ำเงินเข้ม

// เก็บข้อมูลลง state ผ่านฟังก์ชัน onChange