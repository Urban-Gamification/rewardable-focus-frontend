import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography
} from '@mui/material';

export function LinearProgressWithLabel(props: LinearProgressProps) {
  return (
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <Box sx={{ width: '200%', mr: 1 }}>
        <LinearProgress
          style={{ height: '10px', width: '100%', borderRadius: '10px' }}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value || 0
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
