import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';

class AddNoteForm extends Component {
	state = {
		title: '',
		text: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { title, author } = this.state;
		this.props.createNote({title, author});
	};

	handleInput = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render () {
		return (
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="title"
						placeholder="title"
						value={this.state.title}
						onChange={this.handleInput}
					/>
					<input
						type="text"
						name="text"
						placeholder="text"
						value={this.state.author}
						onChange={this.handleInput}
					/>
					<button type="submit">Create Note</button>
				</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addingNote: state.notesReducer.addingNote,
		error: state.notesReducer.error
	}
}

export default connect(mapStateToProps, { createNote })(AddNoteForm);
