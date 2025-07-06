import { Box, Typography, Button } from "@mui/material";
import sentRegisterForm from "../../assets/sentRegisterForm.png";
import { useNavigate } from "react-router-dom";

const SubmittedPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={"3rem"}
    >
      <img
        src={sentRegisterForm}
        alt="graphic"
        style={{ width: "276px", height: "211px" }}
      />
      <Typography textAlign="center" fontWeight="bold" fontSize="1.5rem" mt={3}>
        ส่งแบบฟอร์มการสมัคร <br />
        ของคุณแล้ว
        <br />
        รอการติดต่อกลับ
      </Typography>

      <Button
        fullWidth
        variant="outlined"
        sx={{
          border: "1.5px solid #FF8A00",
          borderRadius: "8px",
          color: "#1C1818",
          fontSize: "1rem",
          fontWeight: "700",
          width: "155.5px",
          boxShadow: "0px 4px 10px #0000001A",
        }}
        onClick={() => navigate(`/`)}
      >
        ปิดหน้าต่าง
      </Button>
    </Box>
  );
};

export default SubmittedPage;
