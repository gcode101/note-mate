import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		userName: '',
		password: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleInput = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render () {
		return (
			<div className='signup-form-input'>
				<h1>Sign Up</h1>
				<form id='signup-form' onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="firstName"
						placeholder="First Name"
						value={this.state.firstName}
						onChange={this.handleInput}
					/>
					<input
						type="text"
						name="lastName"
						placeholder="Last Name"
						value={this.state.lastName}
						onChange={this.handleInput}
					/>
					<input
						type="text"
						name="userName"
						placeholder="username"
						value={this.state.userName}
						onChange={this.handleInput}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleInput}
					/>
					<button type="submit">Sign Up</button>
				</form>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {

// }

export default SignupForm;
