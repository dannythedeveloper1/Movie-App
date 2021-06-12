import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieDetail from "./MovieDetail";
const MovieCard = ({ title, poster, id }) => {
	// const [Movies, setMovies] = useState([]);
	// const [id, setId] = useState("");
	const [show, setShow] = useState(false);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const file = await fetch(OurJson.MovieFetch);
	// 		const data = await file.json();
	// 		setMovies(data.Search);
	// 	}
	// 	fetchData();
	// }, []);
	// function showDetail(movie) {
	// 	id ? setId("") : setId(movie.imdbID);
	// 	console.log(id);
	// }
    function openDetail() {
        setShow(true);
    }
	return (
		<>
			<div>
				<Movie>
					<img className="image" src={poster} alt="" />
					<h6>{title}</h6>
				</Movie>
				<button onClick={openDetail}>Open</button>
                {show && <MovieDetail id={id}/>}
			</div>
			{/* <MovieDetail/> */}
		</>
	);
};


const Movie = styled.div`
	cursor: pointer;
	width: 75px;
	.image {
		object-fit: contain;
		width: 100%;
		height: 100px;
	}
`;

export default MovieCard;
