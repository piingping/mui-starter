import { useLiff } from "./hooks/useLiff";
import { CircularProgress, Container, Typography} from "@mui/material";
import JobList from "./pages/JobList/JobList.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails/JobDetails";

function App() {
  const { isReady, isLoggedIn, profile, error } = useLiff();

  if (error) return <div>LIFF init error: {JSON.stringify(error)}</div>;
  if (!isReady) return <CircularProgress />;

  return (
    <Router>
      <Container>
        {isLoggedIn && profile ? (
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
          </Routes>
        ) : (
          <Typography variant="body1">Please login via LINE</Typography>
        )}
      </Container>
    </Router>
  );
}

export default App;
