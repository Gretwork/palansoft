import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieRaw from '../components/MovieRaw'
import ActivityRaw from '../components/Activity'
import requests from '../api/movieapi'
import MovieBanner from '../components/MovieBanner'
import { useLocalStorage } from '../context/useLocalStorage'
import Faqs from '../components/Faqs'
function Homepage(props) {
  const [name, setName] = useLocalStorage('userinfo', '')

  //console.log(name.data.Name)

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem('userinfo', JSON.stringify(value))
  // }, [userinfo, value])

  return (
    <>
      <div className='homepage-main-con'>
        <h1>Welcome to Palansoft Interactive</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? create your account or restart your membership.</h3>
        {/* <p>{name.data.Name}</p> */}
        <p>
          <Link className='btn btn-start' to='/signin'>
            Get Started
          </Link>
        </p>
        <MovieBanner />
        <MovieRaw
          title='Netflix Originals'
          isLargeRow={true}
          fetchURL={requests.fetchNetflixOriginals}
        ></MovieRaw>
        <MovieRaw
          title='Top Rated'
          fetchURL={requests.fetchTopRated}
        ></MovieRaw>
        <MovieRaw
          title='Action Movies'
          fetchURL={requests.fetchActionMovies}
        ></MovieRaw>
        <ActivityRaw />

        <Faqs />
      </div>
    </>
  )
}

export default Homepage
