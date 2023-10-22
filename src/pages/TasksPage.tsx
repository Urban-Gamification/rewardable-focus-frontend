import { AppBar, Avatar, Fab, Grid, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { BottomNav, TaskCard } from '../components';
import { config } from '../config';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { set } from 'react-hook-form';

export interface Goal {
  name: string;
  userId: string;
  frequency: {
    type:
      | 'hourly'
      | 'every_2_hours'
      | 'every_4_hours'
      | 'daily'
      | 'every_2_days'
      | 'weekly'
      | 'monthly';
  };
  isFavourite: boolean;
  rewardDate: Date;
  stepGoal: string;
  progress: number;
  rewardEnergy: number;
  rewardGrowth: number;
  stepValues: string[];
  isActive: boolean;
}

const countDaysFromTodayTillRewardDay = (rewardDate: Date) => {
  const today = new Date();
  const rewardDay = new Date(rewardDate);
  const diffTime = Math.abs(rewardDay.getTime() - today.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export function TasksPage() {
  const { user, isAuthenticated } = useAuth0();
  const [goals, setGoals] = React.useState<Goal[]>([]);

  React.useEffect(() => {
    if (isAuthenticated && user) {
      const fetchGoals = async () => {
        // const response = await fetch(`${config.apiUrl}/goals/${user.email}`);
        const response = await fetch(
          `${config.apiUrl}/goals/pavelfantastico@gmail.com`
        );
        const goals = await response.json();
        console.log(JSON.stringify(goals));

        setGoals(goals);
        console.log(goals);
      };
      fetchGoals();
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tasks
          </Typography>
          <Avatar />
        </Toolbar>
      </AppBar>
      <Grid p={2} pb={12} container spacing={4} direction="column">
        <Grid item>
          <Typography variant="h4">Action required</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Main tasks</Typography>
            </Grid>
            {goals
              .filter((goal) => goal.isActive)
              .map((goal) => (
                <Grid item>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TaskCard
                        title={goal.name}
                        summaryText={`${goal.rewardEnergy} ⚡ ${
                          goal.rewardGrowth
                        } 🌱 Reward in: ${countDaysFromTodayTillRewardDay(
                          goal.rewardDate
                        )} days`}
                        progress={32}
                        stepValues={goal.stepValues.split(',')}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Other tasks</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TaskCard
                    title="Sleep 7 hours / daily"
                    summaryText="5 ⚡ 5 🌱 Reward in: 9 days"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4">Completed</Typography>
            </Grid>
            {goals
              .filter((goal) => !goal.isActive)
              .map((goal) => (
                <Grid item>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TaskCard
                        title={goal.name}
                        summaryText={`${goal.rewardEnergy} ⚡ ${
                          goal.rewardGrowth
                        } 🌱 Reward in: ${countDaysFromTodayTillRewardDay(
                          goal.rewardDate
                        )} days`}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <BottomNav />
      <Link to="/new-task">
        <Fab
          color="primary"
          aria-label="add"
          style={{ position: 'fixed', bottom: 70, right: 16 }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}
