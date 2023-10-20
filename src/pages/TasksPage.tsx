import { AppBar, Avatar, Fab, Grid, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { BottomNav, TaskCard } from '../components';

export function TasksPage() {
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
      <Grid p={2} container spacing={4} direction="column">
        <Grid item>
          <Typography variant="h4">Action required</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Main tasks</Typography>
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
            <Grid item>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TaskCard
                    isCompleted
                    title="Sleep 7 hours / daily"
                    summaryText="5 ⚡ 5 🌱 Reward in: 9 days"
                  />
                </Grid>
              </Grid>
            </Grid>
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
