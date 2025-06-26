import type { JobStatus } from "../types/jobStatus";

export const statusStyleMap: Record<
  JobStatus,
  { bg: string; border: string; text: string }
> = {
  ว่างอยู่: {
    bg: "#e8f5e9",
    border: "#388e3c",
    text: "#1b5e20",
  },
  ใกล้เต็ม: {
    bg: "#fffde7",
    border: "#fbc02d",
    text: "#f57f17",
  },
  เต็มแล้ว: {
    bg: "#E4E4E4",
    border: "#9E9E9E",
    text: "#9E9E9E",
  },
};
