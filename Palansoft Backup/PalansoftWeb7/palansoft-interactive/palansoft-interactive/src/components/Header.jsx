import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import HomeBaImg1 from '../assets/bg-net-1.jpg'
import {
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Navbar,
  Container,
  Offcanvas,
} from 'react-bootstrap'
import { useLocalStorage } from '../context/useLocalStorage'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  const navigate = useNavigate()

  function logOut() {
    //localStorage.clear()
    navigate('/signin')
  }
  const [name, setName] = useLocalStorage('userinfo', '')

  return (
    <>
      <img
        className='homepage-main-bg-1'
        src={HomeBaImg1}
        alt='Palansoft Interactive Loading...'
      />

      <Navbar collapseOnSelect expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <img
                src={Logo}
                alt='Loading...'
                style={{ width: '150px', margin: 'auto', display: 'block' }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='navbar-right-con'
          >
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <button className='btn btn-link-white' type='button'>
                {/* {name.data.Name} */}
              </button>
              <Link className='btn btn-danger' to='/signin'>
                Sign In
              </Link>
              <Link className='btn btn-link-white' to='/signup'>
                Sign Up
              </Link>
              <button
                onClick={logOut}
                className='btn btn-link-white'
                type='button'
              >
                Log Out
              </button>
              <NavDropdown title='Profile' id='collasible-nav-dropdown'>
                <Link className='btn btn-link-black' to='/edit-user'>
                  Edit Profile
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

Header.defaultProps = {
  text: 'Palansoft Interactive',
  background: 'assets/logo.png',
  bgColor: 'rgba(255,255,255)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
