import { useEffect, useState } from "react";
import { Stack, Typography, Button, Drawer } from "@mui/material";
import BackButton from "../../components/shared/BackButton";
import JobCard from "../../components/JobCard";
import { mockJobs } from "../../mock/JobList.mock";
import type { Job } from "../../types/jobStatus";
import { ApplicationStatus } from "../../types/applicationStatus";
import AppliedJobDetail from "../../components/AppliedJobDetail";

interface AppliedJob extends Job {
  applicationStatus: ApplicationStatus;
}

const AppliedHistory = () => {
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("jobApplications");
    if (!stored) return;

    const appliedList = JSON.parse(stored) as {
      jobId: string;
      applicationStatus: ApplicationStatus;
    }[];

    const matchedJobs: AppliedJob[] = mockJobs
      .map((job) => {
        const found = appliedList.find((a) => a.jobId === job.id.toString());
        if (!found) return null;

        return {
          ...job,
          applicationStatus: found.applicationStatus,
        };
      })
      .filter((job): job is AppliedJob => job !== null);

    setAppliedJobs(matchedJobs);
  }, []);

  const statuses: (ApplicationStatus | "ทั้งหมด")[] = [
    "ทั้งหมด",
    "ผ่าน",
    "รอการยืนยัน",
    "ไม่ผ่าน",
  ];
  const [selectedStatus, setSelectedStatus] = useState<
    ApplicationStatus | "ทั้งหมด"
  >("ทั้งหมด");
  const filteredJobs =
    selectedStatus === "ทั้งหมด"
      ? appliedJobs
      : appliedJobs.filter((job) => job.applicationStatus === selectedStatus);

  return (
    <>
      <Stack padding="1rem" gap="1rem">
        <BackButton />

        <Typography fontWeight={600} fontSize="1.5rem">
          ประวัติการสมัครงาน
        </Typography>

        <Stack direction="row" spacing={1}>
          {statuses.map((status) => (
            <Button
              key={status}
              onClick={() => setSelectedStatus(status)}
              variant={selectedStatus === status ? "contained" : "outlined"}
              sx={{
                borderRadius: "16px",
                backgroundColor: selectedStatus === status ? "#FFAD4D" : "#fff",
                color: "#000",
                borderColor: "#ccc",
              }}
            >
              {status}
            </Button>
          ))}
        </Stack>

        {filteredJobs.length === 0 ? (
          <Typography color="text.secondary">ไม่พบงาน</Typography>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              applicationStatus={job.applicationStatus}
              onClick={() => setSelectedJobId(job.id)}
            />
          ))
        )}
      </Stack>

      <Drawer
        anchor="right"
        open={selectedJobId !== null}
        onClose={() => setSelectedJobId(null)}
      >
        {selectedJobId !== null && <AppliedJobDetail jobId={selectedJobId} />}
      </Drawer>
    </>
  );
};

export default AppliedHistory;
