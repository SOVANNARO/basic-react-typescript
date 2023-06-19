import { ChannelContext, UserContext } from "./ComponetMain";


export const ComponentC = () => {

	return (
		<>
			<UserContext.Consumer>
				{
					user => {
						return (
							<ChannelContext.Consumer>
								{
									channel => {
										return (
											<div>
												User context value
												<span style={{color: 'red'}}>
												 {user}
												</span>,
												channel context value
												<span style={{color: 'red'}}>
													{channel}
												</span>
											</div>
										)
									}
								}
							</ChannelContext.Consumer>
						)
					}
				}
			</UserContext.Consumer>
		</>
	)
}
