import { Button, Typography, Box, Stack } from "@mui/material";
import BackButton from "../../components/shared/BackButton";
import { mockJobs } from "../../mock/JobList.mock";
import TuneIcon from "@mui/icons-material/Tune";
import JobFilterDrawer from "../../components/JobFilterDrawer";
import { useState } from "react";
import JobCard from "../../components/JobCard";

const JobList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{
    salary?: string;
    tag?: string;
    status?: string;
  }>({});

  const filteredJobs = mockJobs.filter((job) => {
    const salaryOk =
      !filters.salary ||
      (filters.salary === "1 - 500 บาท" && job.salary <= 500) ||
      (filters.salary === "501 - 2,000 บาท" &&
        job.salary > 500 &&
        job.salary <= 2000) ||
      (filters.salary === "2,001 - 5,000 บาท" &&
        job.salary > 2000 &&
        job.salary <= 5000) ||
      (filters.salary === "5,001 - 10,000 บาท" &&
        job.salary > 5000 &&
        job.salary <= 10000) ||
      (filters.salary === "10,001 - 20,000 บาท" &&
        job.salary > 10000 &&
        job.salary <= 20000) ||
      (filters.salary === "20,000 บาทขั้นไป" && job.salary > 20000);
    const tagOk = !filters.tag || job.tags.includes(filters.tag);
    const statusOk = !filters.status || job.status === filters.status;

    return salaryOk && tagOk && statusOk;
  });

  return (
    <>
      <Box sx={{padding: "1rem"}}>
        <Box >
          <BackButton />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ my: 2, mx: 1 }}
        >
          <Typography variant="h5" fontWeight="bold">
            ประกาศงาน
          </Typography>
          <Button
            variant="outlined"
            sx={{ borderRadius: 10 }}
            startIcon={<TuneIcon />}
            onClick={() => setIsFilterOpen(true)}
          >
            ตัวกรอง
          </Button>
        </Stack>

        <JobFilterDrawer
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          selectedFilters={filters}
          onFilterChange={setFilters}
        />

        <Box>
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default JobList;
