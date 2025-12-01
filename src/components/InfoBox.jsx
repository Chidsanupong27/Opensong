import { Info } from "lucide-react";

// Component แสดง "ราคากลาง" ของงาน
// ใช้ในหน้า /status เพื่อให้กรรมการใช้ประกอบการพิจารณา
export default function InfoBox({ value }) {
  return (
    // กล่องพื้นฟ้าอ่อน + ขอบ + เงาเล็กน้อย
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-center gap-3 shadow-sm">
      
      {/* ไอคอน Info อยู่ในวงกลมสีฟ้า */}
      <div className="bg-blue-100 text-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
        <Info size={22} />
      </div>

      <div>
        {/* ข้อความแสดงราคากลาง */}
        <p className="text-blue-900 font-semibold text-lg">
          ราคากลาง: {value} บาท
        </p>

        {/* ข้อความคำอธิบายเพิ่มเติม */}
        <p className="text-xs text-blue-600">
          * ข้อมูลนี้สำหรับใช้ประกอบการพิจารณาเปิดซอง
        </p>
      </div>
    </div>
  );
}
