import { FileUp } from "lucide-react";

export default function DocumentAttachBox() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-3">เอกสารแนบเพิ่มเติม</h3>

      <label className="flex items-center gap-3 p-4 bg-blue-50 border rounded-lg cursor-pointer hover:bg-blue-100">
        <FileUp className="w-6 h-6 text-blue-600" />
        <span className="text-gray-700">เลือกไฟล์แนบ</span>
        <input type="file" className="hidden" />
      </label>

      <p className="text-xs text-gray-500 mt-2">รองรับไฟล์ PDF / ขนาดไม่เกิน 10MB</p>
    </div>
  );
}
