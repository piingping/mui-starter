import { Box, Card, CardContent, Typography, Chip } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { th } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { statusStyleMap } from "../constants/statusStyleMap";
import type { Job } from "../types/jobStatus";

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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
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
          </Box>

          <Chip
            label={job.status}
            size="small"
            variant="outlined"
            sx={{
              backgroundColor: statusStyleMap[job.status].bg,
              borderColor: statusStyleMap[job.status].border,
              color: statusStyleMap[job.status].text,
              fontSize: 12,
              fontWeight: 500,
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 10,
              px: 1,
              py: 0.5,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
