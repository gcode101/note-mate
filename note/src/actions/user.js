import axios from 'axios';

axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:5000';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
	return {
		type: AUTHENTICATION_ERROR,
		payload: error
	};
};

export const register = (firstName, lastName, email, password, confirmPassword, history) => {
	return dispatch => {
		if (password !== confirmPassword) {
			dispatch(authError('Passwords do not match'));
			return;
		}
		axios
			.post(`${ROOT_URL}/api/user`, { firstName, lastName, email, password })
			.then(() => {
				dispatch({
					type: USER_REGISTERED
				});
				history.push('/login');
			})
			.catch(() => {
				dispatch(authError('Failed to register user'));
			});
	};
};

export const login = (email, password, history) => {
	return dispatch => {
		axios
			.post(`${ROOT_URL}/api/login`, { email, password })
			.then((response) => {
				dispatch({
					type: USER_AUTHENTICATED
				});
				localStorage.setItem('authorization', response.data.token);
				history.push('/notes');
			})
			.catch(() => {
				dispatch(authError('Incorrect username or password'));
			});
	};
};

export const logout = () => {
	return dispatch => {
		dispatch({
			type: USER_UNAUTHENTICATED
		});
		localStorage.removeItem('authorization');
	};
};










