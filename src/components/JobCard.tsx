import { Card, CardContent, Typography, Stack } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { th } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import type { Job } from "../types/jobStatus";
import JobStatusChip from "../components/shared/JobStatusChip";

const JobCard = ({ job }: { job: Job }) => {
  const navigate = useNavigate();

  const timeAgo = formatDistanceToNow(new Date(job.postedAt), {
    addSuffix: true,
    locale: th,
  });

  return (
    <Card
      sx={{
        marginBottom: 3,
        border: 1,
        borderRadius: 3,
        borderColor: "#e0e0e0",
        boxShadow: "none",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/jobs/${job.id}`)}
    >
      <CardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          marginBottom={2}
          noWrap
        >
          {job.title}
        </Typography>
        <Typography variant="body2" marginBottom={2}>
          {job.description} {job.time}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center">
            <Typography
              variant="body2"
              color="#00794E"
              marginRight={2}
              fontSize={12}
            >
              {job.tags}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={12}>
              {timeAgo}
            </Typography>
          </Stack>

          <JobStatusChip status={job.status} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default JobCard;
