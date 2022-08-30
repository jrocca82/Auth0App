import React from "react";
import { useAuth0 } from "../hooks/react-auth0-spa";

const Profile = () => {
	const { loading, user } = useAuth0();

	if (loading || !user) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<img src={user.picture} alt={user.name} />
			<h1 color="red">Profile</h1>
			<h2>{user.name}</h2>
			<p>{user.email}</p>
			<code>{JSON.stringify(user, null, 2)}</code>
		</>
	);
};

export default Profile;
