import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions';
import UpdateForm from './UpdateForm';

class Notes extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		console.log('****this.props ->', this.props);
		const { notes, fetchingNotes, deleteNote } = this.props;
		console.log('****notes.length ->', notes.length);
		return (
			<div className='Notes'>
				{fetchingNotes ? (<h2>Loading...</h2>) :
					(<ul>
						{notes.map((note) => {
							return (
								<div key={note.id}>
									<li>
										<div>{note.title}</div>
									</li>
									<button onClick={() => deleteNote(note.id)}>Delete</button>
									<div>
										<UpdateForm id={note.id}/>
									</div>
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
