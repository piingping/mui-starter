import type { JobStatus } from "../types/jobStatus";
import { ApplicationStatus } from "../types/applicationStatus";

type StatusStyle = {
  bg: string;
  border: string;
  text: string;
};

export const statusStyleMap: Record<JobStatus | ApplicationStatus, StatusStyle> = {
  //Job status
  "ว่างอยู่": { bg: "#E0FFE4", border: "#00C853", text: "#007E33" },
  "ใกล้เต็ม": { bg: "#FFD4B6", border: "#FFAB00", text: "#FF6F00" },
  "เต็มแล้ว": { bg: "#E4E4E4", border: "#9E9E9E", text: "#9E9E9E" },

  //Application status
  "รอการยืนยัน": { bg: "#FFD4B6", border: "#FFAB00", text: "#FF6F00" },
  "ผ่าน": { bg: "#E0FFE4", border: "#00C853", text: "#007E33" },
  "ไม่ผ่าน": { bg: "#E4E4E4", border: "#9E9E9E", text: "#9E9E9E" },
};
