import { useEffect, useState } from "react";

export const ConditionRunEffects = () => {

	const [shouldRunEffect, setShouldRunEffect] = useState(false);
	const [data, setData] = useState('');

	useEffect(() => {
		if (shouldRunEffect) {
			// Perform the effect here
			fetchData();
		}

		// Clean up the effect
		return () => {
			setShouldRunEffect(false);
		}
	}, [shouldRunEffect]);

	const handleClick = () => {
		setShouldRunEffect(true);
	}

	const fetchData = async () => {
		// Simulate an API call
		const response = await fetch('https://dummyjson.com/users/1');
		const result = await response.json();
		setData(result);
	};

	const handleResetClick = () => {
		setShouldRunEffect(false);
		setData('');
	}

	return (
		<>
			<h1 style={{color: "blue"}}> Conditionally Run Effect </h1>
			<button onClick={handleClick}>Fetch Data</button>
			<button onClick={handleResetClick}>Reset</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}
