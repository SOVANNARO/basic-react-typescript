import { useContext } from "react";
import { ChannelContext, UserContext } from "./ComponetMain";

export const ComponentE = () => {

	const user = useContext(UserContext);
	const channel = useContext(ChannelContext);

	return (
		<>
			{user} - {channel}
		</>
	)
}
