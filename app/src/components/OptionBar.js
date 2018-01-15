import React, { Component } from 'react';

class OptionBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			submittedOptionValue: "",
			error: undefined
		};

		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleChangeOption = this.handleChangeOption.bind(this);
	}

	handleChangeOption(event) {
		this.setState({
			submittedOptionValue: event.target.value
		});
	}

	handleAddOption(event) {
		event.preventDefault();
		const option = this.state.submittedOptionValue.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));

		if(!error) {
			this.setState({submittedOptionValue: ""});
		}
	}

	render() {
		return(
			<div>
			{this.state.error && <p className="add-option-error">{this.state.error}</p>}
				<form className= "add-option" onSubmit={this.handleAddOption}>
					<input className="add-option__input" type="text" name="option" value={this.state.submittedOptionValue} onChange={this.handleChangeOption}/>
					<button className="button">Add Option</button>
				</form>
			</div>
		);
	}

}

export default OptionBar;