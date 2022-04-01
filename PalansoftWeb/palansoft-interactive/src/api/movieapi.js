const API_KEY = 'ea503124bfbb6c4666839267cfdf748e'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=eng-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=eng-US`,
  fetchActionMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/movie/top_rated?api_key=${API_KEY}&with_genres=99`,
}

export default requests
