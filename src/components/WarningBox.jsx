import { AlertTriangle } from "lucide-react";

// ⚠️ WarningBox ใช้แสดงกล่องแจ้งเตือนสีเหลือง เช่น
// - จำนวนผู้เสนอราคาไม่ถึงเกณฑ์
// - ราคาที่เสนอสูงกว่าราคากลาง
// - กรณีที่ต้องแจ้งเงื่อนไขให้ผู้จัดการทราบ
//
// Props:
//   title   : หัวข้อข้อความเตือน (ตัวหนา)
//   message : รายละเอียดเพิ่มเติมของคำเตือน
export default function WarningBox({ title, message }) {
  return (
    // กล่องเตือนหลัก
    <div className="
        max-w-4xl mx-auto      /* จำกัดความกว้าง และจัดกึ่งกลาง */
        bg-yellow-100          /* พื้นหลังเหลืองอ่อน */
        border border-yellow-300 
        rounded-xl             /* มุมโค้งมน */
        p-5 mt-8               /* padding + margin บน */
        flex gap-3             /* วางไอคอนและข้อความแบบเรียงข้าง */
      "
    >
      {/* ไอคอนรูปสามเหลี่ยมเครื่องหมายเตือน ⚠ */}
      <AlertTriangle className="text-yellow-700 w-6 h-6" />

      <div>
        {/* หัวข้อแจ้งเตือน */}
        <h3 className="font-bold text-yellow-800">{title}</h3>

        {/* รายละเอียดแจ้งเตือน */}
        <p className="text-yellow-700">{message}</p>
      </div>
    </div>
  );
}
