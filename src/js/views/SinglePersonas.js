import React, { useState, useEffect, useContext } from "react";
//import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PersonCard } from "../component/PersonCard.js";

import PropTypes from "prop-types";

export const Single = props => {
	const { store, actions } = useContext(Context);

	//console.log(actions);
	const params = useParams();

	//console.log(params);
	//console.log(store.personas);
	//console.log(props.id);

	let [datosPersonas, setDatosPersonas] = useState({});
	//console.log("id persona", params.id);
	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${params.id}`)
			.then(data => data.json())
			.then(data => {
				setDatosPersonas(data.result.properties);
			});
	}, []);
	//console.log(datosPersonas.name);

	//console.log("casa", store.personas[0]);
	//console.log("casa", store);

	//console.log("perro", Context.personas);

	return (
		<div className="jumbotron">
			<div className="container1">
				<div className="col-12">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Luke_Skywalker_con_traje_de_piloto.jpg/368px-Luke_Skywalker_con_traje_de_piloto.jpg"
						className="rounded float-end"
						alt="..."
					/>
				</div>
				<div className="col-6">
					<h5 className="display-4">{datosPersonas.name} </h5>
					<p>
						Nam scelerisque mi ultrices, ullamcorper elit nec, pellentesque massa. Morbi egestas nibh magna,
						a ullamcorper sem vulputate vel. Praesent volutpat neque ac ex vehicula auctor. Aliquam pulvinar
						orci id elit lobortis, nec consequat eros sollicitudin. Suspendisse mollis orci id nulla
						maximus, eu lacinia ligula aliquet. In dignissim odio sit amet scelerisque egestas. Suspendisse
						nulla diam, hendrerit eget convallis sit amet, varius nec urna. Duis eleifend sed nibh at
						imperdiet. Ut volutpat semper nulla, sed tempus metus. Aliquam faucibus rhoncus ornare. Cras ut
						gravida quam.{" "}
					</p>
				</div>
			</div>

			<hr className="my-4" />

			<div className="container">
				<div className="row align-items-start">
					<div className="col-2">
						<h3>
							Name <br /> <br /> {datosPersonas.name}{" "}
						</h3>
					</div>
					<div className="col-2">
						<h3>
							Birth <br /> Year <br />
							<br />
							{datosPersonas.birth_year}{" "}
						</h3>
					</div>
					<div className="col-2">
						<h3>
							{" "}
							Gender <br /> <br /> <br />
							{datosPersonas.gender}{" "}
						</h3>
					</div>
					<div className="col-2">
						<h3>
							Height <br /> <br /> <br /> {datosPersonas.height}
						</h3>
					</div>
					<div className="col-2">
						<h3>
							{" "}
							Skin <br /> color <br />
							<br /> {datosPersonas.skin_color}{" "}
						</h3>
					</div>
					<div className="col-2">
						<h3>
							{" "}
							Eye <br /> Color <br /> <br /> {datosPersonas.eye_color}{" "}
						</h3>
					</div>
				</div>
			</div>

			<div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object,
	id: PropTypes.string
};
