const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "Luke Skywalker",
					altura: 172,
					background: "white",
					initial: "white",
					planeta: "Tatooine",
					muerte: "34DBY",
					nacimiento: "19ABY",
					especie: "humano",
					genero: "masculino",
					peso: 73,
					colorpelo: "rubio"
				},
				{
					title: "C-3PO",
					altura: 167,
					background: "white",
					initial: "white",
					planeta: "homeworld",
					muerte: "N/A",
					nacimiento: "112BBY",
					especie: "robot",
					genero: "N/A",
					peso: 75,
					colorpelo: "N/A"
				},
				{
					title: "tercero",
					background: "white",
					initial: "white"
				}
			],
			personas: [],
			planetas: [],
			Acumulador: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						let characters = data.results;
						setStore({ personas: characters });
					});

				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						let planets = data.results;
						setStore({ planetas: planets });
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
