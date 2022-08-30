import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "../hooks/react-auth0-spa";

const AuthRequired = ({ children, path, ...rest }) => {
	const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

	useEffect(() => {
		if (loading || isAuthenticated) {
			return;
		}
		const fn = async () => {
			await loginWithRedirect({
				appState: { targetUrl: path },
			});
		};
		fn();
	}, [loading, isAuthenticated, loginWithRedirect, path]);

	return isAuthenticated ? children : <Navigate to="/" />;
};

export default AuthRequired;
