import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./hooks/react-auth0-spa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import AuthRequired from "./components/AuthRequired";

const App = () => {
	const { loading } = useAuth0();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<header>
					<NavBar />
				</header>
				<Routes>
					<Route path="/" exact />
					<Route
						path="/profile"
						element={
							<AuthRequired>
								<Profile />
							</AuthRequired>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
