import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PersonCard = props => {
	const { store, actions } = useContext(Context);

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
				src="https://static.wikia.nocookie.net/esstarwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest/scale-to-width-down/350?cb=20160226204939"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
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
