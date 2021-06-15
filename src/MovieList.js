import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { OurJson } from "./utility/OurJson";
const MovieList = () => {
	const [Movies, setMovies] = useState([]);
	useEffect(() => {
		// async function fetchData() {
		// 	const file = await fetch(OurJson.MovieFetch);
		// 	const data = await file.json();
		// 	setMovies(data.Search);
		// }
		// fetchData();
		async function fetchData() {
			const data = await OurJson();
			setMovies(data);
		}
		fetchData();
	}, []);
	return (
		<div>
			{Movies.map((movie) => {
				return (
					<div key={movie.imdbID}>
						<MovieCard
							poster={movie.Poster}
							id={movie.imdbID}
							title={movie.Title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default MovieList;
