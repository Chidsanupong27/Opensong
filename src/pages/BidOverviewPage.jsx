import { useEffect, useState } from "react";
import Stepper from "../components/Stepper";
import InfoBox from "../components/InfoBox";
import CompanyCard from "../components/CompanyCard";
import { BarChart2 } from "lucide-react";
import { sendRequestNewPriceEmail } from "../utils/sendEmail";
import CentralFilesSection from "../components/CentralFilesSection";

export default function BidOverviewPage() {
  const medianPrice = 22014.72;

  // ============= STATE หลัก =============
  const [companies, setCompanies] = useState([
    {
      name: "บริษัท AAA จำกัด",
      price: "26000",
      status: "ส่งสำเร็จ",
      email: "aaa.vendor@gmail.com",
      files: [
        { name: "ใบเสนอราคา.pdf", url: "#" },
        { name: "สเปคสินค้า.pdf", url: "#" },
      ],
    },
    {
      name: "บริษัท BBB จำกัด",
      price: "19000",
      status: "ส่งสำเร็จ",
      email: "bbb.vendor@gmail.com",
      files: [],
    },
    {
      name: "บริษัท รักเธอไม่ จำกัด",
      price: "30000",
      status: "รอเสนอราคา",
      email: "loveyou.vendor@gmail.com",
      files: [],
    },
  ]);

  const centralFiles = [
    {
      title: "TOR – ขอบเขตงาน",
      filename: "TOR.pdf",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      color: "#0B3C8A",
      bg: "#e6efff",
    },
    {
      title: "BOQ – รายการสเปค",
      filename: "BOQ.pdf",
      url: "https://www.africau.edu/images/default/sample.pdf",
      color: "#0a568c",
      bg: "#e8f6ff",
    },
    {
      title: "ราคากลาง",
      filename: "median.pdf",
      url: "https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf",
      color: "#036a46",
      bg: "#e8fff5",
    },
  ];

  // ============= อ่านราคาใหม่จาก localStorage =============
  useEffect(() => {
    const revisePrices =
      JSON.parse(localStorage.getItem("revise_prices")) || {};

    const updated = companies.map((c) => {
      if (revisePrices[c.name]) {
        return {
          ...c,
          price: revisePrices[c.name].newPrice,
          status: "ส่งสำเร็จ (แก้ไขราคาแล้ว)",
        };
      }
      return c;
    });

    setCompanies(updated);
  }, []);

  // ============= lowest price =============
  const lowestPrice = Math.min(...companies.map((c) => Number(c.price)));

  // ============= เรียงตามราคา =============
  const sortedCompanies = [...companies].sort(
    (a, b) => Number(a.price) - Number(b.price)
  );

  // ============= ฟังก์ชันส่ง email =============
  async function handleRequestReprice(company) {
    const confirmSend = window.confirm(
      `คุณต้องการส่งอีเมลให้ "${company.name}" เพื่อขอเสนอราคาใหม่ใช่ไหม?`
    );
    if (!confirmSend) return;

    try {
      await sendRequestNewPriceEmail({
        toEmail: company.email,
        company: company.name,
        oldPrice: company.price,
      });

      alert("ส่งอีเมลขอให้เสนอราคาใหม่สำเร็จ!");
    } catch (error) {
      console.error("❌ ส่งอีเมลล้มเหลว:", error);
      alert("เกิดข้อผิดพลาด ไม่สามารถส่งอีเมลได้");
    }
  }

  // ============= UI =============
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

      <div className="max-w-4xl mx-auto mt-8">
        <InfoBox value={medianPrice.toLocaleString()} />
      </div>
      <CentralFilesSection files={centralFiles} />

      {/* รายการ vendor */}
      <div className="max-w-6xl mx-auto mt-6 grid gap-6">...</div>

      <div className="max-w-6xl mx-auto mt-6 grid gap-6">
        {sortedCompanies.map((c, i) => (
          <CompanyCard
            key={i}
            company={c}
            isRecommended={Number(c.price) === lowestPrice}
            medianPrice={medianPrice}
            onRequestReprice={() => handleRequestReprice(c)}
          />
        ))}
      </div>
    </div>
  );
}
