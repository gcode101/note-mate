import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions';

class UpdateNoteForm extends Component {
	state = {
		title: '',
		text: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { title, author } = this.state;
		const id = this.props.id;
		this.props.updateNote(id, {title, author});
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
					<button type="submit">Update</button>
				</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		updatingNote: state.notesReducer.updatingNote,
		error: state.notesReducer.error
	}
}

export default connect(mapStateToProps, { updateNote })(UpdateNoteForm);
