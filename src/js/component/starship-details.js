import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const StarshipsDetails = () => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.getStarshipDetails(theid);
    }, [theid]);

    const starship = store.starshipDetails;

    return (
        <>
            {starship ? (
                <div className="container title-name text-center mt-5 p-1">
                    <h2 className="title-starship2 me-2">
                        <b>{starship.name}</b>
                    </h2>
                </div>
                ) : (
                    <div>
                        <p></p>
                    </div>
            )}
            {starship ? (
                <div className="card-generalD mt-5 m-auto">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src="https://steamuserimages-a.akamaihd.net/ugc/1751306654050736194/572D840793A02248BE02BF40A303D5D2D111E39B/" className="img-generalD w-100 h-100 animated-glitter" alt="..." />
                        </div>
                        <div className="col-md-5 p-3">
                            <div className="card-body">
                                <div className="scroll-text-container">
                                    <div className="scroll-text">
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Model:</b> {starship.model}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Starship class:</b> {starship.starship_class}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Manufacturer:</b> {starship.manufacturer}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Cost in credits:</b> {starship.cost_in_credits}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Length:</b> {starship.length}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Crew:</b> {starship.crew}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Passengers:</b> {starship.passengers}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Max Atmosphering speed:</b> {starship.max_atmosphering_speed}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Hyperdrive rating:</b> {starship.hyperdrive_rating}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Cargo capacity:</b> {starship.cargo_capacity}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Consumables:</b> {starship.consumables}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Pilots:</b> {starship.pilots}</p>
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