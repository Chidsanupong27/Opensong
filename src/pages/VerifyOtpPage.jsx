import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function VerifyOtpPage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const role = searchParams.get("role");

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 นาที
  const [status, setStatus] = useState("idle"); // idle | success | error

  // ⏳ Countdown ลดเวลา
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // 📌 เมื่อกดยืนยัน OTP
  const handleVerify = async () => {
    if (otp.length !== 5) {
      setStatus("error");
      return;
    }

    // TODO: ต่อ API จริง
    const isCorrect = otp === "12345"; // mock test

    if (isCorrect) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          ยืนยันการเป็นคณะกรรมการ
        </h2>

        <p className="text-center text-gray-600 mt-2">
          โปรดยืนยันรหัสที่ส่งไปยังอีเมลของคุณ
        </p>

        {/* Email / Role Display */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-gray-700 text-sm">
          <p><strong>อีเมล:</strong> {email || "-"}</p>
          <p><strong>หน้าที่:</strong> {role || "-"}</p>
        </div>

        {/* OTP Input */}
        <div className="mt-6">
          <label className="block text-gray-800 font-medium mb-2">
            รหัส OTP
          </label>

          <input
            type="text"
            maxLength={5}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full text-center border border-gray-300 rounded-xl px-4 py-3 text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="• • • • •"
          />
        </div>

        {/* Time countdown */}
        <p className="text-center text-gray-500 mt-3">
          เหลือเวลา {formatTime(timeLeft)} นาที
        </p>

        {/* Error message */}
        {status === "error" && (
          <p className="text-center text-red-500 mt-3">
            รหัสไม่ถูกต้อง หรือหมดอายุ
          </p>
        )}

        {/* Success message */}
        {status === "success" && (
          <p className="text-center text-green-600 font-semibold mt-3">
            ยืนยันสำเร็จ ✔
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleVerify}
          disabled={timeLeft <= 0}
          className={`
            w-full py-3 mt-6 rounded-xl text-white text-lg font-medium
            transition-all shadow-md
            ${timeLeft <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-xl"
            }
          `}
        >
          ยืนยันรหัส
        </button>
      </div>
    </div>
  );
}
