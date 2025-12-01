export default function Stepper({ activeStep = 1 }) {
  // อาร์เรย์ของขั้นตอนทั้งหมดในระบบ  
  // แต่ละขั้นมี id และ label ไว้แสดงชื่อ
  const steps = [
    { id: 1, label: "เลือกคณะกรรมการ" },
    { id: 2, label: "สถานะการเสนอราคา" },
    { id: 3, label: "เลือกผู้ชนะ" },
  ];

  return (
    // ส่วนแสดง Step ทั้งหมด เรียงแนวนอน
    <div className="flex justify-center gap-10 py-6 text-gray-600">

      {/* วนลูปสร้างบล็อกของแต่ละ Step */}

      {steps.map((step) => {
        // isActive = step ปัจจุบัน
        const isActive = step.id === activeStep;
        // isDone = step ที่อยู่ก่อนหน้า (ทำเสร็จแล้ว)
        const isDone = step.id < activeStep;


        return (
          <div
            key={step.id}
            // ถ้า step ทำแล้ว หรือเป็น step ปัจจุบัน → ชัดเจน
            // ถ้ายังไม่ถึง → จางลง (opacity-40)
            className={`flex flex-col items-center ${
              isActive || isDone ? "opacity-100" : "opacity-40"
            }`}
          >


            {/* วงกลมตัวเลข step 1 ตอนนี้ */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold 
              ${
                isActive
                  ? "bg-blue-600 text-white" 
                  : isDone
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }
              `}
            >
              {step.id}
            </div>


            {/* ข้อความ  label ใต้ตัวเลข*/}
            <span
              className={`mt-2 ${
                isActive
                  ? "text-blue-600 font-medium" //ปัจจุบัน = ฟ้า
                  : isDone
                  ? "text-green-600"    // ผ่านแล้ว = เขียว
                  : "text-gray-500"     // ยังไม่ถึง = เทา
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}


// รับ prop activeStep เพื่อบอกว่าตอนนี้อยู่ขั้นไหน
// สีของ step จะเปลี่ยนตามสถานะ:
// ฟ้า = ขั้นปัจจุบัน
// เขียว = ผ่านแล้ว
// เทา = ยังไม่ถึง
// ใช้การ map steps เพื่อสร้าง UI แบบ dynamic
// ทุกอย่าง responsive ด้วย flex + tailwind


