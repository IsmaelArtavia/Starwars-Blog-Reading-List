import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";
import { PersonCard } from "../component/PersonCard.js";

const listCardsPersons = () => {
	let { store, actions } = useContext(Context);
	console.log(store.personas);
	return (
		<div className="container personas">
			{store.personas.map((item, i) => {
				return <PersonCard className key={i} name={item.name} />;
			})}
		</div>
	);
};

export default listCardsPersons;
