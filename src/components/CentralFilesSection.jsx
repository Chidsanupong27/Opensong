import { FolderDown } from "lucide-react";
import CentralFileCard from "./CentralFileCard";

export default function CentralFilesSection({ files }) {
  return (
    <div className="max-w-6xl mx-auto mt-14">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
        <FolderDown className="w-7 h-7 text-blue-700" />
        ไฟล์กลางสำหรับประกอบการพิจารณา
      </h2>

      <p className="text-gray-600 mb-6">
        เอกสารสำคัญที่เกี่ยวข้องกับการประกวดราคา (TOR / รายละเอียด / ราคากลาง)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {files.map((file, index) => (
          <CentralFileCard key={index} file={file} />
        ))}
      </div>
    </div>
  );
}
