import emailjs from "@emailjs/browser";

export function sendVerifyEmail({ toEmail, toName, otp }) {
  const serviceID = "service_9mnvfky";
  const templateID = "template_z30484r";
  const publicKey = "0TmfkceHskhT-dQZg";

  const params = {
  email: "chidsan7@gmail.com",        // ตรงกับ {{email}}
  name: "ชิษณุพงศ์ พลศรี",          // ตรงกับ {{name}}
  otp: otp,              // ตรงกับ {{otp}}
  expire_time: 5         // ตรงกับ {{expire_time}}
};


  return emailjs.send(serviceID, templateID, params, publicKey);
}

// import emailjs from "@emailjs/browser";

// export function sendVerifyEmail({ toEmail, toName, otp }) {
//   const serviceID = "service_9mnvfky";
//   const templateID = "template_z30484r";
//   const publicKey = "0TmfkceHskhT-dQZg";

//   const params = {
//     email: toEmail,        // ตรงกับ {{email}}
//     name: toName,          // ตรงกับ {{name}}
//     otp: otp,              // ตรงกับ {{otp}}
//     expire_time: 5         // ตรงกับ {{expire_time}}
//   };

//   return emailjs.send(serviceID, templateID, params, publicKey);
// }
