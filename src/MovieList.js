import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styled from 'styled-components'
import OurJson from "./utility/OurJson";
const MovieList = () => {
	const [Movies, setMovies] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const file = await fetch(OurJson.MovieFetch);
			const data = await file.json();
			setMovies(data.Search);
		}
		fetchData();
	}, []);
	return (
		<div>
			{Movies.map((movie) => {
				return (
					<Poster key={movie.imdbID}>
						<MovieCard
							poster={movie.Poster}
							id={movie.imdbID}
							title={movie.Title}
						/>
					</Poster>
				);
			})}
		</div>
	);
};

export default MovieList;

const Poster = styled.div`
	display: flex;
`;