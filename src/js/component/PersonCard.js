import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PersonCard = props => {
	return (
		<div className="card">
			<img
				src="https://static.wikia.nocookie.net/esstarwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest/scale-to-width-down/350?cb=20160226204939"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<Link to="/single/">
					<button>Explorar</button>
				</Link>
			</div>
		</div>
	);
	PersonCard.propTypes = {
		name: PropTypes.string
	};
};
