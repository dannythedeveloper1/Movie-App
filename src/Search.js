import React, { useState } from "react";
import styled from "styled-components";
import MovieList from "./MovieList";

const Search = () => {
	const [show, setShow] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [type, setType] = useState("movie");
	const [allInput, setAllInput] = useState("harry%20potter");
	const handleclick = (e) => {
		e.preventDefault();
        setType(document.getElementById("type").value);
        setAllInput(userInput);
		setShow(true);
	};
	return (
		<SearchEngine>
			<h1>Welcome to Shmovie</h1>
			<form onSubmit={handleclick}>
				<input type="text" onChange={(e) => setUserInput(e.target.value)} />
				<label>Type:</label>
				<select name="type" id="type">
					<option value="" selected>
						Choose Type
					</option>
					<option value="movie">Movies</option>
					<option value="series">Series</option>
					<option value="game">Game</option>
				</select>
				<button onClick={handleclick}>Search</button>
			</form>

			{show && <MovieList userInput={allInput} type={type} />}
		</SearchEngine>
	);
};
const SearchEngine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> form {
		padding-bottom: 30px;
	}
`;

export default Search;

