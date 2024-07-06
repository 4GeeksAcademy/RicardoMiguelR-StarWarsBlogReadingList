import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/characters";
import { PlanetsCard } from "../component/planets";
import { StarshipsCard } from "../component/starships";
import "../../styles/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	const [hover, setHover] = useState(false);

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "black",
				borderRadius: '50%',
				width: "40px",
				height: "40px",
				textAlign: "center",
				lineHeight: "40px",
				fontSize: "20px",
				color: "white",
				transition: "transform 0.3s, background-color 0.3s",
				zIndex: 1,
				transform: hover ? "scale(1.3)" : "scale(1)",
				boxShadow: hover ? "0px 0px 11px 3px rgba(255,255,255,1)" : "0px 0px 0px -200px rgba(0,0,0,1)"
			}}
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		/>
	);
}

const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	const [hover, setHover] = useState(false);

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "black",
				borderRadius: '50%',
				width: "40px",
				height: "40px",
				textAlign: "center",
				lineHeight: "40px",
				fontSize: "20px",
				color: "white",
				transition: "transform 0.3s, background-color 0.3s",
				zIndex: 1,
				transform: hover ? "scale(1.3)" : "scale(1)",
				boxShadow: hover ? "0px 0px 11px 3px rgba(255,255,255,1)" : "0px 0px 0px -200px rgba(0,0,0,1)"
			}}
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		/>
	);
}


const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 2,
	nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<>
			<div className="container m-auto my-5" >
				<div className="titles">
					<h3 className="color-title">
						Characters
						<img src="https://www.allsmileys.com/files/sweetim-fantasy/6455.gif" className="gifs ms-3 mb-1" width="50px" />
					</h3>
				</div>
				<Slider {...carouselSettings}>
						{store.characters.map( (element)=> <CharactersCard key={element.uid} title={element.name} uid={element.uid} />)}
				</Slider>
				<div className="titles mt-5">
					<h3 className="color-title">
						Planets
						<img src="https://www.allsmileys.com/files/sweetim-fantasy/6455.gif" className="gifs ms-3 mb-1" width="50px" />
					</h3>
				</div>
				<Slider {...carouselSettings}>
						{store.planets.map( (element)=> <PlanetsCard key={element.uid} title={element.name} uid={element.uid} />)}
				</Slider>
				<div className="titles mt-5">
					<h3 className="color-title">
						Starships
						<img src="https://www.allsmileys.com/files/sweetim-fantasy/6455.gif" className="gifs ms-3 mb-1" width="50px" />
					</h3>
				</div>
				<Slider {...carouselSettings}>
						{store.starships.map( (element)=> <StarshipsCard key={element.uid} title={element.name} uid={element.uid} />)}
				</Slider>
			</div>	
		</>
	)
};
