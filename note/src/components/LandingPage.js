import React, { Component } from 'react';
import Notes from './Notes';

class LandingPage extends Component {
	render() {
		return (
			<div className="LandingPage">
				<div><h1>Notes</h1></div>
				<div><Notes /></div>
			</div>
		);
	}
}

export default LandingPage;
