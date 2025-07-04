import { mockUser } from "../mock/userData.mock";
import { Typography, Stack, Avatar } from "@mui/material";
import { useLiff } from "../hooks/useLiff";

const PersonalInfomation = () => {
  const user = mockUser;
  const { profile, isReady, isLoggedIn } = useLiff();

  if (!isReady) return <Typography>กำลังโหลด LIFF...</Typography>;
  if (!isLoggedIn) return <Typography>ยังไม่ได้เข้าสู่ระบบ</Typography>;

  const labelStyle = {
    fontWeight: 500,
    fontSize: "0.75rem",
    color: "#9E9E9E",
  };

  const valueStyle = {
    fontWeight: 400,
    fontSize: "1rem",
    padding: "2px",
    backgroundColor: "#FAFAFA",
  };

  return (
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
      <Avatar
        src={profile?.pictureUrl}
        alt="profile"
        sx={{ width: 60, height: 60 }}
      />

      <Stack>
        <Typography sx={labelStyle}>ชื่อ-สกุล</Typography>
        <Typography sx={valueStyle}>
          {user.prefix}
          {user.fullName}
        </Typography>
      </Stack>

      <Stack>
        <Typography sx={labelStyle}>อายุ</Typography>
        <Typography sx={valueStyle}>
          {user.age}
        </Typography>
      </Stack>

      <Stack>
        <Typography sx={labelStyle}>เบอร์ติดต่อ</Typography>
        <Typography sx={valueStyle}>
          {user.phone}
        </Typography>
      </Stack>

      <Stack>
        <Typography sx={labelStyle}>ไลน์ไอดี</Typography>
        <Typography sx={valueStyle}>
          {user.lineID}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PersonalInfomation;
