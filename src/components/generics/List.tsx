
type ListProps<T> = {
	items: T[];
	onClick: (value: T) => void;
}

export const List = <T extends { id: number} > ({ items, onClick }: ListProps<T>) => {
	return (
		<>
			<h1 style={{color: "blue"}}>Generics</h1>
			<ul>
				{items.map((item) => (
					<div key={item.id} onClick={() => onClick(item)}>
						<div>
							{Object.entries(item).map(([key, value]) => (
								<div key={key}>
									<strong>{key.toUpperCase()}: </strong> {value}
								</div>
							))}
						</div>
					</div>
				))}
			</ul>
		</>
	)
}
