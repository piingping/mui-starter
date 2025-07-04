import { Box, Typography } from "@mui/material";
import sentRegisterForm from "../../assets/sentRegisterForm.png";

function SubmittedPage() {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={"4.5rem"}
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
    </Box>
  );
}

export default SubmittedPage;
