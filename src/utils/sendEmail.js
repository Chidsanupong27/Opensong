import emailjs from "@emailjs/browser";

// export function sendVerifyEmail({ toEmail, toName, otp,role }) {
//   const serviceID = "service_9mnvfky";
//   const templateID = "template_z30484r";
//   const publicKey = "0TmfkceHskhT-dQZg";

//   const params = {
//   email: "Chidsan7@gmail.com",        // ตรงกับ {{email}}
//   name: "ชิษณุพงศ์ พลศรี",          // ตรงกับ {{name}}
//   otp: otp,                 // ตรงกับ {{otp}}
//   role: "วิศวกรผู้เปิดซอง",              
//   expire_time: 5         // ตรงกับ {{expire_time}}
// };


//   return emailjs.send(serviceID, templateID, params, publicKey);
// }


// ================================
// 1) ส่ง OTP ยืนยันกรรมการ
// ================================
export function sendVerifyEmail({ toEmail, toName, otp, role }) {
  const serviceID = "service_9mnvfky";
  const templateID = "template_z30484r";
  const publicKey = "0TmfkceHskhT-dQZg";

  const params = {
    email: toEmail,
    name: toName,
    otp: otp,
    role: role,
    expire_time: 5,
  };

  return emailjs.send(serviceID, templateID, params, publicKey);
}

// ================================
// 2) ส่งอีเมลให้ vendor “ขอราคาใหม่”
// ================================
export function sendRequestNewPriceEmail({ toEmail, company, oldPrice }) {
  const serviceID = "service_9mnvfky";
  const templateID = "template_i20x3ex"; // เทมเพลตสำหรับขอราคาใหม่
  const publicKey = "0TmfkceHskhT-dQZg";

  const reviseLink = `http://localhost:5173/vendor/revise?company=${encodeURIComponent(
    company
  )}&oldPrice=${encodeURIComponent(oldPrice)}`;

  const params = {
    email: toEmail,
    company: company,
    old_price: oldPrice,
    revise_link: reviseLink,
  };

  return emailjs.send(serviceID, templateID, params, publicKey);
}
