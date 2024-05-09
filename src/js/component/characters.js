import React from "react";


export const CharactersCard = (props) => {
    return (
        <>

            <div className="card" style={{width: '30rem'}}>
                <img src="https://i.blogs.es/05d040/espinof-star-wars-jarjarbinks/840_560.jpg" className="card-img-top w-100" height="200px" width="400px" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Know more details!</a>
                    <a href="#" className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                    </a>
                </div>
            </div>

        </>
    )
}
