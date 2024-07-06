import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const PlanetsCard = (props) => {
    const { actions } = useContext(Context);

    return (
        <>
            <div className="card me-4" style={{width: '18rem', background: 'rgba(255, 255, 255, 0.247)'}}>
                <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/p/planeta_lava_.jpg" className="img-fluid rounded-circle" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><b>{props.title}</b></h5>
                    <div className="section-favoYfull">
                        <div className="planets-details mt-4">
                            <Link to={`/planet-details/${props.uid}`}>
                                <button type="button" className="btn btn-outline-light rounded-circle">
                                    Full details
                                    <i className="bi bi-justify ms-2"></i>
                                </button>
                            </Link>
                        </div>
                        <div className="favorite-position">
                            <button type="button" className="btn btn-outline-dark rounded-circle ms-2" 
                            onClick={() => actions.addFavoritePlanet(props.uid)} title="Click to add to favorites">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
