export default function SubmitSummaryBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t py-4 shadow">
      <div className="max-w-4xl mx-auto flex justify-between">
        
        <button className="px-6 py-3 bg-gray-300 rounded-xl hover:bg-gray-400">
          ย้อนกลับ
        </button>

        <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  );
}
