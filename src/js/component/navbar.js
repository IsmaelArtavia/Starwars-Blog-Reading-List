import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { PersonCard } from "../component/PersonCard.js";
import PropTypes from "prop-types";

export const Navbar = () => {
	let { store, actions } = useContext(Context);

	//console.log(store.personas);

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
			<div className="ml-auto btn-group dropstart">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenu2"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
						{store.Acumulador.map((item, i) => {
							return (
								<li key={i}>
									{" "}
									{item.name}{" "}
									<button type="button" className="btn btn-light">
										<i className="fas fa-trash" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
