import Stepper from "../components/Stepper";
import InfoBox from "../components/InfoBox";
import WinnerInfoCard from "../components/WinnerInfoCard";
import WorkDurationForm from "../components/WorkDurationForm";
import DocumentAttachBox from "../components/DocumentAttachBox";
import SubmitSummaryBar from "../components/SubmitSummaryBar";
import { ClipboardCheck } from "lucide-react";

export default function SummaryPage() {
  // mock ข้อมูล (อนาคตจะ fetch จาก backend)
  const winner = {
    name: "บริษัท AAA จำกัด",
    price: 22500,
  };

  const medianPrice = "22,014.72";

  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-20">
      <Stepper activeStep={3} />

      {/* ========== Title Section ========== */}
      <div className="flex justify-center mt-4">
        <div className="flex flex-col items-center">
          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <ClipboardCheck className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              สรุปผลการพิจารณา
            </h1>
          </div>

          {/* Underline */}
          <div className="w-44 h-1.5 bg-indigo-500 rounded-full mt-2"></div>
        </div>
      </div>
      {/* ================================== */}

      <div className="max-w-4xl mx-auto mt-6 space-y-6">
        <WinnerInfoCard winner={winner} />

        <InfoBox value={medianPrice} />

        <WorkDurationForm />

        <DocumentAttachBox />
      </div>

      <SubmitSummaryBar />
    </div>
  );
}
