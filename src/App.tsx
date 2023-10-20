import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { TasksPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TasksPage />
  },
  {
    path: '/new-task',
    element: <div>new task Component</div>
  },
  {
    path: '/global',
    element: <div>Global Component</div>
  },
  {
    path: '/statistics',
    element: <div>Statistics Component</div>
  },
  {
    path: '/achievements',
    element: <div>Achievements Component</div>
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
      </Provider>
    </ThemeProvider>
  );
}

export default App;
