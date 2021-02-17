import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [datosPlanetas, setDatosPlanetas] = useState({});

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${params.id}`)
			.then(data => data.json())
			.then(data => {
				setDatosPlanetas(data.result.properties);
			});
	}, []);
	//console.log(datosPlanetas.name);
	return (
		<div className="jumbotron">
			<h5 className="display-4">{datosPlanetas.name} </h5>
			<img
				src="https://static.wikia.nocookie.net/starwars/images/7/72/Teth-TVE.png/revision/latest?cb=20190423045047"
				className="rounded float-end"
				alt="..."
			/>

			<p>
				Nam scelerisque mi ultrices, ullamcorper elit nec, pellentesque massa. Morbi egestas nibh magna, a
				ullamcorper sem vulputate vel. Praesent volutpat neque ac ex vehicula auctor. Aliquam pulvinar orci id
				elit lobortis, nec consequat eros sollicitudin. Suspendisse mollis orci id nulla maximus, eu lacinia
				ligula aliquet. In dignissim odio sit amet scelerisque egestas. Suspendisse nulla diam, hendrerit eget
				convallis sit amet, varius nec urna. Duis eleifend sed nibh at imperdiet. Ut volutpat semper nulla, sed
				tempus metus. Aliquam faucibus rhoncus ornare. Cras ut gravida quam.{" "}
			</p>
			<hr className="my-4" />
			<h3>Name {datosPlanetas.name} </h3>
			<h3>Climate {datosPlanetas.climate} </h3>
			<h3> Population {datosPlanetas.population} </h3>
			<h3> Orbital Period {datosPlanetas.orbital_period} </h3>
			<h3> Rotation Period {datosPlanetas.rotation_period} </h3>
			<h3> Diameter {datosPlanetas.diameter} </h3>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanetas.propTypes = {
	match: PropTypes.object,
	id: PropTypes.string
};
