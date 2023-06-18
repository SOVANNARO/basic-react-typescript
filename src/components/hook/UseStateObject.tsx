import React, { useState } from "react";

type myObject = {
	name: string;
	age: number;
}

export const UseStateObject = () => {

	const [person, setPerson] = useState<myObject>({
		name: "",
		age: 0
	});

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPerson({
			...person,
			name: event.target.value
		});
	}

	const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPerson({
			...person,
			age: Number(event.target.value)
		});
	}

	return (
		<>
			<h1 style={{color: "blue"}}>useState with an Object</h1>
			<input type="text" value={person.name} onChange={handleNameChange} />
			<input type="text" value={person.age} onChange={handleAgeChange} />
		</>
	)
}
