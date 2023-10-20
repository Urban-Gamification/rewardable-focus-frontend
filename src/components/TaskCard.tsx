import { useState, MouseEvent } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  Grid,
  IconButton,
  IconButtonProps,
  InputBase,
  Paper,
  Typography,
  styled
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import { CircularProgressWithLabel } from './core';

export interface ChatsCardProps {
  title: string;
  summaryText: string;
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
            <CircularProgressWithLabel value={67} />
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
                  p: '2px 4px',
                  display: 'flex',
                  minHeight: 60,
                  alignItems: 'center'
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Write today's value"
                  inputProps={{
                    'aria-label': `submit today's value`
                  }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  color="primary"
                  sx={{ p: '10px' }}
                  aria-label="directions"
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
