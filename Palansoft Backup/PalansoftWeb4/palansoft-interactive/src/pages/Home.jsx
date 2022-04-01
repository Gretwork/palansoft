import { Link } from 'react-router-dom'

function Homepage(props) {
  return (
    <>
      <div className='homepage-main-con'>
        <h1>Welcome to Palansoft Interactive</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? create your account or restart your membership.</h3>
        <p>
          <Link className='btn btn-start' to='/signin'>
            Get Started
          </Link>
        </p>
      </div>
    </>
  )
}

export default Homepage
