import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserLoginContext = () => {

    const userContext = useContext(UserContext);

    const handleLogin = () => {
		userContext.setUser({
			name: "naro",
			email: "naro@gmail.com",
		});
    }

    const handleLogout = () => {
        userContext.setUser(null);
    }

    return (
        <>
            <h1>User Login Context</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {userContext.user
				? <div>
					Username: {userContext.user.name}
					<br />
					Password: {userContext.user.email}
			</div>
				: <div>Not logged in</div>}
        </>
    )
}
