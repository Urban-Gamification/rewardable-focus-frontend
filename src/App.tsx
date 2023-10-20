import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import {
  AnswersPage,
  ChatPage,
  ChatsPage,
  LogInPage,
  NewFocusPage,
  SetupPage,
  SignUpPage
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatsPage />
  },
  {
    path: '/login',
    element: <LogInPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/chat',
    element: <ChatPage />
  },
  {
    path: '/answers',
    element: <AnswersPage />
  },
  {
    path: '/setup',
    element: <SetupPage />
  },
  {
    path: '/new-focus',
    element: <NewFocusPage />
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
        {/* <OrbisProvider defaultOrbis={orbis}> */}
        <CssBaseline />
        <RouterProvider router={router} />
        {/* </OrbisProvider> */}
      </Provider>
    </ThemeProvider>
  );
}

export default App;
