// CommitteeInfoBox.jsx
export default function CommitteeInfoBox() {
  return (
    <div className="max-w-6xl mx-auto mt-4 text-sm text-blue-900">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 leading-relaxed">
        <p className="font-medium mb-1">
          เมื่อกด “ยืนยัน”
        </p>
        <p>
          ระบบจะส่งอีเมลไปยังคณะกรรมการที่คุณเลือกทุกคน 
          เพื่อแจ้งว่าตำแหน่งนั้นเป็นความรับผิดชอบของเขา
        </p>
        <p className="mt-1">
          หลังจากคณะกรรมการทุกคนยืนยันรับหน้าที่แล้ว 
          คุณจะได้รับรหัสยืนยัน <span className="font-semibold">5 หลัก</span> 
          เพื่อนำไปใช้ในขั้นตอนถัดไปก่อนเข้าสู่หน้าสถานะการเสนอราคา
        </p>
      </div>
    </div>
  );
}
