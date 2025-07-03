import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Divider,
  Button,
  Alert,
  Snackbar,
  Stack,
  Box,
} from "@mui/material";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { mockJobs } from "../../mock/JobList.mock";
import ImageLightbox from "../../components/ImageLightbox";
import { useLiff } from "../../hooks/useLiff";
import BackButton from "../../components/shared/BackButton";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import JobStatusChip from "../../components/shared/JobStatusChip";
import JobActionButtons from "../../components/JobActionButtons";

const JobDetails = () => {
  const { profile, isReady, isLoggedIn } = useLiff();
  const { id } = useParams();
  const jobId = parseInt(id || "", 10);
  const job = mockJobs.find((job) => job.id === jobId);

  if (!job) {
    return <Typography>ไม่พบงานที่คุณต้องการ</Typography>;
  }

  const [isSaved, setIsSaved] = useState(false);
  const [open, setOpen] = useState(false);
  const [openImageViewer, setOpenImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  console.log("Job Title:", job.title);

  return (
    <>
      {/* Header */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: "#00794E", padding: 0, margin: 0}}
      >
        <Toolbar
          disableGutters
          sx={{
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <BackButton />

          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontSize: "16px",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto",
              width: "fit-content",
            }}
          >
            ข้อมูลงาน
          </Typography>

          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: "16px", right: 0 }}>
              <JobStatusChip status={job.status} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content */}

      <Stack spacing={3} mt={10}>
        <Typography variant="h5" fontWeight="bold" paddingX={"1rem"}>
          {job.title}
        </Typography>

        <Stack direction="row" spacing={1.25} paddingX={"1rem"}>
          <Typography color="green" sx={{ fontSize: "14px" }}>
            {job.tags}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography color="text.secondary" sx={{ fontSize: "14px" }}>
            ประกาศเมื่อวันที่{" "}
            {format(new Date(job.postedAt), "d MMMM", { locale: th })}{" "}
            {new Date(job.postedAt).getFullYear() + 543}
          </Typography>
        </Stack>

        <Typography variant="body1" paddingX={"1rem"} sx={{ fontSize: "16px" }}>
          {job.description}
        </Typography>

        {/* Icon Button Grid */}
        <JobActionButtons job={job} isSaved={isSaved} setIsSaved={setIsSaved} showCancelButton={false} />

        <Divider />

        <Stack direction="row" flexWrap="wrap" justifyContent="space-around">
          <Stack direction="column" spacing={2} alignItems="center">
            <Typography sx={{ fontSize: "14px", color: "#9E9E9E" }}>
              จำนวนที่เปิดรับ
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              {job.positions} ตำแหน่ง
            </Typography>
          </Stack>
          <Stack direction="column" spacing={2} alignItems="center">
            <Typography sx={{ fontSize: "14px", color: "#9E9E9E" }}>
              ค่าตอบแทน
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              {job.salary} {job.salaryType}
            </Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack direction="row" spacing={2} paddingX={"1rem"}>
          <PlaceOutlinedIcon
            sx={{ width: "18px", height: "18px", color: "#3D3D3D" }}
          />
          <Typography sx={{ fontWeight: 400, fontSize: 14, color: "#595E61" }}>
            {job.location}
          </Typography>
        </Stack>

        <Box
          component="img"
          src={job.imageUrl[0]}
          alt={job.title}
          sx={{ width: "100%", mb: 2, padding: 0 }}
        />

        <Stack direction="column" spacing={3} paddingX={"1rem"}>
          <Box>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px" }}>
              ภาระงาน
            </Typography>
            <Typography sx={{ color: "#1C1818", fontSize: "16px" }}>
              {job.responsibilities}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px" }}>
              คุณสมบัติ
            </Typography>
            <Typography sx={{ color: "#1C1818", fontSize: "16px" }}>
              {job.qualifications}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px" }}>
              วัน เวลาทำงาน
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              textAlign="center"
            >
              <AccessTimeRoundedIcon sx={{ fontSize: "16px" }} />
              <Typography
                sx={{ color: "#1C1818", fontSize: "16px", fontWeight: "700" }}
              >
                {job.workDays}
              </Typography>
              <Typography sx={{ color: "#1C1818", fontSize: "16px" }}>
                {job.time}
              </Typography>
            </Stack>
          </Box>

          <Divider />

          <Stack direction="row" spacing={1.25}>
            <InfoOutlineIcon sx={{ fontSize: "16px" }} />
            <Typography sx={{ fontSize: "14px" }}>
              แจ้งลาล่วงหน้ากับหัวหน้างานเสมอ ติดต่อสอบถามข้อมูลเพิ่มเติม
              ก่อนกดสมัคร จะมีการนัดสัมภาษณ์งานก่อนยืนยันรับเข้าทำงาน
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" spacing={1.25} alignItems="center">
            <PersonOutlineRoundedIcon sx={{ fontSize: "18px" }} />
            <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
              {isReady && isLoggedIn && profile?.displayName
                ? `${profile.displayName}`
                : "กำลังโหลดชื่อผู้ใช้..."}
            </Typography>
          </Stack>

          <Box>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px" }} mb={1}>
              รูปภาพเพิ่มเติม
            </Typography>
            {job.imageUrl.length > 1 ? (
              <Stack direction="row" spacing={2} overflow="auto">
                {job.imageUrl.slice(1).map((url, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={url}
                    alt={`เพิ่มเติม ${index + 1}`}
                    sx={{
                      width: "150px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: 2,
                      border: "1px solid #ccc",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setOpenImageViewer(true);
                    }}
                  />
                ))}
              </Stack>
            ) : (
              <Typography
                color="text.secondary"
                fontSize="14px"
                fontWeight={600}
              >
                ไม่มีรูปภาพเพิ่มเติม
              </Typography>
            )}
          </Box>

          <ImageLightbox
            images={job.imageUrl}
            open={openImageViewer}
            initialIndex={currentImageIndex + 1}
            onClose={() => setOpenImageViewer(false)}
          />

          <Box mt={3} textAlign="center">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                px: "18px",
                py: "12px",
                backgroundColor: "#FF8A00",
                color: "#111111",
                width: "100%",
                borderRadius: "8px",
              }}
              onClick={() => setOpen(true)}
            >
              สมัครงานนี้
            </Button>
          </Box>

          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              ส่งแบบฟอร์มสมัครงานของคุณแล้ว รอการตอบกลับ
            </Alert>
          </Snackbar>
        </Stack>
      </Stack>
    </>
  );
};

export default JobDetails;
