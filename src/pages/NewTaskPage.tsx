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
import { SubmitHandler, useForm } from 'react-hook-form';
import { Goal } from './TasksPage';
import { add, format } from 'date-fns';
import { config } from '../config';

// const finishDates = [
//   { label: '1 day', value: 86400000 },
//   { label: '7 days', value: 86400000 },
//   { label: '14 days', value: 86400000 },
//   { label: '21 day', value: 86400000 },
//   { label: '1 month', value: 86400000 },
//   { label: '2 months', value: 86400000 },
//   { label: '3 months', value: 86400000 },
//   { label: '6 months', value: 86400000 }
// ];

const finishDatesMs: { [key: string]: any } = {
  '1 day': 86400,
  '7 days': 86400 * 7,
  '14 days': 86400 * 14,
  '21 day': 86400 * 21,
  '1 month': 86400 * 30,
  '2 months': 86400 * 60,
  '3 months': 86400 * 90,
  '6 months': 86400 * 180
};

interface IFormData {
  name: string;
  // stepValues: string[];
  // stepGoal:
  goalLength: string;
  // | '1 day'
  // | '7 days'
  // | '14 days'
  // | '21 day'
  // | '1 month'
  // | '2 months'
  // | '3 months'
  // | '6 months';
  frequency:
    | 'hourly'
    | 'every_2_hours'
    | 'every_4_hours'
    | 'daily'
    | 'every_2_days'
    | 'weekly'
    | 'monthly';
  // | 'hourly'
  // | 'every_2_hours'
  // | 'every_4_hours'
  // | 'daily'
  // | 'every_2_days'
  // | 'weekly'
  // | 'monthly';
}

export function NewTaskPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<IFormData>();

  const prepareData = async (data: IFormData) => {
    const template: Goal = {
      userId: 'pavelfantastico@gmail.com',
      name: data.name,
      // @ts-ignore
      frequency: data.frequency,
      // @ts-ignore
      rewardDate: format(
        add(new Date(), { seconds: finishDatesMs[data.goalLength] }),
        'yyyy-MM-dd'
      )
    };

    const postCreateTask = async () => {
      // const response = await fetch(`${config.apiUrl}/goals/${user.email}`);
      const response = await fetch(`${config.apiUrl}/goal/create`, {
        method: 'post',
        body: JSON.stringify(template)
      });
      const goals = await response.json();
      console.log(JSON.stringify(goals));
    };
    postCreateTask();
  };

  const onSubmit: SubmitHandler<IFormData> = prepareData;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('name')}
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
                  // {...register('goalLength')}
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
                  onChange={(value) => {
                    setValue('goalLength', value);
                  }}
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
                  onChange={(value) => {
                    setValue(
                      'frequency',
                      value as
                        | 'hourly'
                        | 'every_2_hours'
                        | 'every_4_hours'
                        | 'daily'
                        | 'every_2_days'
                        | 'weekly'
                        | 'monthly'
                    );
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          p={2}
          sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}
        >
          <Button fullWidth type="submit" variant="contained" size="large">
            Add the task
          </Button>
        </Box>
      </Box>
    </form>
  );
}
