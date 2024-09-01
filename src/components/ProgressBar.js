import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate({pro}) {
  
  return (
    <Box sx={{ width: '91%', marginLeft:"5%" }}>
      <LinearProgress variant="determinate" value={pro} color='error'/>
    </Box>
  );
}