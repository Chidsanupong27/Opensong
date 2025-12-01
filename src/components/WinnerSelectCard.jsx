import { Building2, Check } from "lucide-react";

// ⭐ การ์ดสำหรับเลือก "ผู้ชนะ"
// ใช้ในหน้า /winner เพื่อให้ผู้จัดการเลือก Vendor ที่ชนะ
export default function WinnerSelectCard({ company, selected, onSelect }) {

  // ❌ ถ้าสถานะไม่ใช่ "ส่งสำเร็จ" ให้ disable ไม่สามารถเลือกได้
  const isDisabled = company.status !== "ส่งสำเร็จ";

  // ✔ ตรวจว่าบริษัทนี้ถูกเลือกเป็นผู้ชนะหรือไม่
  const isSelected = selected === company.id;

  return (
    <div
      className={`
        bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition cursor-pointer relative

        // 🔵 ถ้าถูกเลือก → ให้ขอบน้ำเงิน + effect ring
        ${isSelected ? "border-blue-600 ring-2 ring-blue-300" : ""}

        // ⚪ ถ้าไม่สามารถเลือกได้ (สถานะไม่ผ่าน) → ทำซีด + ห้ามคลิก
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      // 👍 อนุญาตให้เลือกเฉพาะบริษัทที่ไม่ disabled
      onClick={() => !isDisabled && onSelect()}
    >
      
      {/* ส่วนหัว: icon + ชื่อบริษัท + ราคา */}
      <div className="flex items-center gap-3">
        
        {/* ไอคอนตึก (แทนบริษัท) */}
        <div className="p-3 bg-blue-50 rounded-xl">
          <Building2 className="w-6 h-6 text-blue-600" />
        </div>

        <div>
          {/* ชื่อบริษัท */}
          <h2 className="text-xl font-bold">{company.name}</h2>

          {/* ราคาเสนอ */}
          <p className="text-gray-600">
            ราคาเสนอ: {company.price.toLocaleString()} บาท
          </p>
        </div>
      </div>

      {/* 
        ✔ แสดงไอคอนเครื่องหมายถูก เฉพาะบริษัทที่ถูกเลือกเท่านั้น 
      */}
      {isSelected && (
        <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
          <Check className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}
