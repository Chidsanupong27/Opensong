// VendorRevisePage.jsx
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function VendorRevisePage() {
  const [searchParams] = useSearchParams();

  // ดึงข้อมูลจาก URL
  const company = searchParams.get("company");
  const oldPrice = searchParams.get("oldPrice"); // ← ชื่อ param ต้องตรง

  const [newPrice, setNewPrice] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    if (!newPrice || isNaN(Number(newPrice))) {
      alert("กรุณากรอกราคาใหม่ให้ถูกต้อง");
      return;
    }

    setStatus("submitted");

    // ⭐ โหลด revise_prices (object) ถ้าไม่มีให้สร้าง object ใหม่
    const revisePrices =
      JSON.parse(localStorage.getItem("revise_prices")) || {};

    // อัปเดตข้อมูลเฉพาะบริษัทนี้
    revisePrices[company] = {
      oldPrice,
      newPrice,
      time: new Date().toISOString(),
    };

    // เซฟกลับลง localStorage
    localStorage.setItem("revise_prices", JSON.stringify(revisePrices));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold text-center text-gray-900">
          ปรับปรุงราคาเสนอใหม่
        </h2>

        <p className="text-center text-gray-600 mt-2">
          สำหรับบริษัท: <span className="font-semibold">{company}</span>
        </p>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">
            ราคาเสนอเดิม:{" "}
            <span className="font-semibold text-blue-700">
              {oldPrice} บาท
            </span>
          </p>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 mb-1">เสนอราคาใหม่ *</label>
          <input
            type="number"
            className="w-full border p-3 rounded-lg"
            placeholder="เช่น 18500"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>

        {status === "submitted" && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            ส่งราคาใหม่สำเร็จ ✔
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md"
        >
          ส่งราคาใหม่
        </button>
      </div>
    </div>
  );
}
