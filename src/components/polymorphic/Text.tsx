import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

type TextOwnProps<E extends React.ElementType> = {
	as?: E;
	color?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
	isHeading?: boolean;
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'div'>({
	size,
	color,
	children,
	as,
	isHeading = true
}: TextProps<E>) => {

	const theme = useContext(ThemeContext);

	const Component = as || 'div';

	return (
		<>
		{ isHeading ? <h1 style={{color: "blue"}}>Polymorphic Component</h1> : null }
			<Component className={`class-${size} class-${color}`}>
				{children}
			</Component>
		</>
	)
}
