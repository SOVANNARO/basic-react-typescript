import { useState } from "react";

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <h1 style={{color: "blue"}}>userState</h1>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            <div>
                {isLoggedIn ? <h1>Hello User</h1> : <h1>Hello Guest</h1>}
            </div>
        </div>
    )
}
