// WorkModeBadge.jsx

export default function WorkModeBadge({ mode, amount }) {
  const isHighValue = amount >= 200000;

  // กล่องแบบ minimal
  const Badge = ({ text, color }) => (
    <span
      className={`px-5 py-2 text-sm font-medium rounded-full ${color}`}
    >
      {text}
    </span>
  );

  return (
    <div className="max-w-6xl mx-auto mt-4 mb-6 flex gap-3 justify-start">
      {/* งานปกติ หรือ งานเร่งด่วน */}
      {mode === "normal" && (
        <Badge
          text="งานปกติ"
          color="bg-blue-600 text-white"
        />
      )}

      {mode === "urgent" && (
        <Badge
          text="งานเร่งด่วน"
          color="bg-orange-500 text-white"
        />
      )}

      {/* งานมูลค่าสูง (แสดงเมื่อ ≥ 200000) */}
      {isHighValue && (
        <Badge
          text="งานมูลค่าสูง"
          color="bg-red-500 text-white"
        />
      )}
    </div>
  );
}
