import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Drawer, Button } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CancelIcon from "@mui/icons-material/Cancel";
import type { Dispatch, SetStateAction } from "react";

interface JobActionButtonsProps {
  job: {
    location?: string;
    tel?: string;
    id?: number | string;
  };
  isSaved?: boolean;
  setIsSaved?: Dispatch<SetStateAction<boolean>>;
  showLocationButton?: boolean;
  showSaveButton?: boolean;
  showPhoneButton?: boolean;
  showCancelButton?: boolean;
}

const JobActionButtons = ({
  job,
  isSaved = false,
  setIsSaved,
  showLocationButton = true,
  showSaveButton = true,
  showPhoneButton = true,
  showCancelButton = true,
}: JobActionButtonsProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  const handleCancel = () => {
    const stored = localStorage.getItem("jobApplications");
    if (!stored || !job.id) return;

    const updatedList = JSON.parse(stored).filter(
      (a: any) => parseInt(a.jobId, 10) !== parseInt(job.id as string, 10)
    );

    localStorage.setItem("jobApplications", JSON.stringify(updatedList));
    setOpenDrawer(false);
    navigate(`/history/detail/${job.id}/canceled`);
  };

  return (
    <>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-around"
        spacing={3}
        height="104px"
        paddingX={"1rem"}
      >
        {showLocationButton && job.location && (
          <Button
            component="a"
            href={`https://www.google.com/maps/search/${encodeURIComponent(
              job.location!
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              flex: 1,
              bgcolor: "#FAFAFA",
              p: 2,
              borderRadius: 2,
              textTransform: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
              textDecoration: "none",
              color: "#1C1818",
            }}
          >
            <LocationPinIcon sx={{ width: 39, height: 40, color: "#3AB186" }} />
            <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
              ดูที่อยู่
            </Typography>
          </Button>
        )}

        {showSaveButton && setIsSaved && (
          <Button
            onClick={() => setIsSaved((prev) => !prev)}
            fullWidth
            sx={{
              flex: 1,
              bgcolor: isSaved ? "#3AB186" : "#FAFAFA",
              p: 2,
              borderRadius: 2,
              textTransform: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
              color: isSaved ? "#FFFFFF" : "#1C1818",
            }}
          >
            <StarRoundedIcon
              sx={{
                width: 39,
                height: 39,
                color: isSaved ? "#FFFFFF" : "#3AB186",
              }}
            />
            <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
              บันทึก
            </Typography>
          </Button>
        )}

        {showPhoneButton && job.tel && (
          <Button
            component="a"
            href={`tel:${job.tel}`}
            fullWidth
            sx={{
              flex: 1,
              bgcolor: "#FAFAFA",
              p: 2,
              borderRadius: 2,
              textTransform: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
              textDecoration: "none",
              color: "#1C1818",
            }}
          >
            <LocalPhoneIcon sx={{ width: 39, height: 40, color: "#3AB186" }} />
            <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
              ติดต่อ
            </Typography>
          </Button>
        )}

        {showCancelButton && (
          <Stack
            flex={1}
            bgcolor="#FAFAFA"
            p={2}
            borderRadius={2}
            alignItems="center"
            textAlign={"center"}
            gap={"0.25rem"}
            onClick={() => setOpenDrawer(true)}
          >
            <CancelIcon
              sx={{ width: "39px", height: "40px", color: "#EF5D66" }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#1C1818" }}
            >
              ยกเลิกสมัคร
            </Typography>
          </Stack>
        )}
      </Stack>

      {/* Drawer ยืนยันการยกเลิกสมัครงาน*/}
      <Drawer
        anchor="bottom"
        slotProps={{
          paper: {
            sx: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            },
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Stack padding="1.5rem" spacing={2} textAlign={"center"}>
          <Typography fontWeight={700} fontSize="1.25rem">
            ต้องการยกเลิกสมัครงานใช่ไหม?
          </Typography>
          <Typography fontWeight={400} fontSize="0.875rem">
            กดปุ่ม ‘ยกเลิกสมัคร’ เพื่อยืนยันยกเลิกการยื่นสมัครงานนี้
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "#FF8A00",
                borderRadius: "8px",
                color: "#111111",
                fontSize: "1rem",
              }}
              onClick={() => setOpenDrawer(false)}
            >
              กลับ
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleCancel}
              sx={{
                background: "#FF8A00",
                borderRadius: "8px",
                color: "#111111",
                fontSize: "1rem",
              }}
            >
              ยกเลิกสมัคร
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};

export default JobActionButtons;
