import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { config } from './config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    // domain={process.env.REACT_APP_DOMAIN_ID || '___'}
    // clientId={process.env.REACT_APP_CLIENT_ID || '___'}
    domain={config.env.REACT_APP_DOMAIN_ID}
    clientId={config.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
