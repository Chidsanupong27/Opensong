// CommitteeRoleItem.jsx
import Dropdown from "./Dropdown";

export default function CommitteeRoleItem({
  role,
  icon,
  value,
  onChange,
}) {
  const { label, locked, options, required } = role;

  // ถ้า role นี้ lock → แสดง input disable
  if (locked) {
    return (
      <div>
        <label className="flex items-center gap-2 mb-1 text-sm font-medium text-gray-700">
          {icon}
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          className="w-full p-2.5 rounded-lg border bg-gray-100 text-gray-700 text-sm"
          value={value || options[0] || ""}
          disabled
        />
      </div>
    );
  }

  // ถ้าไม่ lock → ใช้ Dropdown ปกติ
  return (
    <Dropdown
      icon={icon}
      label={
        <>
          {label} {required && <span className="text-red-500">*</span>}
        </>
      }
      value={value || ""}
      onChange={onChange}
      options={options}
    />
  );
}
