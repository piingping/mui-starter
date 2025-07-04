import { Typography, Stack } from "@mui/material";
import { mockJobs } from "../mock/JobList.mock";

const JobInfoContainer = ({ jobId }: { jobId: number }) => {
  const job = mockJobs.find((j) => j.id === jobId);

  const labelStyle = {
    fontWeight: 500,
    fontSize: "0.75rem",
    color: "#9E9E9E",
  };

  const valueStyle = {
    fontWeight: 400,
    fontSize: "1rem",
    padding: "2px",
    backgroundColor: "#FAFAFA",
  };

  return (
    <>
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
        <Typography fontWeight={700} fontSize={"1rem"}>
          งานที่สมัคร
        </Typography>

        <Stack>
          <Typography sx={labelStyle}>ชื่องาน</Typography>
          <Typography sx={valueStyle}>{job?.title}</Typography>
        </Stack>

        <Stack>
          <Typography sx={labelStyle}>ภาระงาน</Typography>
          <Typography sx={valueStyle}>{job?.responsibilities}</Typography>
        </Stack>

        <Stack>
          <Typography sx={labelStyle}>คุณสมบัติ</Typography>
          <Typography sx={valueStyle}>{job?.qualifications}</Typography>
        </Stack>

        <Stack>
          <Typography sx={labelStyle}>ค่าตอบแทน</Typography>
          <Typography sx={valueStyle}>{job?.salary} {job?.salaryType}</Typography>
        </Stack>

        <Stack>
          <Typography sx={labelStyle}>เบอร์ติดต่อ</Typography>
          <Typography sx={valueStyle}>{job?.tel}</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default JobInfoContainer;
