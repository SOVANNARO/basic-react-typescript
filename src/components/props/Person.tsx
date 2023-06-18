type PersonProps = {
    name: {
        first: string;
        last: string;
    }
}
export const Person = (props: PersonProps) => {

    const {name } = props;

    return <div>
        <h2>Person</h2>
        <p>First Name: {name.first}</p>
        <p>Last Name: {name.last}</p>
    </div>
}
