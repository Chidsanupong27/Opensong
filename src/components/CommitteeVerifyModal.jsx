import { X, CheckCircle, Clock, AlertTriangle } from "lucide-react";

export default function CommitteeVerifyModal({ open, onClose, roles = [] }) {
  if (!open) return null;

  const statusUI = {
    confirmed: {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      border: "border-green-300",
      bg: "bg-green-50",
    },
    pending: {
      icon: <Clock className="w-6 h-6 text-gray-400" />,
      border: "border-gray-300",
      bg: "bg-gray-50",
    },
    expired: {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      border: "border-orange-300",
      bg: "bg-orange-50",
    },
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[430px] px-6 py-6 rounded-2xl shadow-xl relative animate-fadeIn">

        {/* ปิด modal */}
        <button onClick={onClose} className="absolute right-4 top-4">
          <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </button>

        <h2 className="text-center font-bold text-xl mb-4">
          สถานะการยืนยันคณะกรรมการ
        </h2>

        <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
          {roles.map((role) => {
            const ui = statusUI[role.status] || statusUI.pending;

            return (
              <div
                key={role.key}
                className={`p-3 rounded-xl border ${ui.border} ${ui.bg} flex justify-between`}
              >
                <div>
                  <p className="font-medium">{role.label}</p>
                  <p className="text-sm text-gray-600">{role.name}</p>
                </div>
                {ui.icon}
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-3">
          เหลือเวลา 5 นาทีในการยืนยัน
        </p>
      </div>
    </div>
  );
}
