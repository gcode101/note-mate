import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
	state = {
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
			<div className='login-form-input'>
				<h1>Log In</h1>
				<form id='login-form' onSubmit={this.handleSubmit}>
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
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {

// }

export default LoginForm;
