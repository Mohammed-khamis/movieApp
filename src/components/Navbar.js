import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<img src={logo} alt="movies logo" className="logo" />
				<ul className="nav-links">
					<li>
						<Link to="/"> Home </Link>
					</li>
					<li>
						<Link to="/favorite"> Favorite List </Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
