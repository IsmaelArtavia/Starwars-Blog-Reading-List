import React, { useContext } from "react";

import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { PlanetCard } from "../component/PlanetCard.js";

const Listplanets = () => {
	let { store, actions } = useContext(Context);
	console.log(store.planetas);
	return (
		<div className="container planets">
			{store.planetas.map((item, i) => {
				console.log("item", item);
				return <PlanetCard key={i} name={item.name} />;
			})}
		</div>
	);
};

export default Listplanets;
