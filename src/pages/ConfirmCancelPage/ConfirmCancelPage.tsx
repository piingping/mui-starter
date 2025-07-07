import { useNavigate } from "react-router-dom";
import { Box, Typography,Button } from "@mui/material";
import ConfirmCancel from "../../assets/ConfirmCancel.svg";

const ConfirmCancelPage = () => {
    const navigate = useNavigate()
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={"2rem"}
    >
      <img
        src={ConfirmCancel}
        alt="graphic"
        style={{ width: "280px", height: "300px" }}
      />
      <Typography
        textAlign="center"
        fontWeight="700"
        fontSize="1.125rem"
        mt={3}
      >
        ได้รับข้อมูลแล้ว
        <br /> ระบบจะทำการแจ้งกลับทางผู้ว่าจ้าง
      </Typography>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          border:"1.5px solid #FF8A00",
          borderRadius: "8px",
          color: "#1C1818",
          fontSize: "1rem",
          fontWeight:"700",
          width:"155.5px",
          boxShadow: "0px 4px 10px #0000001A",
        }}
        onClick={() => navigate(`/history`)}
      >
        ปิดหน้าต่าง
      </Button>
    </Box>
  );
};

export default ConfirmCancelPage;
