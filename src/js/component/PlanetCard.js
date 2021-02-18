import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	let [propiedades, setPropiedades] = useState({});
	let url;

	store.planetas.map(identificacion => {
		if (props.id === identificacion.uid) {
			url = identificacion.url;
		}
		//	console.log(url);
	});

	useEffect(() => {
		fetch(url)
			.then(data => data.json())
			.then(data => {
				let informacion = data.result.properties;
				setPropiedades(informacion);
			});
	});

	return (
		<div className="card tarjetaplaneta">
			<img
				className="card-img-top"
				src="https://www.force-unifiee.fr/wp-content/uploads/2020/02/forteresse-alderaan-force-unifiee-concours-2020-400x200.jpg"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<h5 className="card-title">
					Population:
					{propiedades.population}{" "}
				</h5>
				<h5 className="card-title">
					Terrain:
					{propiedades.terrain}{" "}
				</h5>

				<Link to={`/singlePlaneta/${props.id}`}>
					<button type="button" className="btn btn-outline-primary">
						Learn More!
					</button>
				</Link>
			</div>
		</div>
	);
	PlanetCard.propTypes = {
		name: PropTypes.string,
		id: PropTypes.string
	};
};
