import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const totalFavorites = actions.getFavoritesCount();
	const [chooseSuggestion, setChooseSuggestion] = useState(-1);

    const moveOnTheSuggestionn = (e) => {
        if (e.key === "ArrowUp") {
            setChooseSuggestion(prev => Math.max(prev - 1, -1));
        } else if (e.key === "ArrowDown") {
            setChooseSuggestion(prev => Math.min(prev + 1, store.searchResults.length - 1));
        } else if (e.key === "Enter" && chooseSuggestion !== -1) {
            const { uid, type } = store.searchResults[chooseSuggestion];
            if (type === 'character') {
                window.location.href = `/character-details/${uid}`;
            } else if (type === 'planet') {
                window.location.href = `/planet-details/${uid}`;
            } else if (type === 'starship') {
                window.location.href = `/starship-details/${uid}`;
            }
        }
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/">
                        <div className="navbar-brand mt-2">
                            <img src="https://i.pinimg.com/originals/0c/36/62/0c36620ff24709b0ccf69f97b8ba67ec.gif" className="homeI rounded" height="110px" width="200px" />
                        </div>
                    </Link>
                    <div className="offcanvas-favorites">
                        <button className="image-favo-nav btn btn-transparent position-relative mt-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img src="https://i.gifer.com/fy8R.gif" className="img-fav" width="90px" />
                            {totalFavorites > 0 && <span className="position-absolute ms-2 start-50 translate-middle text-black badge rounded-pill bg-warning">{totalFavorites}</span>}
                        </button>

                        <div className="offcanvas offcanvas-end body-offcanvas" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header m-auto">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                    <b className="shadow-title">
                                        Favorites
                                        <i className="bi bi-heart ms-2" style={{color: 'red'}}></i>
                                    </b>
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="Section-characters">
                                    <b className="color-titles-favOff">CHARACTERS</b>
                                    {store.favoriteCharacters.length > 0 ? (
                                        store.favoriteCharacters.map((character, index) => (
                                            <div key={index} className="favorite-cha my-2">
                                                <Link to={`/character-details/${character.uid}`}>
                                                    <button type="button" className="fav-back btn">
                                                        <b>{character.name}</b>
                                                    </button>
                                                </Link>
                                                <button onClick={() => actions.removeFavoriteCharacter(character.uid)} className="remove-general btn btn rounded-circle ms-2">
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="no-favorites text-center">
                                            <img src="https://media.tenor.com/pS77v8NMRsgAAAAj/heck-yes-star-wars.gif" width="200rem" />
                                        </div>
                                    )}
                                </div>
                                <div className="Section-planets mt-5">
                                    <b className="color-titles-favOff">PLANETS</b>
                                    {store.favoritePlanets.length > 0 ? (
                                        store.favoritePlanets.map((planet, index) => (
                                            <div key={index} className="favorite-pla my-2">
                                                <Link to={`/planet-details/${planet.uid}`}>
                                                    <button type="button" className="fav-back btn">
                                                        <b>{planet.name}</b>
                                                    </button>
                                                </Link>
                                                <button onClick={() => actions.removeFavoritePlanet(planet.uid)} className="remove-general btn btn rounded-circle ms-2">
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="no-favorites text-center">
                                            <img src="https://media.tenor.com/O8Y9RRrHx_wAAAAi/darth-vader-tidey.gif" width="110rem" />
                                        </div>
                                    )}
                                </div>
                                <div className="Section-starships mt-5">
                                    <b className="color-titles-favOff">STARSHIPS</b>
                                    {store.favoriteStarships.length > 0 ? (
                                        store.favoriteStarships.map((starship, index) => (
                                            <div key={index} className="favorite-sta my-2">
                                                <Link to={`/starship-details/${starship.uid}`}>
                                                    <button type="button" className="fav-back btn">
                                                        <b>{starship.name}</b>
                                                    </button>
                                                </Link>
                                                <button onClick={() => actions.removeFavoriteStarship(starship.uid)} className="remove-general btn btn rounded-circle ms-2">
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="no-favorites text-center">
                                            <img src="https://media.tenor.com/ha7d93VTfFsAAAAj/stormtrooper-nft.gif" width="200rem" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container social-links mt-3">
                        <div className="row">
                            <div className="col" id="social-icons">
                                <a className="link aw-independent"  href="https://www.tiktok.com/@starwars" target="_blank"  rel="noopener noreferrer"  data-custom="">
                                    <i className="bi bi-tiktok" style={{background: 'black', color: 'white', fontSize: '22px'}}></i>
                                </a>
                            </div>
                            <div className="col" id="social-icons">
                                <a className="link aw-independent"  href="https://www.instagram.com/starwars" target="_blank"  rel="noopener noreferrer"  data-custom="">
                                    <i className="bi bi-instagram" style={{background: 'black', color: 'white', fontSize: '22px'}}></i>
                                </a>
                            </div>
                            <div className="col" id="social-icons">
                                <a className="link aw-independent"  href="https://twitter.com/starwars" target="_blank"  rel="noopener noreferrer"  data-custom="">
                                    <i className="bi bi-twitter-x" style={{background: 'black', color: 'white', fontSize: '22px'}}></i>    
                                </a>
                            </div>
                            <div className="col" id="social-icons">
                                <a className="link aw-independent"  href="https://www.facebook.com/StarWars" target="_blank"  rel="noopener noreferrer"  data-custom="">
                                    <i className="bi bi-facebook" style={{background: 'black', color: 'white', fontSize: '22px'}}></i>
                                </a>
                            </div>
                            <div className="col" id="social-icons">
                                <a className="link aw-independent"  href="https://www.youtube.com/user/starwars" target="_blank"  rel="noopener noreferrer"  data-custom="">
                                    <i className="bi bi-youtube" style={{background: 'black', color: 'white', fontSize: '22px'}}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container search-items mt-3">
                        <nav className="container navbar2 w-75">
                            <div className="container-fluid">
                                <form className="d-flex mb-2" role="search" onSubmit={actions.searchAndSubmit}>
									<input
                                        style={{color: 'white', fontWeight: 'bold'}}
										className="back-img form-control me-2"
										type="search"
                                        id="placeholder-color"
										placeholder="Search"
										aria-label="Search"
										value={store.suggestionSearch}
										onChange={actions.searchInputChange}
										onKeyDown={moveOnTheSuggestionn}
									/>
									<button className="click-search btn btn-outline-light" type="submit">
										<i className="bi bi-search"></i>
									</button>
								</form>
                                {store.searchResults.length > 0 && (
									<ul className="list-group">
										{store.searchResults.map((result, index) => (
											<li
												key={index}
                                                id="color-move-hover"
												className={`list-group-item ${index === chooseSuggestion ? 'active' : ''}`}
												onClick={() => {
													const { uid, type } = result;
													if (type === 'character') {
														window.location.href = `/character-details/${uid}`;
													} else if (type === 'planet') {
														window.location.href = `/planet-details/${uid}`;
													} else if (type === 'starship') {
														window.location.href = `/starship-details/${uid}`;
													}
												}}
											>
												{result.name}
											</li>
										))}
									</ul>
								)}
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
        </>
    );
};
