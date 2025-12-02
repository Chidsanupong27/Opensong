// WorkModeBadge.jsx
export default function WorkModeBadge({ mode, amount }) {
  const isHighValue = amount >= 200000;

  const modeText =
    mode === "urgent" ? "งานเร่งด่วน" : "งานปกติ";

  const modeColor =
    mode === "urgent"
      ? "bg-orange-100 text-orange-700 border-orange-200"
      : "bg-blue-100 text-blue-700 border-blue-200";

  const highValueText = "มูลค่าสูง";
  const highValueColor = "bg-red-50 text-red-700 border-red-200";

  return (
    <div className="max-w-6xl mx-auto mt-2 mb-3 flex items-center gap-2">
      {/* ป้ายโหมดงาน */}
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${modeColor}`}>
        {modeText}
      </span>

      {/* ถ้าเป็นงานมูลค่าสูง → แสดงป้ายเพิ่ม */}
      {isHighValue && (
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${highValueColor}`}>
          {highValueText}
        </span>
      )}
    </div>
  );
}
