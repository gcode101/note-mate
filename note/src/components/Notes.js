import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions';
import UpdateForm from './UpdateForm';
import AddForm from './AddForm';

class Notes extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	showUpdateForm = (id) => {
		const updateForm = document.getElementById(`update-box${id}`);
		updateForm.style.display = 'block';
	}

	hideUpdateForm = (id) => {
		const updateForm = document.getElementById(`update-box${id}`);
		updateForm.style.display = 'none';
	}

	render() {
		console.log('****this.props ->', this.props);
		const { notes, fetchingNotes, deleteNote } = this.props;
		return (
			<div className='notes'>
				<div className='notes__add-form'>
					<h1>Create new note</h1>
					<AddForm />
				</div>
				{fetchingNotes ? (<h2>Loading...</h2>) :
					(<ul className='notes-grid'>
						{notes.map((note) => {
							return (
								<div className='note' key={note.id}>
									<li>
										<div>{note.title}</div>
										<div>{note.text}</div>
									</li>
									<div id={`update-box${note.id}`} className='notes_update-form'>
										<UpdateForm id={note.id}/>
									</div>
									<button onClick={() => deleteNote(note.id)}>Delete</button>
									<button onClick={() => this.showUpdateForm(note.id)}>Update this note</button>
									<button onClick={() => this.hideUpdateForm(note.id)}>Done</button>
								</div>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.notesReducer.notes,
		fetchingNotes: state.notesReducer.fetchingNotes,
		error: state.notesReducer.error
	}
}

export default connect(mapStateToProps, { getNotes, deleteNote })(Notes);
