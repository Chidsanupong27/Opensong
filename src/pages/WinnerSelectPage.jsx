import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Stepper from "../components/Stepper";
import InfoBox from "../components/InfoBox";
import WinnerSelectCard from "../components/WinnerSelectCard";
import WarningBox from "../components/WarningBox";

export default function WinnerSelectPage() {
  const navigate = useNavigate();

  const medianPrice = 20000;

  // Mock data (อนาคตดึงจาก backend)
  const companies = [
    { id: 1, name: "บริษัท AAA จำกัด", price: 18500, status: "ส่งสำเร็จ" },
    { id: 2, name: "บริษัท BBB จำกัด", price: 19000, status: "ส่งสำเร็จ" },
    { id: 3, name: "บริษัท CCC จำกัด", price: 25000, status: "ส่งสำเร็จ" },
  ];

  // vendor ที่ราคาต่ำกว่าราคากลาง
  const validVendors = companies.filter((c) => c.price < medianPrice);

  // auto select เมื่อมีแค่เจ้าเดียว
  const autoWinner = validVendors.length === 1 ? validVendors[0].id : null;

  const [selectedWinner, setSelectedWinner] = useState(autoWinner);
  const [reason, setReason] = useState("");
  const [showReasonPopup, setShowReasonPopup] = useState(false);

  // ปุ่มยืนยันถูกกด
  const handleConfirmWinner = () => {
    const winner = companies.find((c) => c.id === selectedWinner);

    // กรณีมีหลายเจ้า แต่ยังไม่กรอกเหตุผล
    if (validVendors.length > 1 && reason.trim() === "") {
      setShowReasonPopup(true);
      return;
    }

    alert(`บันทึกผลสำเร็จ!
ผู้ชนะ: ${winner?.name}
เหตุผล: ${reason || "ไม่ต้องระบุ"}`);

    // อนาคต: call API บันทึกผู้ชนะ
    navigate("/summary");
  };

  // กดปุ่มใน popup
  const handleSubmitReason = () => {
    if (reason.trim() === "") return;
    handleConfirmWinner();
  };

  // ปุ่มยืนยันสามารถกดได้ไหม
  const isWinnerValid =
    selectedWinner !== null &&
    validVendors.length > 0 &&
    validVendors.some((v) => v.id === selectedWinner);

  return (
    <div className="min-h-screen bg-[#F5F5FA] pb-20">
      <Stepper activeStep={3} />

      <h1 className="text-center text-3xl font-bold text-gray-900 mt-4">
        เลือกผู้ชนะการเสนอราคา
      </h1>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 mb-8 rounded-full"></div>

      <div className="max-w-4xl mx-auto">
        <InfoBox value={medianPrice.toLocaleString()} />
      </div>

      <div className="max-w-5xl mx-auto mt-8 grid gap-6">
        {companies.map((c) => (
          <WinnerSelectCard
            key={c.id}
            company={c}
            selected={selectedWinner}
            onSelect={() => setSelectedWinner(c.id)}
          />
        ))}
      </div>

      {/* ไม่มีผู้เสนอราคาต่ำกว่าราคากลาง */}
      {validVendors.length === 0 && (
        <WarningBox
          title="ไม่สามารถคัดเลือกผู้ชนะได้"
          message="ไม่มีบริษัทใดเสนอราคาต่ำกว่าราคากลาง ต้องประกวดใหม่หรือยกเลิก"
        />
      )}

      {/* Action Buttons */}
      <div className="max-w-5xl mx-auto flex justify-between mt-10">
        <button className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition">
          ยกเลิกประกวด
        </button>

        <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition">
          ประกวดใหม่
        </button>

        <button
          disabled={!isWinnerValid}
          onClick={handleConfirmWinner}
          className={`px-6 py-3 rounded-xl text-white transition
            ${
              isWinnerValid
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }
          `}
        >
          ยืนยันผู้ชนะ
        </button>
      </div>

      {/* Popup ระบุเหตุผล */}
      {showReasonPopup && (
        <div
          className="
      fixed inset-0 
      bg-white/10
      backdrop-blur-md
      flex justify-center items-center 
      z-50
    "
        >
          <div
            className="
        bg-white 
        p-6 
        rounded-2xl 
        shadow-2xl 
        w-full max-w-md 
        animate-fadeIn 
        border border-gray-100
      "
            style={{ animation: "fadeIn 0.25s ease-out" }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              กรุณาระบุเหตุผล
            </h3>

            <textarea
              className="
          w-full border border-gray-300 
          p-3 rounded-xl 
          focus:ring-2 focus:ring-blue-500 
          focus:outline-none
        "
              rows={4}
              placeholder="โปรดอธิบายเหตุผลในการเลือกบริษัทนี้..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => {
                  setShowReasonPopup(false);
                  setReason("");
                }}
                className="
            px-4 py-2 
            bg-gray-200 hover:bg-gray-300 
            rounded-xl transition 
            text-gray-700
          "
              >
                ยกเลิก
              </button>

              <button
                onClick={handleSubmitReason}
                className="
            px-4 py-2 
            bg-blue-600 hover:bg-blue-700 
            text-white 
            rounded-xl shadow transition
          "
              >
                บันทึกเหตุผล
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
