import { useEffect, useState } from "react";
import { Dialog, DialogContent, IconButton, Box } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ImageLightbox = ({
  images,
  open,
  initialIndex,
  onClose,
}: {
  images: string[];
  open: boolean;
  initialIndex: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          position: "relative",
          p: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
          }}
        >
          {/* รูปภาพ */}
          <Box
            component="img"
            src={images[currentIndex]}
            alt={`image-${currentIndex}`}
            sx={{
              maxHeight: "80vh",
              maxWidth: "90vw",
              objectFit: "contain",
              borderRadius: 2,
            }}
          />

          {/* ปุ่มปิด  */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 8,
              color: "#fff",
            }}
          >
            <CancelRoundedIcon />
          </IconButton>
        </Box>

        {/* ซ้าย */}
        {currentIndex > 0 && (
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 16,
              color: "#fff",
            }}
          >
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
        )}

        {/* ขวา */}
        {currentIndex < images.length - 1 && (
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              color: "#fff",
            }}
          >
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
