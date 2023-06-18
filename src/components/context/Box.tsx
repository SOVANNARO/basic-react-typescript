import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {

	const theme = useContext(ThemeContext);

	return (
		<div>
			<h1 style={{color: theme.primary.main}}>UseContext</h1>
			<div style={{background: theme.secondary.main, color: theme.secondary.text}}>
				theme context
			</div>
		</div>
	)
}
