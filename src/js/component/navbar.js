import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="imagen"
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenu2"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
						<li>
							<button className="dropdown-item" type="button">
								Action
							</button>
						</li>
						<li>
							<button className="dropdown-item" type="button">
								Another action
							</button>
						</li>
						<li>
							<button className="dropdown-item" type="button">
								Something else here
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
