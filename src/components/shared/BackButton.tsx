import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)} 
      sx={{
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        minWidth: "unset", 
        padding: 0, 
        color: "inherit",
      }}
    >
      <ArrowBackIosRoundedIcon sx={{ fontSize: "14px", mr: 0.5, mt: "2px" }} />
      <Typography variant="body2" sx={{ fontSize: "14px" }}>
        กลับ
      </Typography>
    </Button>
  );
}

export default BackButton;
