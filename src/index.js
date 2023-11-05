import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-qn6ibcjx8w16agzv.us.auth0.com"
    clientId="wTtb4RCTWN25WkyX5Iv8ulLyQkXNZ1n0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <App />
  </Auth0Provider>,
  document.getElementById("root")
);
