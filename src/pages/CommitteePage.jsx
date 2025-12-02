import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Stepper from "../components/Stepper";
import CommitteeSelector from "../components/CommitteeSelector";
import WorkModeBadge from "../components/WorkModeBadge";
import ValidationAlert from "../components/ValidationAlert";

import getCommitteeConfig from "../components/CommitteeConfig";

export default function CommitteePage() {
  const navigate = useNavigate();

  // Mock Backend
  const backendData = {
    mode: "urgent",   // normal | urgent
    amount: 2099,     // < 200000 หรือ >= 200000
  };

  const config = getCommitteeConfig(backendData);

  // state ที่เก็บค่าที่เลือก → ตั้งค่า default ให้ manager
  const [selected, setSelected] = useState({
    manager: "นาย A เจ้าของงาน",
  });

  // เพื่อเริ่มแสดงข้อความ validate หลังจากกด submit
  const [touchedSubmit, setTouchedSubmit] = useState(false);

  // รับค่าจาก dropdown
  const handleUpdate = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  // -------------------------
  // ✅ Validation Logic
  // -------------------------

  // ถ้า amount >= 200k → ต้องเลือกครบ 5 คนเสมอ
  // ถ้า amount < 200k → เลือกขั้นต่ำ 3 คนแรก (manager, unitManager, engineer)
  const requiredFields =
    backendData.amount >= 200000
      ? config.roles.map((r) => r.key) // require ทั้ง 5 ช่อง
      : config.roles.slice(0, 3).map((r) => r.key); // require แค่ 3 ช่องแรก

  const missing = requiredFields.filter((key) => !selected[key]);
  const hasError = missing.length > 0;

  return (
    <div>
      <Stepper activeStep={1} />
      <Header />

      {/*  แสดงชนิดงาน */}
      <WorkModeBadge mode={config.mode} amount={config.amount} />

      {/* แจ้งเตือนเฉพาะเมื่อกด submit แล้วไม่ครบ */}
      <ValidationAlert
        show={touchedSubmit && hasError}
        mode={config.mode}
        isHighValue={config.isHighValue}
      />

      {/* ส่วนเลือกคณะกรรมการ */}
      <CommitteeSelector
        config={config}
        selected={selected}
        onChange={handleUpdate}
      />

      {/* ปุ่มควบคุม */}
      <div className="max-w-6xl mx-auto flex justify-between px-4 mt-10 mb-20">
        {/* Back */}
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl">
          ย้อนกลับ
        </button>

        {/* Submit */}
        <button
          onClick={() => {
            setTouchedSubmit(true); // เริ่ม validate ตอนกด submit

            if (hasError) return; // ถ้าไม่ครบ → หยุด

            navigate("/status"); // ไปหน้าต่อไปเมื่อครบ
          }}
          className={`px-6 py-3 rounded-xl text-white transition-all
            ${
              touchedSubmit && hasError
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }
          `}
        >
          บันทึก →
        </button>
      </div>
    </div>
  );
}
