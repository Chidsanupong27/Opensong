// ตรวจสอบว่าเป็นวันที่ที่ถูกต้องหรือไม่
export function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

// ตรวจสอบว่า start_date ≤ end_date
export function validateDateRange(start, end) {
  const s = new Date(start);
  const e = new Date(end);

  if (!isValidDate(s) || !isValidDate(e)) {
    return { valid: false, message: "กรุณาเลือกวันที่ให้ถูกต้อง" };
  }

  if (s > e) {
    return { valid: false, message: "วันที่เริ่มงานต้องไม่น้อยกว่าวันที่สิ้นสุดงาน" };
  }

  return { valid: true };
}

// ตรวจสอบวันที่สิ้นสุด ≥ วันนี้
export function validateEndDateNotPast(end) {
  const e = new Date(end);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (e < today) {
    return { valid: false, message: "วันที่สิ้นสุดงานต้องไม่น้อยกว่าวันปัจจุบัน" };
  }

  return { valid: true };
}

// ตรวจสอบไฟล์ PDF
export function validatePdfFile(file) {
  if (!file) return { valid: false, message: "กรุณาเลือกไฟล์" };

  const allowedType = "application/pdf";

  if (file.type !== allowedType) {
    return { valid: false, message: "อนุญาตเฉพาะไฟล์ PDF เท่านั้น" };
  }

  return { valid: true };
}

// ตรวจสอบขนาดไฟล์ ≤ 10 MB
export function validateFileSize(file, maxSizeMB = 10) {
  if (!file) return { valid: false, message: "กรุณาเลือกไฟล์" };

  const maxBytes = maxSizeMB * 1024 * 1024;

  if (file.size > maxBytes) {
    return { valid: false, message: `ไฟล์ต้องมีขนาดไม่เกิน ${maxSizeMB} MB` };
  }

  return { valid: true };
}

// Validation รวมสำหรับไฟล์แนบ
export function validateAttachment(file) {
  const typeCheck = validatePdfFile(file);
  if (!typeCheck.valid) return typeCheck;

  const sizeCheck = validateFileSize(file);
  if (!sizeCheck.valid) return sizeCheck;

  return { valid: true };
}
