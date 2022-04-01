import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About Palansoft Interactive</h1>
        <p>This is a Palansoft Interactive Website Page</p>
        <p>Read all about the Palansoft Interactive right here...</p>

        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
