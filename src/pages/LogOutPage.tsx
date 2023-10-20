import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export function LogOutPage() {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
}
