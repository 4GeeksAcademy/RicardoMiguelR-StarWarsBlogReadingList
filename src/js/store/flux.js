const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets:[],
			starships: [],
			characterDetails: null,
			planetDetails: null,
			starshipDetails: null,
			favoriteCharacters: JSON.parse(localStorage.getItem('favoriteCharacters')) || [],
			favoritePlanets: JSON.parse(localStorage.getItem('favoritePlanets')) || [],
			favoriteStarships: JSON.parse(localStorage.getItem('favoriteStarships')) || [],
			suggestionSearch: "",
            searchResults: []
		},
		actions: {

			loadSomeData: () => {
				fetch('https://www.swapi.tech/api/people?page=1&limit=100')
				.then( (response)=> (response.json()) )
				.then( (data)=> setStore({ characters: data.results }) )

				fetch('https://www.swapi.tech/api/planets?page=1&limit=100')
				.then( (response)=> (response.json()) )
				.then( (data)=> setStore({ planets: data.results }) )

				fetch('https://www.swapi.tech/api/starships?page=1&limit=100')
				.then( (response)=> (response.json()) )
				.then( (data)=> setStore({ starships: data.results }) )
			},

			getCharacterDetails: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
				.then( (response)=> (response.json()) )
				.then( (data)=> setStore({ characterDetails: data.result.properties}) )
			},

			getPlanetDetails: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
				.then( (response)=> (response.json()) )
				.then( (data)=> setStore({ planetDetails: data.result.properties}) )
			},

			getStarshipDetails: (uid) => {
				fetch(`https://www.swapi.tech/api/starships/${uid}`)
				.then( (response)=> (response.json()) )
				.then( (data)=> setStore({ starshipDetails: data.result.properties}) )
			},

			addFavoriteCharacter: (uid) => {
				const store = getStore()
				const character = store.characters.find(characterFav => characterFav.uid === uid)
				if (character && !store.favoriteCharacters.some(fav => fav.uid === character.uid)) {
					const updatedFavorites = [...store.favoriteCharacters, character]
					setStore({favoriteCharacters: updatedFavorites})
					localStorage.setItem('favoriteCharacters', JSON.stringify(updatedFavorites))
				} else {
					alert('hey hey hey, this character is already added!')
				}
			},

			removeFavoriteCharacter: (uid) => {
				const store = getStore()
				const updatedFavorites = store.favoriteCharacters.filter(characterFav => characterFav.uid !== uid)
				setStore({favoriteCharacters: updatedFavorites})
				localStorage.setItem('favoriteCharacters', JSON.stringify(updatedFavorites))
			},

			addFavoritePlanet: (uid) => {
				const store = getStore()
				const planet = store.planets.find(planetFav => planetFav.uid === uid)
				if (planet && !store.favoritePlanets.some(fav => fav.uid === planet.uid)) {
					const updatedFavorites = [...store.favoritePlanets, planet]
					setStore({favoritePlanets: updatedFavorites})
					localStorage.setItem('favoritePlanets', JSON.stringify(updatedFavorites))
				} else {
					alert('hey hey hey, this planet is already added!')
				}
			},

			removeFavoritePlanet: (uid) => {
				const store = getStore()
				const updatedFavorites = store.favoritePlanets.filter(planetFav => planetFav.uid !== uid)
				setStore({favoritePlanets: updatedFavorites})
				localStorage.setItem('favoritePlanets', JSON.stringify(updatedFavorites))
			},

			addFavoriteStarship: (uid) => {
				const store = getStore()
				const starship = store.starships.find(starshipFav => starshipFav.uid === uid)
				if (starship && !store.favoriteStarships.some(fav => fav.uid === starship.uid)) {
					const updatedFavorites = [...store.favoriteStarships, starship]
					setStore({favoriteStarships: updatedFavorites})
					localStorage.setItem('favoriteStarships', JSON.stringify(updatedFavorites))
				} else {
					alert('hey hey hey, this starship is already added!')
				}
			},

			removeFavoriteStarship: (uid) => {
				const store = getStore()
				const updatedFavorites = store.favoriteStarships.filter(starshipFav => starshipFav.uid !== uid)
				setStore({favoriteStarships: updatedFavorites})
				localStorage.setItem('favoriteStarships', JSON.stringify(updatedFavorites))
			},

			getFavoritesCount: () => {
				const store = getStore();
				const totalFavorites = store.favoriteCharacters.length + store.favoritePlanets.length + store.favoriteStarships.length;
				return totalFavorites;
			},

			searchInputChange: (e) => {
				const suggestionSearch = e.target.value.toLowerCase();
				const store = getStore();
				let searchResults = [];
			
				if (suggestionSearch.trim() !== '') {
					const allItems = [
						...store.characters.map(item => ({ ...item, type: 'character' })),
						...store.planets.map(item => ({ ...item, type: 'planet' })),
						...store.starships.map(item => ({ ...item, type: 'starship' }))
					];
			
					searchResults = allItems.filter(item =>
						item.name.toLowerCase().includes(suggestionSearch)
					).slice(0, 1);
				}
			
				setStore({ suggestionSearch, searchResults });
			},			

            searchAndSubmit: (e) => {
                e.preventDefault();
                const store = getStore();
                if (store.searchResults.length > 0) {
                    const firstResult = store.searchResults[0];
                    const { uid, type } = firstResult;
                    if (type === 'character') {
                        window.location.href = `/character-details/${uid}`;
                    } else if (type === 'planet') {
                        window.location.href = `/planet-details/${uid}`;
                    } else if (type === 'starship') {
                        window.location.href = `/starship-details/${uid}`;
                    }
                }
            },

			// changeColor: (index, color) => {
			// 	const store = getStore();
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});
			// 	setStore({ demo: demo });
			// },
		}
	};
};

export default getState;
