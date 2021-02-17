import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<h5 className="display-4">Nombre: </h5>
			<h5 className="display-4">altura es: </h5>
			<h6 className="display-4">Planeta natal: </h6>
			<h6 className="display-4">Nacimiento: </h6>
			<h6 className="display-4">muerte: </h6>
			<h6 className="display-4">Genero:</h6>
			<h6 className="display-4">Color de Cabello: </h6>
			<h6 className="display-4">Especie: </h6>
			<hr className="my-4" />
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
