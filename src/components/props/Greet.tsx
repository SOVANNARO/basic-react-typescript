type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
    const {name, messageCount,isLoggedIn} = props;
    return <div>
        {
            isLoggedIn ? <div>
                <h2>Hi, {name}!</h2>
                <p>You have {messageCount} unread messages.</p>
            </div> : <div>
                <h2>Welcome, Guest!</h2>
            </div>
        }
    </div>
}
