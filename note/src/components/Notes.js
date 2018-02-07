import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions';
import UpdateForm from './UpdateForm';
import AddForm from './AddForm';

class Notes extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	showUpdateBox = (elem, id) => {
		const element = document.getElementById(elem);
		element.style.display = 'block';
		document.getElementById(`update-button${id}`).style.display = 'none';
		document.getElementById(`done-button${id}`).style.display = 'block';
		document.getElementById(`delete-button${id}`).style.display = 'block';
	}

	hideUpdateBox = (elem, id) => {
		const element = document.getElementById(elem);
		element.style.display = 'none';
		document.getElementById(`update-button${id}`).style.display = 'block';
		document.getElementById(`done-button${id}`).style.display = 'none';
		document.getElementById(`delete-button${id}`).style.display = 'none';
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
									<button
										id={`delete-button${note.id}`}
										className='delete-button'
										onClick={() => deleteNote(note.id)}>
										Delete
									</button>
									<button
										id={`update-button${note.id}`}
										onClick={() => this.showUpdateBox(`update-box${note.id}`, note.id)}>
										Update note
									</button>
									<button
										id={`done-button${note.id}`}
										className='done-button'
										onClick={() => this.hideUpdateBox(`update-box${note.id}`, note.id)}>
										Done
									</button>
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
