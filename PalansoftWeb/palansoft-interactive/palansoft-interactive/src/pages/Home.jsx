import { Link } from 'react-router-dom'
import MovieRaw from '../components/MovieRaw'
import requests from '../api/movieapi'
import MovieBanner from '../components/MovieBanner'
import ActivityRaw from '../components/ActivityRaw'
import { useState, useEffect } from 'react'
function Homepage(props) {
  const [userinfo, setUserinfo] = useState(null)
  useEffect(async () => {
    const userdata = await JSON.parse(localStorage.getItem('userinfo'))
    //console.log(userdata)
    setUserinfo(userdata)
  }, [])

  return (
    <>
      <div className='homepage-main-con'>
        {userinfo && <h1>Welcome back, {userinfo.Name}</h1>}

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
        {/* <MovieRaw
          title='Top Rated'
          fetchURL={requests.fetchTopRated}
        ></MovieRaw>
        <MovieRaw
          title='Action Movies'
          fetchURL={requests.fetchActionMovies}
        ></MovieRaw>
        <MovieRaw
          title='Romantic Movies'
          fetchURL={requests.fetchRomanceMovies}
        ></MovieRaw> */}
        <ActivityRaw title='Palansoft' fetchURL={requests.fetchRomanceMovies} />
      </div>
    </>
  )
}

export default Homepage
