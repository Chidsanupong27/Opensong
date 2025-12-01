import { FileUp } from "lucide-react";

// Component กล่องอัปโหลดไฟล์ (ผู้รับเหมาจะอัปโหลดใบเสนอราคา)
export default function UploadBox({ label }) {
  return (
    // กล่องพื้นเหลืองอ่อน + ขอบ + padding + จัด layout ให้ซ้าย/ขวา
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 
                    flex justify-between items-center">

      {/* ส่วนไอคอน + ข้อความ label */}
      <div className="flex gap-2 items-center text-gray-700">
        {/* ไอคอนอัปโหลด */}
        <FileUp className="w-5 h-5 text-yellow-600" />
        {/* ข้อความ เช่น "อัปโหลดใบเสนอราคา" */}
        <p className="text-sm">{label}</p>
      </div>

      {/* ปุ่มเลือกไฟล์ */}
      <label className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                         cursor-pointer hover:bg-blue-700 duration-100">
        เลือกไฟล์

        {/* input type="file" ซ่อนอยู่ คลิกที่ label แล้ว activate ตรงนี้ */}
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}
