import { Component } from "react";

type CounterProps = {
	message: string;
}

type CounterState = {
	count: number;
}

export class CounterClass extends Component<CounterProps, CounterState> {

	state = {
		count: 0,
	}

	handleIncrement = () => {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<>
				<h1 style={{color: "blue"}}>Class Component</h1>
				<h2>{this.props.message} {this.state.count}</h2>
				<button onClick={this.handleIncrement}>Increment (+)</button>
			</>
		)
	}
}
