import { Eye, Download, File, Building2, RefreshCcw } from "lucide-react";

export default function CompanyCard({
  company,
  isRecommended,
  medianPrice,
  onRequestReprice,
}) {
  // parse number เผื่อราคามี comma เช่น "25,000"
  const median = Number(String(medianPrice).replace(/,/g, ""));
  const price = Number(String(company.price).replace(/,/g, ""));

  // เงื่อนไขใหม่ : ขอราคาใหม่ถ้ามากกว่าราคากลาง
  const shouldReprice =
    price > median && !company.status.includes("ปรับราคาใหม่");

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative overflow-hidden">

      {/* แถบสีน้ำเงินซ้าย */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-600 rounded-l-xl"></div>

      {/* หัวการ์ด */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Building2 className="w-6 h-6 text-blue-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 tracking-wide flex items-center gap-2">
            {company.name}

            {/* ⭐ แนะนำ */}
            {isRecommended && (
              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 border border-yellow-300 rounded-md">
                ⭐ แนะนำ
              </span>
            )}
          </h2>

          <p className="text-sm text-gray-500">ผู้เสนอราคาครั้งนี้</p>
        </div>
      </div>

      {/* ราคา */}
      <p className="text-gray-600 mt-1">
        ราคาเสนอ:{" "}
        <span className="text-lg font-semibold text-[#0B3C8A]">
          {Number(price).toLocaleString()} บาท
        </span>
      </p>

      {/* สถานะ */}
      <p className="text-gray-600 mt-1">
        สถานะ:{" "}
        <span
          className={`font-medium px-2 py-1 rounded-md text-sm
            ${
              company.status.includes("ปรับราคาใหม่")
                ? "text-purple-700 bg-purple-100"
                : company.status === "ส่งสำเร็จ"
                ? "text-green-700 bg-green-100"
                : company.status === "รอเสนอราคา"
                ? "text-yellow-700 bg-yellow-100"
                : "text-blue-700 bg-blue-100"
            }`}
        >
          {company.status}
        </span>
      </p>

      {/* ปุ่มขอปรับราคาใหม่ */}
      {shouldReprice && (
        <button
          onClick={() => onRequestReprice(company)}
          className="mt-4 w-full flex justify-center items-center gap-2 
                     bg-red-50 border border-red-300 text-red-700 
                     px-3 py-2 rounded-lg font-medium hover:bg-red-100"
        >
          <RefreshCcw className="w-4 h-4" />
          ขอปรับราคาใหม่
        </button>
      )}

      {/* ไฟล์แนบ */}
      {company.files && company.files.length > 0 && (
        <div className="mt-6">
          <p className="font-medium text-gray-700 mb-2">ไฟล์ที่อัปโหลดแล้ว</p>

          <div className="space-y-2">
            {company.files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 border rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <File className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 text-sm">{file.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button className="text-blue-600 hover:underline flex items-center gap-1">
                    <Eye className="w-4 h-4" /> ดู
                  </button>
                  <button className="text-green-600 hover:underline flex items-center gap-1">
                    <Download className="w-4 h-4" /> ดาวน์โหลด
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
