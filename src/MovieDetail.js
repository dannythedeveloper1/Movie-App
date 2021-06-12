import React, { useState, useEffect } from "react";
// import OurJson from "./utility/OurJson";
import styled from "styled-components";
const MovieDetail = ({id}) => {
	const [MovieInfo, setMovieInfo] = useState({});
	useEffect(() => {
		async function fetchData() {
		// const request = await fetch(OurJson.MovieDetail);
		const apikey = "71b5ec83";
		const request = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`);			
		const data = await request.json();
		setMovieInfo(data);	
		}
		fetchData();
	}, []);
	console.log(MovieInfo);
	return (
		<DetailWrapper>
			<Poster>
				<img src={MovieInfo.Poster} alt="" />
			</Poster>
			<Paragraph>
				<h3>
					<span>Title:</span>
					{MovieInfo.Title}
				</h3>
				<h6>
					<span>RunTime:</span> {MovieInfo.Runtime}
				</h6>
				<h6>
					<span>Genre:</span> {MovieInfo.Genre}
				</h6>
				<h6 className="plot">
                    <span>Plot:</span>
                    <p>{MovieInfo.Plot}</p>
				</h6>
				<h5>
					<span>Actors:</span> {MovieInfo.Actors}
				</h5>
				<h6>
					<span>Rated:</span> {MovieInfo.Rated}
				</h6>
			</Paragraph>
		</DetailWrapper>
	);
};

const DetailWrapper = styled.div`
margin-top: 50px;
display: flex;
`;
const Poster = styled.div`
    > img{
        object-fit: contain;
        width: 200px;
        height: 200px;
    }
`;
const Paragraph = styled.div`
	> h3 > span {
		font-size: 1.5rem;
	}
	> h5 > span {
		font-size: 1.5rem;
	}
	> h6 > span {
		font-size: 1.5rem;
	}
    .plot{
        align-items:center;
        display: flex;
    }
`;

export default MovieDetail;

