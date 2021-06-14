import React, { useState, useEffect } from "react";
import { fetchData } from "./utility/OurJson";
import styled from "styled-components";
const MovieDetail = ({ id }) => {
	const [MovieInfo, setMovieInfo] = useState({});
	useEffect(() => {
		async function getData() {
			const data = await fetchData(id);
			setMovieInfo(data);
		}
		getData();
		// async function fetchData() {
		// 	// const request = await fetch(OurJson.MovieDetail);
		// 	const apikey = "71b5ec83";
		// 	const request = await fetch(
		// 		`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`
		// 	);
		// 	const data = await request.json();
		// 	setMovieInfo(data);
		// }
	}, []);

	console.log(MovieInfo);
	return (
		<DetailWrapper>
			<Poster>
				<img src={MovieInfo.Poster} alt="" />
			</Poster>
			<DetailInfo>
				<Duration>
					<Rating>
						<span>{MovieInfo.Rated}</span>
					</Rating>
					<Rating>
						<span>{MovieInfo.Runtime}</span>
					</Rating>
				</Duration>
				<Rating>
					<span>{MovieInfo.Genre}</span>
				</Rating>
				<Title>Plot</Title>
				<TitleDetail>{MovieInfo.Plot}</TitleDetail>
				<Title>Actors</Title>
				<TitleDetail>{MovieInfo.Actors}</TitleDetail>
			</DetailInfo>
		</DetailWrapper>
	);
};

const DetailWrapper = styled.div`
	margin: 50px;
	display: flex;
`;
const Poster = styled.div`
	> img {
		object-fit: contain;
		width: 200px;
		height: 200px;
	}
`;
const DetailInfo = styled.div``;
const Duration = styled.div`
	display: flex;
	margin-bottom: 10px;
`;
const Rating = styled.div`
	> span {
		background-color: #4276c9;
		border-radius: 5px;
		margin-right: 20px;
	}
	color: white;
`;
const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
	margin: 5px 0 10px 0;
`;
const TitleDetail = styled.div`
	font-style: italic;
`;

export default MovieDetail;
