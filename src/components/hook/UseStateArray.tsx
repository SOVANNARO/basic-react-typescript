import { useState } from "react";

type myObject = {
	id: number;
	name: string;
}

export const UseStateArray = () => {

	const [people, setPeople] = useState<myObject[]>([]);

	const handleAddPerson = () => {
		setPeople([...people, {
			id: people.length + 1,
			name: `Person ${people.length + 1}`
		}]);
	}

	const handleRemovePerson = (id: number) => {
		setPeople(people.filter(person => person.id !== id));
	}

	return (
		<>
			<h1 style={{color: "blue"}}>useState with an Array</h1>
			<button onClick={handleAddPerson}>Add Person</button>
			<ul>
				{people.map(person => (
					<li key={person.id}>
						{person.name}
						<button onClick={() => handleRemovePerson(person.id)}>Remove</button>
					</li>
				))}
			</ul>
		</>
	)
}
