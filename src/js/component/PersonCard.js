import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PersonCard = props => {
	const { store, actions } = useContext(Context);
	let [propiedades, setPropiedades] = useState({});
	let url;

	store.personas.map(identificacion => {
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

	//console.log(props.id);
	const Like = idPersonaClickeada => {
		// store.personas.map((item, i) => {
		// 	if (idPersonaClickeada === item.uid) {
		// 		console.log(item.name);
		// 	}
		// });
	};

	const handleClick = id => {
		let newObject = {};
		store.personas.map(item => {
			if (item.uid === id) {
				newObject = { name: item.name, id: item.uid };
				actions.addFav(newObject);
			}
		});
	};

	return (
		<div className="card">
			<img
				src="https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2018/02/LukeSkywalker-400x200.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<h5 className="card-title">
					Gender:
					{propiedades.gender}{" "}
				</h5>
				<h5 className="card-title">Hair Color: {propiedades.hair_color} </h5>
				<h5 className="card-title">Eye Color: {propiedades.eye_color} </h5>
				<Link to={`/single/${props.id}`}>
					<button type="button" className="btn btn-outline-primary">
						Learn More!
					</button>
				</Link>

				<button
					type="button submit"
					onClick={() => {
						handleClick(props.id);
					}}
					className="btn btn-outline-warning ">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
	PersonCard.propTypes = {
		name: PropTypes.string,
		id: PropTypes.string
	};
};
