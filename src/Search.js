import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieList from "./MovieList";

const Search = () => {
    const [show, setShow] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [allInput, setAllInput] = useState("harry%20potter");
    // useEffect(() => {
     
    // }, [userInput]);
	const handleclick = (e) => {
        e.preventDefault();
        setAllInput(userInput);
        setShow(true);
    };
	return (
		<SearchEngine>
			<h1>Welcome to Shmovie</h1>
			<form onSubmit={handleclick}>
				<input type="text" onChange={(e) => setUserInput(e.target.value)} />
				<button onClick={handleclick}>Search</button>
            </form>
            
            {show && <MovieList userInput={allInput} />}
		</SearchEngine>
	);
};
const SearchEngine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 50px;
`;

export default Search;
