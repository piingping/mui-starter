import { Typography, Box, Stack, TextField, Button } from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import BackButton from "../../components/shared/BackButton";
import PersonalInfomation from "../../components/PersonalInfomation";
import JobInfoContainer from "../../components/JobInfoContainer";

const ReviewRegisteration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    const previous = JSON.parse(
      localStorage.getItem("jobApplications") || "[]"
    );

    const newApplication = {
      jobId: id,
      appliedAt: new Date().toISOString(),
      note: note,
    };

    localStorage.setItem(
      "jobApplications",
      JSON.stringify([...previous, newApplication])
    );

    navigate(`/jobs/${id}/submitted`);
  };

  if (!id) return <Typography>ไม่พบงาน</Typography>;

  return (
    <Box
      margin={"1.5rem"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <BackButton />

      <Typography fontWeight={700} fontSize={"1.5rem"}>
        รีวิวข้อมูลการสมัคร
      </Typography>

      <PersonalInfomation />

      <JobInfoContainer jobId={parseInt(id)} />

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
          กรอกข้อมูลเพิ่มเติมให้ผู้ว่าจ้าง
        </Typography>
        <TextField
          multiline
          rows={4}
          placeholder="รายละเอียดเพิ่มเติม"
          variant="outlined"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Stack>

      <Stack direction="row" spacing={1.25}>
        <InfoOutlineIcon sx={{ fontSize: "1rem" }} />
        <Typography fontSize={"0.75rem"} fontWeight={400}>
          หลังสมัครงานแล้ว คุณจะได้รับการแจ้งเตือนผ่านทาง Line Official
          ของชาญชาลา กรุณาเข้ามาตรวจสอบ สถานะอีกครั้งในระบบเชี่ยวแชร์แคร์เรีย
        </Typography>
      </Stack>

      <Box textAlign="center">
        <Button
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            px: "18px",
            py: "12px",
            backgroundColor: "#FF8A00",
            color: "#111111",
            width: "100%",
            borderRadius: "8px",
          }}
          onClick={handleSubmit}
        >
          ยืนยัน และ ส่งใบสมัคร
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewRegisteration;
