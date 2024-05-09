import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<div className="navbar-brand ms-5">
					<img src="https://i.pinimg.com/originals/0c/36/62/0c36620ff24709b0ccf69f97b8ba67ec.gif" className="homeI my-2" height="120px" width="210px" />
				</div>
				</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};