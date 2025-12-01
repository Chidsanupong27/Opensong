import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Button({ type }) {
  // เช็คว่าเป็นปุ่มถัดไปหรือไม่
  // ถ้า type === "next" → ปุ่มสีเขียว
  const isNext = type === "next";

  return (
    <button
      // สไตล์ปุ่มพื้นฐาน + เงา + ข้อความใหญ่
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-lg shadow-md
        ${
          // ถ้าเป็น next → สีเขียว, ถ้าไม่ใช่ → สีแดง (ย้อนกลับ)
          isNext
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-red-600 text-white hover:bg-red-700"
        }
      `}
    >
      {/* ถ้าเป็นปุ่มย้อนกลับ → แสดงไอคอนลูกศรซ้าย */}
      {!isNext && <ArrowLeft size={20} />}

      {/* ข้อความในปุ่ม */}
      {isNext ? "ถัดไป" : "ย้อนกลับ"}

      {/* ถ้าเป็นปุ่มถัดไป → แสดงไอคอนลูกศรขวา */}
      {isNext && <ArrowRight size={20} />}
    </button>
  );
}
