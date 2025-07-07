import { Chip } from "@mui/material";
import type { JobStatus } from "../../types/jobStatus";
import type { ApplicationStatus } from "../../types/applicationStatus";
import { statusStyleMap } from "../../constants/statusStyleMap";

type Props = {
  status: JobStatus | ApplicationStatus;
};

const JobStatusChip = ({ status }: Props) => {
  const style = statusStyleMap[status];

  if (!style) {
    return <Chip label={status} size="small" variant="outlined" />;
  }

  return (
    <Chip
      label={status}
      size="small"
      variant="outlined"
      sx={{
        backgroundColor: style.bg,
        borderColor: style.border,
        color: style.text,
        fontSize: 12,
        fontWeight: 500,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        px: 1,
        py: 0.5,
      }}
    />
  );
};

export default JobStatusChip;
