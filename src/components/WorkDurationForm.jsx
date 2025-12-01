
export default function WorkDurationForm() {
  return (
    <div className="bg-white border border-green-300 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">
        ระยะเวลาดำเนินการ
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        
        <div>
          <label className="text-sm text-gray-700">วันที่เริ่มงาน *</label>
          <input
            type="date"
            className="mt-1 w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">วันที่สิ้นสุดงาน *</label>
          <input
            type="date"
            className="mt-1 w-full p-3 border rounded-lg"
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        * เวลาสิ้นสุดงานถูกกำหนดเป็น 23:59 อัตโนมัติ
      </p>
    </div>
  );
}


