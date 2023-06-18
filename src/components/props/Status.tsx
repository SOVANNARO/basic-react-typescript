type StatusProps = {
    status: 'loading' | 'success' | 'error';
}

export const Status = (props: StatusProps) => {

    let message;
    switch (props.status) {
        case 'loading':
            message = 'Loading...';
            break;
        case 'success':
            message = 'Success!';
            break;
        case 'error':
            message = 'Error!';
            break;
        default:
            message = 'Loading...';
    }

    return (
        <div className="status">
            <h2>Status - {message}</h2>
        </div>
    )
}
