import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function VerifyOtpPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get("email");
  const role = searchParams.get("role");

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 นาที
  const [status, setStatus] = useState("idle"); // idle | success | error

  // ป้องกัน error เวลา refresh แล้วไม่มี role
  useEffect(() => {
    if (!email || !role) {
      alert("ลิงก์ไม่ถูกต้อง หรือหมดอายุ");
      navigate("/"); // กลับหน้าแรก
    }
  }, [email, role, navigate]);

  //  Countdown ลดเวลา
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

  // 📌 เมื่อกดปุ่มยืนยัน OTP
  const handleVerify = async () => {
    if (otp.length !== 5) {
      setStatus("error");
      return;
    }

    // mock test: OTP = 12345
    const isCorrect = otp === "12345";

    if (!isCorrect) {
      setStatus("error");
      return;
    }

    // ====== ✔ บันทึกสถานะลง localStorage ======
    const prev = JSON.parse(localStorage.getItem("committee_status") || "{}");

    const updated = {
      ...prev,
      [role]: "confirmed",
    };

    localStorage.setItem("committee_status", JSON.stringify(updated));
    setStatus("success");

    // ให้เวลาแสดงผล 1.5 วินาที แล้ว redirect
    setTimeout(() => {
      navigate("/status");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          ยืนยันการเป็นคณะกรรมการ
        </h2>

        <p className="text-center text-gray-600 mt-2">
          โปรดกรอกรหัส OTP ที่ส่งไปยังอีเมลของคุณ
        </p>

        {/* Display Email + Role */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-gray-700 text-sm">
          <p><strong>อีเมล:</strong> {email}</p>
          <p><strong>หน้าที่:</strong> {role}</p>
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

        {/* Countdown */}
        <p className="text-center text-gray-500 mt-3">
          เหลือเวลา {formatTime(timeLeft)} นาที
        </p>

        {/* Errors */}
        {status === "error" && (
          <p className="text-center text-red-500 mt-3">
            รหัสไม่ถูกต้อง หรือหมดอายุ
          </p>
        )}

        {/* Success */}
        {status === "success" && (
          <p className="text-center text-green-600 font-semibold mt-3">
            ยืนยันสำเร็จ ✔ กำลังนำคุณกลับไปยังระบบ...
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleVerify}
          disabled={timeLeft <= 0}
          className={`
            w-full py-3 mt-6 rounded-xl text-white text-lg font-medium
            transition-all shadow-md
            ${
              timeLeft <= 0
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
