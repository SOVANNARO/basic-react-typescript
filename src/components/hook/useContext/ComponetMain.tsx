import React from "react";
import { ComponentC } from "./ComponentC";
import { ComponentE } from "./ComponentE";

export const UserContext = React.createContext('');
export const ChannelContext = React.createContext('');

export const ComponentMain = () => {

	return (
		<>
			<h1 style={{color: 'green'}}>useContext Easy Understand</h1>
			<UserContext.Provider value={'Naro'}>
				<ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
					<ComponentE />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</>
	)
}
