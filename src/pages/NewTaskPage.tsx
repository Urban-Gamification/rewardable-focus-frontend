import {
  AppBar,
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { RadioChips } from '../components';

export function NewTasksPage() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Box mr={1}>
            <Link to="/">
              <IconButton aria-label="Go back to tasks">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add new task
          </Typography>
          <Avatar></Avatar>
        </Toolbar>
      </AppBar>
      <Box p={2} pb={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography variant="h6">
                  What do you want to achieve?
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="#a"
                  label="What are you fosucing on?"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography variant="h6">Steps track setup:</Typography>
                <Typography variant="body2">
                  Select how you will track steps:
                </Typography>
              </Grid>
              <Grid item>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="checkbox"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="checkbox"
                      control={<Radio />}
                      label="Checkbox"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  How long will be your Focus Challenge?
                </Typography>
              </Grid>
              <Grid item>
                <RadioChips
                  items={[
                    '1 day',
                    '7 days',
                    '14 days',
                    '21 day',
                    '1 month',
                    '2 months',
                    '3 months',
                    '6 months'
                  ]}
                  onChange={() => {}}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  How often should be every next step?
                </Typography>
              </Grid>
              <Grid item>
                <RadioChips
                  items={[
                    'every 2 hours',
                    'every 4 hours',
                    'every day',
                    'every 2 days',
                    'every week',
                    'every month'
                  ]}
                  onChange={() => {}}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          p={2}
          sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}
        >
          <Button fullWidth variant="contained" size="large">
            Add the task
          </Button>
        </Box>
      </Box>
    </>
  );
}
