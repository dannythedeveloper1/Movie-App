import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieDetail from "./MovieDetail";
import Button  from "@material-ui/core/Button";
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
		show == false ? setShow(true) : setShow(false);
	}
	return (
		<MovieCards>
			<PosterTitle>
				<img src={poster} alt="" />
				<h6>{title}</h6>
			</PosterTitle>
			<Btn>
				<Button
					variant="contained"
					size="small"
					color="primary"
					onClick={openDetail}
				>
					Open
				</Button>
			</Btn>
			{show && <MovieDetail id={id} />}
		</MovieCards>
	);
};

const MovieCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
	padding-bottom: 10px;
`;
const PosterTitle = styled.div`
	> img {
		width:220px;
	}
`;
const Btn = styled.div`
	padding-top: 20px;
`;

export default MovieCard;
