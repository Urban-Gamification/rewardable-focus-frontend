import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography
} from '@mui/material';

export function LinearProgressWithLabel(props: LinearProgressProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '200px', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value || 0
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
