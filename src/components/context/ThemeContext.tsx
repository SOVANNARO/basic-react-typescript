import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProp = {
	children: React.ReactNode;
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: ThemeContextProviderProp) => {
	return (
		<>
			<ThemeContext.Provider value={theme}>
				{children}
			</ThemeContext.Provider>
		</>
	)
}
