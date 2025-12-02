import { AlertTriangle } from "lucide-react";

export default function ValidationAlert({ show }) {
  if (!show) return null;

  return (
    <div className="max-w-6xl mx-auto mt-3 mb-4 px-2">
      <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-lg shadow-sm">
        <AlertTriangle className="w-5 h-5" />
        <span className="text-sm font-medium">
          กรุณากรอกข้อมูลให้ครบ
        </span>
      </div>
    </div>
  );
}
