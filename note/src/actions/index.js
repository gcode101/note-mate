import axios from 'axios';

/*Action Types*/
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const ERROR_FETCHING_NOTES = 'ERROR_FETCHING_NOTES';

export const CREATING_NOTE = 'CREATING_NOTE';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'CREATE_NOTE_FAILURE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

/*Action Creators
   C - addNote
   R - getNotes
   U - updateNote
   D - deleteNote
*/
const url = ' http://localhost:5000';

export const getNotes = () => {
	const notes = axios.get(`${url}/api/notes`, {headers: { authorization: localStorage.getItem('authorization')}});
	return dispatch => {
		dispatch({ type: FETCHING_NOTES });
		notes
			.then(({ data }) => {
				dispatch({ type: NOTES_FETCHED, payload: data });
			})
			.catch(error => {
				dispatch({ type: ERROR_FETCHING_NOTES, payload: error });
			});
	}
}

export const createNote = (values) => {
	return (dispatch) => {
		dispatch ({ type: CREATING_NOTE });
		axios
			.post(`${url}`, values)
			.then(({ data }) => {
				dispatch({ type: CREATE_NOTE_SUCCESS, payload: data });
			})
			.catch(error => {
				dispatch({ type: CREATE_NOTE_FAILURE, payload: error });
			});
	}
}

export const deleteNote = (id) => {
	return (dispatch) => {
		dispatch({ type: DELETING_NOTE });
		axios
			.delete(`${url}/${id}`)
			.then(({ data }) => {
				return axios
								.get(url)
								.then(({ data }) => {
									dispatch({ type: DELETE_NOTE_SUCCESS, payload: data });
								})
			})
			.catch(error => {
				dispatch({ type: DELETE_NOTE_FAILURE, payload: error });
			});
	}
}

export const updateNote = (id, newInfo) => {
	const updatedNote = axios.put(`${url}/${id}`, newInfo);
	return (dispatch) => {
		dispatch({ type: UPDATING_NOTE });
		updatedNote
			.then(({ data }) => {
				return axios
									.get(url)
									.then(({ data }) => {
										dispatch({ type: UPDATE_NOTE_SUCCESS, payload: data });
									})
			})
			.catch(error => {
				dispatch({ type: UPDATE_NOTE_FAILURE, payload: error });
			});
	}
}

















