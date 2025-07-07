export const ApplicationStatus = {
  PENDING: "รอการยืนยัน",
  ACCEPTED: "ผ่าน",
  REJECTED: "ไม่ผ่าน",
} as const;

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]