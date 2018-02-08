import React from 'react';
import ReactDOM from 'react-dom';
import './css/less/index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Navigation />
				<Route path="/" component={LandingPage} exact/>
				<Route path="/notes" component={Notes} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
