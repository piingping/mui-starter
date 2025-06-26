export type JobStatus = 'ว่างอยู่' | 'ใกล้เต็ม' | 'เต็มแล้ว';
export type SalaryType = "บาท/ชั่วโมง" | "บาท/รอบ" | "บาท/วัน" | "บาท/เดือน";

export type Job = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  salary: number;
  salaryType: SalaryType;
  postedAt: string;
  status: JobStatus;
  time: string;
  workplaceName: string;
  location: string;
  imageUrl: string[];
  positions: number;
  tel: string;
  responsibilities: string;
  qualifications: string;
  workDays: string;
};