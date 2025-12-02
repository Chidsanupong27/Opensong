import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Button({ type }) {
  const isNext = type === "next";

  return (
    <button
      className={`
        flex items-center gap-2 
        px-6 py-3 rounded-xl font-semibold text-lg
        transition-all duration-200

        /* Shadow หรู */
        shadow-[0_4px_12px_rgba(0,0,0,0.15)]
        hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)]

        /* Border บางๆ หรู */
        border border-white/20 backdrop-blur-sm

        ${isNext
          ? `
            /* NEXT BUTTON (หรูแบบ verify button) */
            bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600
            text-white
            hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700
          `
          : `
            /* BACK BUTTON (หรูแบบ soft grey) */
            bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300
            text-gray-800
            hover:from-gray-200 hover:via-gray-300 hover:to-gray-400
          `
        }
      `}
    >
      {/* ICON LEFT */}
      {!isNext && <ArrowLeft size={22} className="opacity-80" />}

      {/* TEXT */}
      {isNext ? "ยืนยัน" : "ย้อนกลับ"}

      {/* ICON RIGHT */}
      {isNext && <ArrowRight size={22} className="opacity-80" />}
    </button>
  );
}
