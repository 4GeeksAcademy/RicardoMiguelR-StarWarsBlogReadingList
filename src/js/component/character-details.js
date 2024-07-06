import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const CharactersDetails = () => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.getCharacterDetails(theid);
    }, [theid]);

    const character = store.characterDetails;

    return (
        <>
            {character ? (
                <div className="container title-name text-center mt-5 p-1">
                    <h3 className="title-character2 me-2">
                        <b>{character.name}</b>
                    </h3>
                </div>
            ) : (
                <div>
                    <p></p>
                </div>
            )}
            {character ? (
                <div className="card-generalD mt-5 m-auto">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src="https://www.icegif.com/wp-content/uploads/2022/09/icegif-997.gif" className="img-generalD w-100 h-100 animated-glitter" alt="..." />
                        </div>
                        <div className="col-md-5 p-3">
                            <div className="card-body">
                                <div className="scroll-text-container">
                                    <div className="scroll-text">
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Height:</b> {character.height}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Mass:</b> {character.mass}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Hair color:</b> {character.hair_color}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Skin color:</b> {character.skin_color}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Eye color:</b> {character.eye_color}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Birth year:</b> {character.birth_year}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Gender:</b> {character.gender}</p>
                                        <p className="card-text-details"><b style={{color: 'orange'}}>Home world:</b> {character.homeworld}</p>
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
