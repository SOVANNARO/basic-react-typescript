import { AuthUser } from "../../model/user";
import React, { createContext, useState } from "react";

type UserContextType = {
    user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

type UserContextProviderProp = {
    children: React.ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProp) => {

    const [user, setUser] = useState<AuthUser | null>(null);

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
