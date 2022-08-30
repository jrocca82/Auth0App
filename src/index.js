import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "./hooks/react-auth0-spa";
import { authConfig } from "./config/auth.config";

const onRedirectCallback = (appState) => {
	window.history.replaceState(
		{},
		document.title,
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain={authConfig.domain}
			client_id={authConfig.clientId}
			redirect_uri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);
