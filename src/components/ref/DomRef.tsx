import { useEffect, useRef } from "react";

export const DomRef = () => {

	const inputRef = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<>
			<h1 style={{color: "blue"}}>useRef</h1>
			<input type='text' ref={inputRef}/>
		</>
	)
}
