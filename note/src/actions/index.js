import axios from 'axios';

/*Action Types*/
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const ERROR_FETCHING_NOTES = 'ERROR_FETCHING_NOTES';

/*Action Creators
   C - addNote
   R - getNotes
   U - updateNote
   D - deleteNote
*/
const url = ' http://localhost:3000/posts';

export const getNotes = () => {
	const notes = axios.get(`${url}`);
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
