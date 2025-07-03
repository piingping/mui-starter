import { Stack, Typography } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CancelIcon from '@mui/icons-material/Cancel';
import type { Dispatch, SetStateAction } from "react";

interface JobActionButtonsProps {
  job: {
    location?: string;
    tel?: string;
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
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      spacing={3.375}
      height="104px"
      paddingX={"1.5rem"}
    >
      {showLocationButton && job.location && (
        <Stack
          flex={1}
          bgcolor="#FAFAFA"
          p={2}
          borderRadius={2}
          alignItems="center"
          onClick={() => {
            const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(
              job.location!
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
        </Stack>
      )}

      {showSaveButton && setIsSaved && (
        <Stack
          flex={1}
          bgcolor={isSaved ? "#3AB186" : "#FAFAFA"}
          p={2}
          borderRadius={2}
          alignItems="center"
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
        </Stack>
      )}

      {showPhoneButton && job.tel && (
        <Stack
          flex={1}
          bgcolor="#FAFAFA"
          p={2}
          borderRadius={2}
          alignItems="center"
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
        </Stack>
      )}
      {showCancelButton && 
              <Stack
          flex={1}
          bgcolor="#FAFAFA"
          p={2}
          borderRadius={2}
          alignItems="center"
          onClick={() => {
            window.location.href = `tel:${job.tel}`;
          }}
        >
          <CancelIcon
            sx={{ width: "39px", height: "40px", color: "#EF5D66" }}
          />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#1C1818" }}
          >
            ยกเลิกสมัคร
          </Typography>
        </Stack>}
    </Stack>
  );
};

export default JobActionButtons;
