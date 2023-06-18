import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: "naro",
            email: "naro@gmail.com"
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            {user ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            <div>
                {user ? <h1>Hello {user.name} - {user.email} </h1> : <h1>Hello Guest</h1>}
            </div>
        </div>
    )
}
