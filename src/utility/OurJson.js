const apikey = process.env.REACT_APP_API_KEY;
// const userInput = "harry%20potter";
// const id = "tt1201607";
// const OurJson = {
// 	// i=imdbID
// 	MovieFetch: `http://www.omdbapi.com/?s=${harryPotter}&apikey=${apikey}`,
// 	// MovieDetail: `http://www.omdbapi.com/?i=${id}&apikey=${apikey}`,
// };
// export default OurJson;

export async function OurJson(userInput,type) {
	const request = await fetch(
		`http://www.omdbapi.com/?s=${userInput}&apikey=${apikey}`
	);
	const data = await request.json();
	const file = data.Search;
	let movies = [];
	file.forEach(element => {
		if (element.Type === type) {
			movies.push(element);
		}
	});
	console.log(movies);
	return movies;
}

export async function fetchData(id) {
	// const request = await fetch(OurJson.MovieDetail);
	// const apikey = "71b5ec83";
	const request = await fetch(
		`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`
	);
	const data = await request.json();
	return data;
}

