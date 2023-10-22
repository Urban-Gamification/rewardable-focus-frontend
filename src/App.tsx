import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { NewTaskPage, TasksPage } from './pages';
import { Typography } from '@mui/material';

import { WelcomePage, LogOutPage, StatsPage } from './pages';
import { config } from './config';
import { AuthProvider } from './components';

import { AchievementsPage } from './pages/AchievementsPage';

const router = createBrowserRouter([
  {
    path: config.routes.home,
    element: (
      <AuthProvider>
        <TasksPage />
      </AuthProvider>
    )
  },
  {
    path: config.routes.login,
    element: <WelcomePage />
  },
  {
    path: config.routes.logout,
    element: (
      <AuthProvider>
        <LogOutPage />
      </AuthProvider>
    )
  }, // Add a comma here
  {
    path: '/tasks',
    element: <TasksPage />
  },
  {
    path: '/new-task',
    element: <NewTaskPage />
  },
  {
    path: '/global',
    element: <Typography variant="h4">Coming soon</Typography>
  },
  {
    path: '/statistics',

    element: <StatsPage />
  },
  {
    path: '/achievements',
    element: <AchievementsPage />
  }
]);

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light'
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: prefersDarkMode ? 'black' : 'white',
                color: prefersDarkMode ? 'white' : 'black'
              }
            }
          }
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* <OrbisProvider defaltOrbis={orbis}> */}
        {/* </OrbisProvider> */}
      </Provider>
    </ThemeProvider>
  );
}

export default App;
