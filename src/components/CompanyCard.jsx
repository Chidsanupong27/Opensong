import UploadBox from "./UploadBox"; 
import { Eye, Download, File, Building2 } from "lucide-react";

// การ์ดแสดงข้อมูลของ Vendor แต่ละบริษัท เช่น ราคา สถานะ เอกสารแนบ ฯลฯ
export default function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative overflow-hidden">

      {/* แถบสีน้ำเงินด้านซ้ายเพื่อเป็น Accent Decoration */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-600 rounded-l-xl"></div>

      {/* ส่วนหัวของการ์ด: ชื่อบริษัท + ไอคอน */}
      <div className="flex items-center gap-3 mb-4">
        {/* ไอคอนบริษัท */}
        <div className="p-2 bg-blue-50 rounded-lg">
          <Building2 className="w-6 h-6 text-blue-600" />
        </div>

        {/* ชื่อบริษัท + คำอธิบาย */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 tracking-wide">
            {company.name}
          </h2>

          <p className="text-sm text-gray-500">
            ผู้เสนอราคาครั้งนี้
          </p>
        </div>
      </div>

      {/* แสดงราคาเสนอ */}
      <div className="mt-1">
        <p className="text-gray-600">
          ราคาเสนอ:{" "}
          <span className="text-lg font-semibold text-[#0B3C8A]">
            {company.price} บาท
          </span>
        </p>
      </div>

      {/* แสดงสถานะ เช่น ส่งสำเร็จ / รอส่งเอกสาร */}
      <p className="text-gray-600 mt-1">
        สถานะ:{" "}
        <span
          className={`font-medium px-2 py-1 rounded-md text-sm
            ${
              company.status === "ส่งสำเร็จ"
                ? "text-green-700 bg-green-100"      // สถานะสำเร็จ
                : company.status === "รอส่งเอกสาร"
                ? "text-yellow-700 bg-yellow-100"    // ยังไม่ส่งเอกสาร
                : "text-blue-700 bg-blue-100"         // default กรณีอื่น ๆ
            }
          `}
        >
          {company.status}
        </span>
      </p>

      {/* ส่วน Upload เอกสาร โดยผู้รับเหมาสามารถอัปโหลดใบเสนอราคาได้ */}
      <div className="mt-4">
        <p className="font-medium text-gray-700 mb-2">เอกสารแนบผู้รับเหมา</p>

        {/* Component สำหรับอัปโหลดไฟล์ */}
        <UploadBox label="อัปโหลดใบเสนอราคา" />

        {/* ข้อจำกัดของไฟล์ */}
        <p className="text-xs text-gray-500 mt-1">ขนาดไฟล์ไม่เกิน 10 MB</p>
      </div>

      {/* แสดงรายการไฟล์ที่อัปโหลดแล้ว (ถ้ามี) */}
      {company.files && company.files.length > 0 && (
        <div className="mt-6">
          <p className="font-medium text-gray-700 mb-2">ไฟล์ที่อัปโหลดแล้ว</p>

          <div className="space-y-2">
            {/* Loop ไฟล์ที่ vendor ส่งมา */}
            {company.files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 border rounded-lg px-3 py-2"
              >
                {/* แสดงชื่อไฟล์ */}
                <div className="flex items-center gap-2">
                  <File className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 text-sm">{file.name}</span>
                </div>

                {/* ปุ่ม ดูไฟล์ และ ดาวน์โหลด */}
                <div className="flex items-center gap-3">
                  {/* ปุ่มดูไฟล์ */}
                  <button className="text-blue-600 hover:underline flex items-center gap-1">
                    <Eye className="w-4 h-4" /> ดู
                  </button>

                  {/* ปุ่มดาวน์โหลด */}
                  <button className="text-green-600 hover:underline flex items-center gap-1">
                    <Download className="w-4 h-4" /> ดาวน์โหลด
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
