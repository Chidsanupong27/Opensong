import { Trophy } from "lucide-react";

export default function WinnerInfoCard({ winner }) {
  //เป็นแค่การ์ด ผู้ชนะการเสนอราคาเฉยๆ 
  return (
    <div className="bg-white border rounded-xl shadow p-6 flex items-center gap-4">
      <div className="p-3 bg-yellow-100 rounded-xl">
        <Trophy className="w-8 h-8 text-yellow-600" />
      </div>

      <div>
        <p className="text-gray-600 text-sm">ผู้ชนะการเสนอราคา</p>
        <h2 className="text-xl font-bold text-gray-900">{winner.name}</h2>

        <p className="text-gray-700 mt-1">
          ราคาที่ชนะ:{" "}
          <span className="font-semibold text-green-700">
            {winner.price.toLocaleString()} บาท
          </span>
        </p>
      </div>
    </div>
  );
}
