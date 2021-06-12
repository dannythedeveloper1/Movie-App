const apikey = "71b5ec83";
const harryPotter = "harry%20potter";
const id = "tt1201607";
const OurJson = {
	// i=imdbID
	MovieFetch: `http://www.omdbapi.com/?s=${harryPotter}&apikey=${apikey}`,
	MovieDetail: `http://www.omdbapi.com/?i=${id}&apikey=${apikey}`,
};
export default OurJson;