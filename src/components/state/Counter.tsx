import { useReducer } from "react";

type CounterState = {
    count: number;
}

type UpdateAction = {
    type: 'increment' | 'decrement';
}

type ResetAction = {
    type: 'reset';
}

type CounterAction = UpdateAction | ResetAction;

export const Counter = () => {

    const initialCount = {count: 0};

    const reducer = (state: CounterState, action: CounterAction) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            case 'reset':
                return initialCount;
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialCount);

    return (
        <div>
            <h1 style={{color: "blue"}}>UserReducer</h1>
            <h2>Counter: {state.count}</h2>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement (-)</button>
            <button onClick={() => dispatch({type: 'increment'})}>Increment (+)</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}
