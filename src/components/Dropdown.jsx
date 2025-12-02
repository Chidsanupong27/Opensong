// Dropdown.jsx
export default function Dropdown({
  label,
  icon,
  value,
  onChange,
  options,
}) {
  return (
    <div className="mb-4">
      <label className="flex items-center gap-2 mb-1 text-sm font-medium text-gray-700">
        {icon}
        {label}
      </label>

      <select
        className="w-full p-2.5 rounded-lg border bg-gray-50 text-gray-800 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
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