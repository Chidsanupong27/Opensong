import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Stepper from "../components/Stepper";
import InfoBox from "../components/InfoBox";
import WinnerSelectCard from "../components/WinnerSelectCard";
import WarningBox from "../components/WarningBox";

export default function WinnerSelectPage() {
  const navigate = useNavigate();

  const medianPrice = 22014.72;

  const companies = [
    { id: 1, name: "บริษัท AAA จำกัด", price: 22500, status: "ส่งสำเร็จ" },
    { id: 2, name: "บริษัท BBB จำกัด", price: 21900, status: "ส่งสำเร็จ" },
    { id: 3, name: "บริษัท CCC จำกัด", price: 23100, status: "ไม่ผ่านเอกสาร" },
  ];

  const [selectedWinner, setSelectedWinner] = useState(null);

  const isValid = validateWinner(selectedWinner, companies, medianPrice);

  const handleConfirmWinner = () => {
    alert("บันทึกผลผู้ชนะเรียบร้อย");
    navigate("/summary");
  };

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

      {!isValid && selectedWinner && (
        <WarningBox
          title="ไม่สามารถคัดเลือกผู้ชนะได้"
          message="มีหลายบริษัทเสนอราคาใกล้เคียงกัน หรือราคาสูงเกินราคากลาง ตามข้อกำหนดต้องทำการยกเลิกหรือประกวดใหม่"
        />
      )}

      {/* Action Buttons */}
      <div className="max-w-5xl mx-auto flex justify-between mt-10">
        
        {/* ปุ่มยกเลิก */}
        <button className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition">
          ยกเลิกประกวด
        </button>

        {/* ปุ่มประกวดใหม่ */}
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition">
          ประกวดใหม่
        </button>

        {/* ยืนยันผู้ชนะ */}
        <button
          disabled={!isValid}
          onClick={handleConfirmWinner}
          className={`px-6 py-3 rounded-xl text-white transition
            ${isValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}
          `}
        >
          ยืนยันผู้ชนะ
        </button>
      </div>
    </div>
  );
}

// ❗ Logic ตรวจสอบว่าผ่านเกณฑ์ไหม
function validateWinner(selected, companies, medianPrice) {
  if (!selected) return false;

  const winner = companies.find((c) => c.id === selected);
  if (!winner) return false;

  // เงื่อนไข 1: ราคาแพงกว่าราคากลางเกิน 10%
  if (winner.price > medianPrice * 1.1) return false;

  // เงื่อนไข 2: ราคาต่ำสุดมีหลายเจ้า (ราคาเท่ากัน)
  const lowest = Math.min(...companies.map((c) => c.price));
  const tied = companies.filter((c) => c.price === lowest).length > 1;
  if (tied && winner.price === lowest) return false;

  return true;
}
