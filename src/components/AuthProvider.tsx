import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { config } from '../config';

export function AuthProvider({ children }: { children: React.ReactElement }) {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

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
