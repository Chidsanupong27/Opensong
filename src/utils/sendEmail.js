// import emailjs from "@emailjs/browser";

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





import emailjs from "@emailjs/browser";

export function sendVerifyEmail({ toEmail, toName, otp, role }) {
  const serviceID = "service_9mnvfky";
  const templateID = "template_z30484r";
  const publicKey = "0TmfkceHskhT-dQZg";

  const params = {
    email: toEmail,     // {{email}}
    name: toName,       // {{name}}
    otp: otp,           // {{otp}}
    role: role,         // {{role}}
    expire_time: 5      // {{expire_time}}
  };

  return emailjs.send(serviceID, templateID, params, publicKey);
}
