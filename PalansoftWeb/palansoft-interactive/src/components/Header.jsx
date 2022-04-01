import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

function Header() {
  const navigate = useNavigate()
  const [userinfo, setUserinfo] = useState(null)
  useEffect(async () => {
    const userdata = await JSON.parse(localStorage.getItem('userinfo'))
    //console.log(userdata)
    setUserinfo(userdata)
  }, [])

  function logOut() {
    localStorage.clear()
    window.location.reload(false)
    navigate('/signin')
  }

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
              {userinfo ? (
                <>
                  <button className='btn btn-link-white' type='button'>
                    {userinfo && <>Welcome back, {userinfo.Name}</>}
                  </button>
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
                </>
              ) : (
                <>
                  <Link className='btn btn-danger' to='/signin'>
                    Sign In
                  </Link>
                  <Link className='btn btn-link-white' to='/signup'>
                    Sign Up
                  </Link>
                </>
              )}
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
