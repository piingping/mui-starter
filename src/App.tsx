import { useLiff } from "./hooks/useLiff.tsx";
import { CircularProgress, Box, Typography } from "@mui/material";
import JobList from "./pages/JobList/JobList.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails/JobDetails";
import ReviewRegisteration from "./pages/ReviewRegisteration/ReviewRegisteration";
import SubmittedPage from "./pages/SubmittedPage/SubmittedPage.tsx";
import AppliedHistory from "./pages/AppliedHistoryPage/AppliedHistory.tsx";
import Home from "./pages/Home/Home.tsx";
import ConfirmCancelPage from "./pages/ConfirmCancelPage/ConfirmCancelPage.tsx";

function App() {
  const { isReady, isLoggedIn, profile, error } = useLiff();

  if (error) return <div>LIFF init error: {JSON.stringify(error)}</div>;

  if (!isReady)
    return (
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <CircularProgress />
        <Typography color="text.secondary">กำลังโหลด...</Typography>
      </Box>
    );

  return (
    <Router>
      <Box>
        {isLoggedIn && profile ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobList" element={<JobList />} />
            <Route
              path="/jobs/:id/reviewRegister"
              element={<ReviewRegisteration />}
            />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/jobs/:id/submitted" element={<SubmittedPage />} />
            <Route path="/history" element={<AppliedHistory />} />
            <Route
              path="/history/detail/:id/canceled"
              element={<ConfirmCancelPage />}
            />
          </Routes>
        ) : (
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mt: 8,
              fontSize: "1.25rem",
              letterSpacing: "0.5px",
            }}
          >
            กรุณาเข้าสู่ระบบผ่าน LINE ก่อนใช้งาน
          </Typography>
        )}
      </Box>
    </Router>
  );
}

export default App;
