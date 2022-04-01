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

import React, { useContext } from 'react'
import { UserinfoContext } from '../context/UserinfoContext'
import { useUserContext } from '../context/userContext'

function Header({ text, bgColor, textColor }) {
  const { user, logOut } = useUserContext()
  //console.log(user);

  const navigate = useNavigate()

  //let username = JSON.parse(localStorage.getItem('user-info'))
  function logOutMe() {
    localStorage.clear()

    navigate('/signin')
  }
  return (
    <>
      <img
        className='homepage-main-bg-1'
        src={HomeBaImg1}
        alt='Palansoft Interactive Loading...'
      />
      <Navbar className='navbar-con-main navbar-dark' expand={false}>
        <div className='container'>
          <Navbar.Brand href='/'>
            <img
              src={Logo}
              alt='Loading...'
              style={{ width: '150px', margin: 'auto', display: 'block' }}
            />
          </Navbar.Brand>
          <div
            className='d-grid gap-2 d-md-flex justify-content-md-end'
            style={{ marginRight: '20px', marginLeft: 'auto' }}
          >
            <span style={{ margin: '0px 0px 0px', color: 'white' }}>
              Welcome,{user.name}
            </span>
            {!user.isGuestUser && (
              <button type='button' class='btn btn-danger' onClick={logOutMe}>
                Logout
              </button>
            )}
          </div>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                <img
                  src={Logo}
                  alt='Loading...'
                  style={{ width: '150px', margin: 'auto', display: 'block' }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Link to='/'>Home </Link>
                <Link to='/signin' onClick={logOut}>
                  Log Out
                </Link>
                <Link to='/signin'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/about'>About</Link>
                {/* <NavDropdown title='Dropdown' id='offcanvasNavbarDropdown'>
                  <NavDropdown.Item href='#action3'>Dropdown</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>Link 1</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>Link 2</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              {/* <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
      {/*<header style={headerStyles}>
         <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: '#ff6a95' }}>
          <h2>
            <img
              src={Logo}
              alt='Loading...'
              style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
          </h2>
        </Link>
      </div> 
      </header>*/}
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
