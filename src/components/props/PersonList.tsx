type PersonListProps = {
    names: {
        first: string;
        last: string;
    }[]
}
export const PersonList = (props: PersonListProps) => {

    const {names} = props;

    return (
        <div>
            <h2>Person List</h2>
            {
                names.map(name => {
                    return (
                        <div key={name.first}>
                            <p>First Name: {name.first}</p>
                            <p>Last Name: {name.last}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
