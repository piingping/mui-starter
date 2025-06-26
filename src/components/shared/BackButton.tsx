import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Typography, Box } from '@mui/material';

function BackButton() {
  return (
    <Box
      onClick={() => window.history.back()}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
    
        
      }}
    >
      <ArrowBackIosRoundedIcon sx={{ fontSize: '14px', mr: 0.5, mt: '2px' }} />
      <Typography variant="body2" sx={{  fontSize: '14px', color:"inherit",}}>
        กลับ
      </Typography>
    </Box>
  );
}

export default BackButton;
