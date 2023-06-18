import { Greet } from "../props/Greet";
import React from "react";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {

	const { name, messageCount, isLoggedIn } = props;
	return (
		<>
			<h1 style={{color: "blue"}}>Component Props Types</h1>
			<Greet name={name} messageCount={messageCount} isLoggedIn={isLoggedIn}/>
		</>
	)
}
