import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../component/PersonCard";
import { PersonCard } from "../component/PersonCard";
import { PlanetCard } from "../component/PlanetCard";
import ListCardsPersons from "../component/listCardsPersons";
import ListPlanets from "../component/Listplanets";

export const Home = () => (
	<div className="container ">
		{/* <div className="personas">
			<div className="cards">
				<p className="pHome">Personajes</p> */}

		<ListCardsPersons />
		{/* </div>
		</div>
		<div className="planetas">
			<div className="cards">
				<p className="pHome">Planetas</p> */}
		<ListPlanets />
		{/* </div>
		</div> */}
	</div>
);
