import {
	FETCHING_NOTES,
	NOTES_FETCHED,
	ERROR_FETCHING_NOTES
} from '../actions';

const initialState = {
	notes: [],
	fetchingNotes: false,
	addingNote: false,
	updatingNote: false,
	deletingNote: false,
	error: null
}

export const notesReducer = (state=initialState, action) => {
	switch(action.type) {
		case FETCHING_NOTES:
			return {
				...state, fetchingNotes: true
			};
		case NOTES_FETCHED:
			return {
				...state,
				fetchingNotes: false,
				notes: action.payload
			};
		case ERROR_FETCHING_NOTES:
			return {
				...state,
				fetchingNotes: false,
				error: action.payload
			};
		default:
			return state;
	}
}
