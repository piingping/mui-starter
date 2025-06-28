import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { salaryRanges, jobTags, jobStatuses } from "../constants/jobFilters";

import type { JobFilterDrawerProps } from "../types/jobFilterDrawer";



const JobFilterDrawer  = ({
  open,
  onClose,
  selectedFilters,
  onFilterChange,
}: JobFilterDrawerProps) => {
  const handleSelect = (
    type: keyof JobFilterDrawerProps["selectedFilters"],
    value: string
  ) => {
    onFilterChange({
      ...selectedFilters,
      [type]: value === "ทั้งหมด" ? undefined : value,
    });
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
        },
      }}
    >
      <Box
        px={2}
        py={3}
        height="60vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Box flexGrow={1} textAlign="center">
              <Typography variant="h6" fontWeight="bold">
                ตัวกรอง
              </Typography>
            </Box>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box mb={3}>
            <Typography fontWeight="bold" mb={1}>
              ค่าตอบแทน
            </Typography>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: 1,
                pb: 1,
              }}
            >
              {salaryRanges.map((range) => (
                <Chip
                  key={range}
                  label={range}
                  onClick={() => handleSelect("salary", range)}
                  clickable
                  sx={{
                    flexShrink: 0,
                    borderRadius: 3,

                    border: 1,
                    backgroundColor:
                      selectedFilters.salary === range ||
                      (!selectedFilters.salary && range === "ทั้งหมด")
                        ? "#FFAD4D"
                        : "#FFFFFF",
                    borderColor:
                      selectedFilters.salary === range ||
                      (!selectedFilters.salary && range === "ทั้งหมด")
                        ? "#FF8A00"
                        : "#9E9E9E",
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box mb={3}>
            <Typography fontWeight="bold" mb={1}>
              ประเภทงาน
            </Typography>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: 1,
                pb: 1,
              }}
            >
              {jobTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onClick={() => handleSelect("tag", tag)}
                  clickable
                  sx={{
                    flexShrink: 0,
                    borderRadius: 3,
                    border: 1,
                    backgroundColor:
                      selectedFilters.tag === tag ||
                      (!selectedFilters.tag && tag === "ทั้งหมด")
                        ? "#FFAD4D"
                        : "#FFFFFF",
                    borderColor:
                      selectedFilters.tag === tag ||
                      (!selectedFilters.tag && tag === "ทั้งหมด")
                        ? "#FF8A00"
                        : "#9E9E9E",
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography fontWeight="bold" mb={1}>
              สถานะงาน
            </Typography>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: 1,
                pb: 1,
              }}
            >
              {jobStatuses.map((status) => (
                <Chip
                  key={status}
                  label={status}
                  onClick={() => handleSelect("status", status)}
                  clickable
                  sx={{
                    flexShrink: 0,
                    borderRadius: 3,
                    border: 1,
                    backgroundColor:
                      selectedFilters.status === status ||
                      (!selectedFilters.status && status === "ทั้งหมด")
                        ? "#FFAD4D"
                        : "#FFFFFF",
                    borderColor:
                      selectedFilters.status === status ||
                      (!selectedFilters.status && status === "ทั้งหมด")
                        ? "#FF8A00"
                        : "#9E9E9E",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            mb: 1,
            borderRadius: 3,
            fontWeight: "bold",
            backgroundColor: "#FF8A00",
          }}
          fullWidth
          onClick={onClose}
        >
          ยืนยัน
        </Button>
      </Box>
    </Drawer>
  );
};

export default JobFilterDrawer;
