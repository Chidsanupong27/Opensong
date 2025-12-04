import { FileText, Download, Eye } from "lucide-react";

export default function CentralFileCard({ file }) {
  return (
    <div
      className="
        p-6 rounded-2xl 
        border border-gray-200 
        bg-white 
        shadow-sm 
        hover:shadow-md 
        transition-all 
      "
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className="
            w-12 h-12 
            flex items-center justify-center 
            rounded-xl
          "
          style={{
            backgroundColor: file.bg || "#f6f8fa",
            color: file.color || "#0B3C8A",
          }}
        >
          <FileText className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {file.title}
          </h3>
          <p className="text-sm text-gray-500">{file.filename}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        {/* ดูไฟล์ */}
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            px-3 py-2 
            text-sm 
            text-white 
            bg-blue-600 
            rounded-lg 
            hover:bg-blue-700 
            transition
          "
        >
          <Eye className="w-4 h-4" />
          ดูไฟล์
        </a>

        {/* ดาวน์โหลด */}
        <a
          href={file.url}
          download
          className="
            inline-flex items-center gap-2
            px-3 py-2 
            text-sm text-blue-700 
            bg-blue-50 
            rounded-lg 
            hover:bg-blue-100 
            transition
          "
        >
          <Download className="w-4 h-4" />
          ดาวน์โหลด
        </a>
      </div>
    </div>
  );
}
