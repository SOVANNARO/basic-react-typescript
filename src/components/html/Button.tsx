import React from "react";

type ButtonProps = {
	variant: 'primary' | 'secondary';
	children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

export const ButtonCustom = ({ variant, children, ...rest}: ButtonProps) => {
	return (
		<>
			<h1 style={{color: 'blue'}}>Wrapping HTML Element</h1>
			<button className={`class-with-${variant}`} {...rest}>
				{children}
			</button>
		</>
	)
}
