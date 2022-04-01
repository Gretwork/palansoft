import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/movieapi'

const base_url = 'https://image.tmdb.org/t/p/original/'

const MovieBanner = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovies(request.data.results[0])
      return request
    }
    fetchData()
  }, [])

  //console.table(movies)

  return (
    <div className='row movie-banner-con-main'>
      <h1>{title}</h1>
      <div className='movie-row-inn-con movie-img-banner'>
        <div className='banner-con-box'>
          <h3>{movies.name}</h3>
        </div>
        <img
          className='movie-img-banner'
          key={movies.id}
          alt={movies.name}
          title={movies.name}
          src={`${base_url}${
            isLargeRow ? movies.poster_path : movies.backdrop_path
          }`}
        />
      </div>
    </div>
  )
}

export default MovieBanner
