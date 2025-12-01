export default function ConditionalMessage({ show, message }) {
  // ถ้า show = false → ไม่ต้องแสดงข้อความ → return null (ไม่วาดอะไรบนหน้าจอ)
  if (!show) return null;

  return (
    // กล่องข้อความแจ้งเตือนสีแดง
    // ใช้ Tailwind จัดสีพื้น, ขอบ และสไตล์ให้ดูเป็น error message
    <div className="text-red-600 mt-4 p-3 bg-red-100 border border-red-300 rounded-md">
      {message} {/* แสดงข้อความที่รับเข้ามา */}
    </div>
  );
}


// เป็น component สำหรับแจ้งเตือนเป็น ข้อความสีแดง
// ใช้ prop
// show → boolean ควบคุมว่าจะแสดงหรือไม่  -> show มาจาก state ใน component แม่ 
// message → ข้อความที่จะแสดง  -> มาจากตัวแม่ส่งเข้ามา (อาจเป็น string fix หรือจาก backend ก็ได้)
// ถ้า show = false → React จะไม่ render อะไรเลย