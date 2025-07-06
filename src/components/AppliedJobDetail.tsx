import BackButton from "./shared/BackButton";
import { Stack, Typography, Divider } from "@mui/material";
import { mockJobs } from "../mock/JobList.mock";
import JobStatusChip from "./shared/JobStatusChip";
import PersonalInfomation from "./PersonalInfomation";
import JobInfoContainer from "./JobInfoContainer";
import JobActionButtons from "./JobActionButtons";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

function AppliedJobDetail({ jobId }: { jobId: number }) {
  const job = mockJobs.find((job) => job.id === jobId);

  const stored = localStorage.getItem("jobApplications");
  const appliedList = stored ? JSON.parse(stored) : [];
  const applicationInfo = appliedList.find(
    (a: any) => parseInt(a.jobId, 10) === jobId
  );

  console.log("jobId:", jobId);
  console.log("job:", job);

  return (
    <Stack padding={"1rem"} gap={"1rem"}>
      <BackButton />

      <Typography fontWeight={700} fontSize={"1.5rem"}>
        รีวิวข้อมูลการสมัคร
      </Typography>

      <Stack direction="row" justifyContent={"space-between"}>
        <Stack direction="row" gap={"0.5rem"}>
          <Typography color="green" fontSize={"0.875rem"}>
            {job?.tags}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography fontSize={"0.875rem"}>
            สมัครเมื่อ:{" "}
            {applicationInfo?.appliedAt
              ? new Date(applicationInfo.appliedAt).toLocaleDateString(
                  "th-TH",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )
              : "ไม่พบข้อมูล"}
          </Typography>
        </Stack>
        <JobStatusChip status={applicationInfo?.status || "รอการยืนยัน"} />
      </Stack>

      <JobInfoContainer jobId={jobId} />

      <Stack
        gap={"1.25rem"}
        sx={{
          border: "1px solid",
          borderColor: "#E4E4E4",
          borderRadius: "8px",
          paddingX: "1rem",
          paddingY: "1.5rem",
        }}
      >
        {" "}
        <Typography fontWeight={700} fontSize={"1rem"}>
          ข้อมูลเพิ่มเติมให้ผู้ว่าจ้าง
        </Typography>
        <Stack gap={"0.5rem"}>
          <Typography fontWeight={500} fontSize={"0.75rem"} color={"#9E9E9E"}>
            รายละเอียดเพิ่มเติม
          </Typography>
          <Typography fontWeight={400} fontSize={"1rem"} bgcolor={"#FAFAFA"}>
            {applicationInfo.note}
          </Typography>
        </Stack>
      </Stack>
      {job && <JobActionButtons job={{ ...job, id: jobId }} />}

      <Stack direction={"row"} gap={"0.5rem"}>
        <InfoOutlineIcon sx={{ fontSize: "1rem" }} />
        <Typography fontSize={"0.875rem"}>
          หลังยกเลิกการสมัครแล้ว คุณจะไม่สามารถแก้ไข ข้อมูลได้อีก
          กรุณาตรวจสอบข้อมูลให้ละเอียด
        </Typography>
      </Stack>

      <PersonalInfomation />
    </Stack>
  );
}

export default AppliedJobDetail;
