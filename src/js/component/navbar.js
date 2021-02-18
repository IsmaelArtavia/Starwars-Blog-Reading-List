import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { PersonCard } from "../component/PersonCard.js";
import PropTypes from "prop-types";

export const Navbar = props => {
	let { store, actions } = useContext(Context);

	//console.log(store.personas);

	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="imagen"
						src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
					/>
				</span>
			</Link>
			<div className="ml-auto btn-group dropstart">
				<div className="dropdown">
					<button
						className="btn btn-dark dropdown-toggle favoritos"
						type="button"
						id="dropdownMenu2"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites: {}
						{store.Acumulador.length}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
						{store.Acumulador.map((item, i) => {
							//console.log("acumulador", store.Acumulador.length);
							return (
								<li key={i} className="titulo">
									{" "}
									{item.name}{" "}
									<button
										type="button submit"
										onClick={() => {
											actions.deleteFav(item.id);
										}}
										className="btn btn-light basurero">
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
	Navbar.propTypes = {
		name: PropTypes.string,
		id: PropTypes.string
	};
};
