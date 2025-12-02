import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendVerifyEmail } from "../utils/sendEmail";

import Header from "../components/Header";
import Stepper from "../components/Stepper";
import CommitteeSelector from "../components/CommitteeSelector";
import WorkModeBadge from "../components/WorkModeBadge";
import ValidationAlert from "../components/ValidationAlert";
import CommitteeInfoBox from "../components/CommitteeInfoBox";
import CommitteeVerifyButton from "../components/CommitteeVerifyButton";
import CommitteeVerifyModal from "../components/CommitteeVerifyModal";
import Button from "../components/Button";
import getCommitteeConfig from "../components/CommitteeConfig";

export default function CommitteePage() {
  const navigate = useNavigate();

  // 🎯 Mock Backend
  const backendData = {
    mode: "normal",
    amount: 20005555,
  };

  const config = getCommitteeConfig(backendData);

  const [showVerify, setShowVerify] = useState(false);

  const [selected, setSelected] = useState({
    manager: "นาย A เจ้าของงาน",
  });

  const committeeEmails = {
    manager: { name: "นาย A", email: "a@gmail.com" },
    unitManager: { name: "นาย B", email: "b@gmail.com" },
    engineer: { name: "นาย C", email: "c@gmail.com" },
    service: { name: "นาย D", email: "d@gmail.com" },
    purchasing: { name: "นาย E", email: "e@gmail.com" },
  };

  function generateOTP() {
    return Math.floor(10000 + Math.random() * 90000).toString(); // 5 หลัก
  }

  const [touchedSubmit, setTouchedSubmit] = useState(false);

  const handleUpdate = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  // -------------------------
  // ✅ Validation Logic
  // -------------------------
  const requiredFields = config.roles
    .filter((role) => role.required)
    .map((role) => role.key);

  const missing = requiredFields.filter((key) => !selected[key]);
  const hasError = missing.length > 0;

  return (
    <div>
      <Stepper activeStep={1} />
      <Header />

      <WorkModeBadge mode={config.mode} amount={config.amount} />
      <CommitteeInfoBox />
      <ValidationAlert show={touchedSubmit && hasError} />

      <CommitteeSelector
        config={config}
        selected={selected}
        onChange={handleUpdate}
      />

      {/* ปุ่มควบคุม */}
      <div className="max-w-6xl mx-auto flex justify-between px-4 mt-10 mb-20">
        {/* 🔙 Back button (ใช้ปุ่มแบบ premium) */}
        <div onClick={() => navigate(-1)}>
          <Button type="back" />
        </div>

        {/* 🔵 ปุ่มตรวจสอบสถานะ */}
        <CommitteeVerifyButton onOpen={() => setShowVerify(true)} />

        {/* 🟢 ปุ่มยืนยัน */}
        <button
          onClick={async () => {
            setTouchedSubmit(true);
            if (hasError) return;

            // 1) generate OTP
            const otp = generateOTP();

            // 2) ส่งเมลให้ทุกตำแหน่งที่เลือกไว้
            try {
              for (const roleKey of Object.keys(committeeEmails)) {
                const person = committeeEmails[roleKey];

                await sendVerifyEmail({
                  toEmail: person.email,
                  toName: person.name,
                  otp: otp,
                });

                console.log("ส่งเมลแล้ว →", person.email);
              }

              alert("ส่งอีเมลยืนยันให้กรรมการทุกคนแล้ว!");

              // TODO: ไปหน้าต่อไป หรือเปิด modal verify
            } catch (err) {
              console.error("ส่งเมลไม่สำเร็จ", err);
              alert("เกิดข้อผิดพลาดในการส่งอีเมล!");
            }
          }}
          className={`
    px-6 py-3 rounded-xl text-white transition-all
    ${
      touchedSubmit && hasError
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-600 hover:bg-green-700"
    }
  `}
        >
          ยืนยัน →
        </button>
      </div>

      {/* Modal ตรวจสอบสถานะ */}
      <CommitteeVerifyModal
        open={showVerify}
        onClose={() => setShowVerify(false)}
        roles={[
          {
            key: "manager",
            label: "ผู้จัดการเจ้าของงาน",
            name: "นาย A",
            status: "confirmed",
          },
          {
            key: "unitManager",
            label: "ผู้จัดการต้นสังกัด",
            name: "นาย B",
            status: "confirmed",
          },
          {
            key: "engineer",
            label: "วิศวกร",
            name: "นาย C",
            status: "confirmed",
          },
          {
            key: "service",
            label: "บริการจ้างเหมา",
            name: "นาย D",
            status: "confirmed",
          },
          {
            key: "purchasing",
            label: "พัสดุ",
            name: "นาย E",
            status: "confirmed",
          },
        ]}
      />

      {/* ปุ่มเทสการส่งเมลล์ Mockup ไว้ให้เห็นภาพ */}
      <button
        onClick={() => {
          sendVerifyEmail({
            toEmail: "อีเมลของคุณ@gmail.com",
            toName: "ชื่อของคุณ",
            otp: "12345",
          })
            .then(() => alert("ส่งอีเมลสำเร็จ!"))
            .catch((err) => alert("ส่งไม่สำเร็จ: " + err));
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        ทดสอบส่งอีเมล
      </button>
      
    </div>
  );
}
