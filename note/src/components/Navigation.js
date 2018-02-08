import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div className="Navbar">
			<ul className="Navbar__nav">
				<li className="NavLink">
					<NavLink to="/" activeClassName="Navlink--selected" exact>
						Home
					</NavLink>
				</li>
				<li className="NavLink">
					<NavLink to="/notes" activeClassName="Navlink--selected">
						Notes
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigation
