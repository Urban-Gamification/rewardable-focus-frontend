import { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  Grid,
  IconButton,
  IconButtonProps,
  MenuItem,
  Paper,
  Select,
  Typography,
  styled
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgressWithLabel, LinearProgressWithLabel } from './core';

export interface ChatsCardProps {
  title: string;
  summaryText: string;
  progress: number;
  stepValues: string[];
  onStepSubmit?: (value: string) => void;
  isCompleted?: boolean;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

const ExpandMore = styled((props: IconButtonProps & { expand: boolean }) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export function TaskCard({
  title,
  summaryText,
  isCompleted,
  progress,
  stepValues = [],
  onStepSubmit,
  isFavorite,
  onFavoriteClick
}: ChatsCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card variant="outlined" sx={{ opacity: isCompleted ? 0.7 : 1 }}>
      <CardContent onClick={handleExpandClick}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography variant="h6">{title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="primary">
                  {summaryText}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <CircularProgressWithLabel value={progress} />
          </Grid>
        </Grid>
      </CardContent>
      {!isCompleted && (
        <>
          <Divider />
          <CardActions disableSpacing>
            <IconButton
              aria-label="Favorite"
              color={isFavorite ? 'warning' : 'default'}
              onClick={onFavoriteClick}
            >
              {isFavorite ? <StarIcon /> : <StarOutlineIcon />}
            </IconButton>
            <LinearProgressWithLabel value={22} />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider />
            <CardContent>
              <Paper
                component="form"
                variant="outlined"
                sx={{
                  p: '0 4px 0 0',
                  display: 'flex',
                  minHeight: 60,
                  alignItems: 'center'
                }}
              >
                <Select
                  sx={{ flex: 1, m: 0 }}
                  placeholder="Write today's value"
                  inputProps={{
                    'aria-label': `submit today's value`,
                    name: 'stepValue'
                  }}
                >
                  {stepValues.map((stepValue) => (
                    <MenuItem value={stepValue}>{stepValue}</MenuItem>
                  ))}
                </Select>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  color="primary"
                  sx={{ p: '10px' }}
                  aria-label="directions"
                  onClick={() => onStepSubmit?.('6k')}
                >
                  <SendIcon />
                </IconButton>
              </Paper>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
}
