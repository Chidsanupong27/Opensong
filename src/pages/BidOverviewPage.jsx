import Stepper from "../components/Stepper";
import InfoBox from "../components/InfoBox";
import CompanyCard from "../components/CompanyCard";
import { BarChart2 } from "lucide-react";

export default function BidOverviewPage() {
  const medianPrice = "22,014.72";

  const companies = [
    {
      name: "บริษัท AAA จำกัด",
      price: "22,500",
      status: "ส่งสำเร็จ",
      files: [
        { name: "ใบเสนอราคา.pdf", url: "#" },
        { name: "สเปคสินค้า.pdf", url: "#" },
      ],
    },
    {
      name: "บริษัท BBB จำกัด",
      price: "00,000",
      status: "รอเสนอราคา",
      files: [], // ยังไม่มีไฟล์
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] pb-20">
      <Stepper activeStep={2} />

      <h1 className="text-center text-3xl font-extrabold text-gray-800 mt-4 flex justify-center items-center gap-3">
        <BarChart2 className="w-8 h-8 text-blue-600" />
        สถานะการเสนอราคา
      </h1>

      <div className="flex justify-center mt-2 mb-4">
        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
      </div>

      {/* ราคากลาง */}
      <div className="max-w-4xl mx-auto mt-8">
        <InfoBox value={medianPrice} />
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid gap-6">
        {companies.map((c, i) => (
          <CompanyCard key={i} company={c} />
        ))}
      </div>
    </div>
  );
}
