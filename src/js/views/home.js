import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharactersCard } from "../component/characters";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<>
			<div className="container-flex mx-5 my-5">
				<div className="title1">
					<h1 className="color-title">Characters</h1>
				</div>
				<div className="Characters row flex-row flex-nowrap mt-5">
						{store.characters.map( (element)=> <CharactersCard key={element.uid} title={element.name} />)}
				</div>
			</div>	
		</>
	)
};
