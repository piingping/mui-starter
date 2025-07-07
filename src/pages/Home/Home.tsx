import { Button, Stack, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLiff } from "../../hooks/useLiff";

function Home() {
  const navigate = useNavigate();
  const { profile, isReady, isLoggedIn } = useLiff();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap={"1.5rem"}
    >
      <Avatar
        src={profile?.pictureUrl}
        alt="profile"
        sx={{ width: 100, height: 100 }}
      />
      <Typography fontWeight={600}>
        Welcome,{" "}
        {isReady && isLoggedIn && profile?.displayName
          ? `${profile.displayName}`
          : "กำลังโหลดชื่อผู้ใช้..."}
      </Typography>
      <Stack gap={"1rem"}>
        <Button variant="contained" onClick={() => navigate(`/jobList`)}>
          หางาน
        </Button>
        <Button variant="outlined" onClick={() => navigate(`/history`)}>
          ประวัติการสมัครงาน
        </Button>
      </Stack>
    </Stack>
  );
}

export default Home;
