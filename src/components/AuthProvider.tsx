import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { config } from '../config';

export function AuthProvider({ children }: { children: React.ReactElement }) {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  // If User authenticated, then store user in localStorage and invoke backent create user endpoint


  React.useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem('user', JSON.stringify(user));
      fetch(`${config.apiUrl}/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
      }).then((res) => {
        console.log(res);
      });
    }
  }, [isAuthenticated, user]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={config.routes.login} />;
  }

  return children;
}
