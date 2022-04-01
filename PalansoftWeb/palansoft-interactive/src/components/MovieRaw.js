import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const base_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'

//https://www.themoviedb.org/movie/508947

function MovieRaw({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])

  //console.table(movies)
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movie-row-inn-con'>
        {movies.map((movie) => (
          <img
            className={`movie-img ${isLargeRow && 'movie-img-large'}`}
            key={movie.id}
            alt={movie.name}
            title={movie.name}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieRaw
