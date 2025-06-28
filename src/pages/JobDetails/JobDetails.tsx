import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  Divider,
  Button,
  Alert,
  Snackbar,
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

  return (
    <>
      {/* Header */}
      <Box>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ backgroundColor: "#00794E", padding: 0, margin: 0 }}
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
          </Toolbar>
        </AppBar>
      </Box>

      {/* Content */}
      <Box
        paddingTop={"65px"}
        paddingBottom={"20px"}
        display={"flex"}
        flexDirection="column"
        gap={"16px"}
      >
        <Typography variant="h5" fontWeight="bold">
          {job.title}
        </Typography>
        <Box display={"flex"} sx={{ gap: "10px" }}>
          <Typography color="green" sx={{ fontSize: "14px" }}>
            {job.tags}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography color="text.secondary" sx={{ fontSize: "14px" }}>
            ประกาศเมื่อวันที่{" "}
            {format(new Date(job.postedAt), "d MMMM", { locale: th })}{" "}
            {new Date(job.postedAt).getFullYear() + 543}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ fontSize: "16px" }}>
          {job.description}
        </Typography>

        {/* Icon Button Grid */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent={"space-evenly"}
          gap={"27px"}
          height="104px"
        >
          <Box
            flex={1}
            bgcolor="#FAFAFA"
            p={2}
            borderRadius={2}
            textAlign="center"
            onClick={() => {
              const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(
                job.location
              )}`;
              window.open(mapsUrl, "_blank");
            }}
          >
            <LocationPinIcon
              sx={{ width: "39px", height: "40px", color: "#3AB186" }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#1C1818" }}
            >
              ดูที่อยู่
            </Typography>
          </Box>

          <Box
            flex={1}
            bgcolor={isSaved ? "#3AB186" : "#FAFAFA"}
            p={2}
            borderRadius={2}
            textAlign="center"
            onClick={() => setIsSaved((prev) => !prev)}
          >
            <StarRoundedIcon
              sx={{
                width: "39px",
                height: "39px",
                color: isSaved ? "#FFFFFF" : "#3AB186",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: isSaved ? "#FFFFFF" : "#1C1818",
              }}
            >
              บันทึก
            </Typography>
          </Box>

          <Box
            flex={1}
            bgcolor="#FAFAFA"
            p={2}
            borderRadius={2}
            textAlign="center"
            onClick={() => {
              window.location.href = `tel:${job.tel}`;
            }}
          >
            <LocalPhoneIcon
              sx={{ width: "39px", height: "40px", color: "#3AB186" }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#1C1818" }}
            >
              ติดต่อ
            </Typography>
          </Box>
        </Box>
        <Divider />

        {/* จำนวนเปืดรับ ค่าตอบแทน */}

        <Box display="flex" flexWrap="wrap" justifyContent={"space-around"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="16px"
            alignItems={"center"}
          >
            <Typography sx={{ fontSize: "14px", color: "#9E9E9E" }}>
              จำนวนที่เปิดรับ
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              {job.positions} ตำแหน่ง
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="16px"
            alignItems={"center"}
          >
            <Typography sx={{ fontSize: "14px", color: "#9E9E9E" }}>
              ค่าตอบแทน
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
              {job.salary} {job.salaryType}{" "}
            </Typography>
          </Box>
        </Box>
        <Divider />

        {/* ที่อยู่ที่ทำงาน */}
        <Box display={"flex"} gap={"16px"}>
          <PlaceOutlinedIcon
            sx={{ width: "18px", height: "18px", color: "#3D3D3D" }}
          />
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#595E61" }}
          >
            {job.location}
          </Typography>
        </Box>

        {/* รูปใหญ่ */}
        <Box
          component="img"
          src={job.imageUrl[0]}
          alt={job.title}
          sx={{
            width: "100%",
            mb: 2,
          }}
        />

        {/* รายละเอียดงาน */}
        <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
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
            <Box
              display={"flex"}
              gap={"16px"}
              alignItems={"center"}
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
            </Box>
          </Box>

          <Divider />

          <Box display={"flex"} gap={"10px"}>
            <InfoOutlineIcon sx={{ fontSize: "16px" }} />
            <Typography sx={{ fontSize: "14px" }}>
              แจ้งลาล่วงหน้ากับหัวหน้างานเสมอ ติดต่อสอบถามข้อมูลเพิ่มเติม
              ก่อนกดสมัคร จะมีการนัดสัมภาษณ์งานก่อนยืนยันรับเข้าทำงาน
            </Typography>
          </Box>

          <Divider />

          <Box display="flex" gap="10px" alignItems="center">
            <PersonOutlineRoundedIcon sx={{ fontSize: "18px" }} />
            <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
              {isReady && isLoggedIn && profile?.displayName
                ? `${profile.displayName}`
                : "กำลังโหลดชื่อผู้ใช้..."}
            </Typography>
          </Box>

          {/* รูปเพิ่มเติม */}
          <Box>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px" }} mb={1}>
              รูปภาพเพิ่มเติม
            </Typography>

            {job.imageUrl.length > 1 ? (
              <Box display="flex" gap={2} overflow="auto">
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
              </Box>
            ) : (
              <Typography color="text.secondary" fontSize={"14px"} fontWeight={"600"}>
                ไม่มีรูปภาพเพิ่มเติม
              </Typography>
            )}
          </Box>

          <ImageLightbox
            images={job.imageUrl}
            open={openImageViewer}
            initialIndex={currentImageIndex+1}
            onClose={() => setOpenImageViewer(false)}
          />

          {/* ปุ่มสมัครงาน */}
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
        </Box>
      </Box>
    </>
  );
};

export default JobDetails;
