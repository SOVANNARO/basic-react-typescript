import React, { useEffect } from 'react'

type Todo = {
	id: number;
	title: string;
	completed: boolean;
}

export const FetchById = () => {

	const [id, setId] = React.useState<string>('');
	const [post, setPost] = React.useState<Todo | null>(null);

	useEffect(() => {
		if (id) {
			fetchByDynamicId(id);
		}
	}, [id]);

	const fetchByDynamicId = async (id: string) => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
		const result = await response.json();
		setPost(result);
	}

	const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setId(event.target.value);
	}

	const handleClickButton = () => {
		if (id === '') {
			return;
		}
		fetchByDynamicId(id);
	}

	const handleResetClick = () => {
		setId('');
		setPost(null);
	}

	return (
		<>
			<h1 style={{color: "blue"}}>Fetch by ID</h1>
			<pre>{JSON.stringify(post, null, 2)}</pre>
			<input type="text" value={id} onChange={handleIdChange} />
			<button onClick={handleClickButton}>Fetch</button>
			<button onClick={handleResetClick}>Reset</button>
		</>
	)
}
