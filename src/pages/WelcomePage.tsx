import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Box, Button, Typography } from '@mui/material';

export function WelcomePage() {
  const { loginWithRedirect, logout, loginWithPopup, user } = useAuth0();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              onClick={() => loginWithRedirect()}
              // onClick={() => loginWithPopup()}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Button
              onClick={() => loginWithRedirect()}
              // onClick={() => loginWithPopup()}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
