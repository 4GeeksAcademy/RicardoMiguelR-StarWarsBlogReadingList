import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.getPlanetDetails(theid);
    }, [theid]);

    const planet = store.planetDetails;

    return (
        <>
            {planet ? (
                <div className="container title-name text-center mt-5 p-1">
                    <h2 className="title-planet2 me-2">
                        <b>{planet.name}</b>
                    </h2>
                </div>
                ) : (
                    <div>
                        <p></p>
                    </div>
            )}
            {planet ? (
                <div className="card-generalD mt-5 m-auto">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src="https://i.pinimg.com/originals/e8/72/41/e87241e1668e8476722a216979dbdacc.gif" className="img-generalD w-100 h-100 animated-glitter" alt="..." />
                        </div>
                        <div className="col-md-5 p-3">
                            <div className="card-body">
                                <div className="scroll-text-container">
                                    <div className="scroll-text">
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Diameter:</b> {planet.diameter}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Rotation period:</b> {planet.rotation_period}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Orbital period:</b> {planet.orbital_period}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Gravity:</b> {planet.gravity}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Population:</b> {planet.population}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Climate:</b> {planet.climate}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Terrain:</b> {planet.terrain}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Surface water:</b> {planet.surface_water}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container loading text-center mt-5">
                    <img src="https://media3.giphy.com/media/yyqOUPn5souNBSHUnU/giphy.gif?cid=6c09b952aoa8n1h8lws40a5d0o49sfity5p3ieqexiql09gb&ep=v1_stickers_related&rid=giphy.gif&ct=s" width="300rem" />
                </div>
            )}
        </>
    );
};