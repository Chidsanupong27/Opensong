export default function Dropdown({
  label,       // ข้อความ label เช่น "ผู้จัดการ"
  icon,        // ไอคอนด้านหน้าข้อความ (ส่งมาจาก parent)
  value,       // ค่าที่ถูกเลือกปัจจุบัน
  onChange,    // ฟังก์ชันเมื่อมีการเปลี่ยนค่า
  options,     // รายการตัวเลือกทั้งหมด
  darkMode = false // ถ้า true → เป็นสไตล์สำหรับพื้นที่พื้นหลังเข้ม (เช่น CardRight)
}) {
  return (
    <div className="mb-6">
      {/* Label + Icon */}
      <label
        className={`flex items-center gap-2 mb-2 text-sm font-medium ${
          darkMode ? "text-white" : "text-gray-700" // darkMode = สีขาว, ปกติ = สีเทาเข้ม
        }`}
      >
        {icon}
        {label}
      </label>

      {/* Select Box */}
      <select
        className={`w-full p-3 rounded-lg border text-sm ${
          // ตัว select เมื่ออยู่ใน dark mode → bg ขาว / ตัวหนังสือเข้ม
          // ถ้าไม่ใช่ dark mode → สีเทาอ่อน
          darkMode
            ? "bg-white text-gray-900"
            : "bg-gray-100 text-gray-800"
        }`}
        value={value}                 // ค่าที่ถูกเลือกใน dropdown
        onChange={(e) => onChange(e.target.value)} // ส่งค่าใหม่กลับไปยัง parent
      >
        {/* วนลูปแสดง <option> ทั้งหมดที่ส่งเข้ามา */}
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}




// component Dropdown ใช้เลือกชื่อบุคคลในแต่ละ Role

// รองรับ icon เพื่อให้ UI ดูสวยขึ้น

// รองรับ darkMode เพื่อใช้ใน card สีเข้ม (ฝั่ง SD/BD)

// เมื่อผู้ใช้เปลี่ยนค่า จะเรียก onChange(value) ส่งค่ากลับไปหน้า parent


// Prop แต่ละตัวมาจากไหน สรุปไว้ที่นี่แล้ว 
// label	CardLeft / CardRight
// icon	CardLeft / CardRight (นำมาจาก lucide-react)
// value	state ของ CommitteePage
// onChange	ฟังก์ชันใน CommitteePage
// options	CardLeft / CardRight (อนาคตมาจาก backend)
// darkMode	ส่งจาก CardRight เท่านั้น