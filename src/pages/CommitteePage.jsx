import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Stepper from "../components/Stepper";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Button from "../components/Button";

export default function CommitteePage() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    manager: "",
    unitManager: "",
    engineer: "",
    matManager: "",
    contractorManager: "",
  });

  const [isSpecial, setIsSpecial] = useState(false);

  const handleChange = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <Stepper activeStep={1} />
      <Header />

      {/* กล่อง 2 ฝั่ง */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 px-4 mt-6">
        <CardLeft selected={selected} onChange={handleChange} />

        <CardRight
          isSpecial={isSpecial}
          setIsSpecial={setIsSpecial}
          selected={selected}
          onChange={handleChange}
        />
      </div>

      {/* ปุ่มล่างสุด */}
      <div className="max-w-6xl mx-auto flex justify-between px-4 mt-10 mb-20">
        <Button type="back" />

        <button
          onClick={() => navigate("/status")}
          className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2"
        >
          บันทึก →
        </button>
      </div>
    </div>
  );
}
