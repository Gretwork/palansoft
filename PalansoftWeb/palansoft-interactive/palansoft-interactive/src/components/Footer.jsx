import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
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
import { FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'
function Footer({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <>
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
      <div className='footer-main-con'>
        <div className='container'>
          <footer className='py-5'>
            <div className='row'>
              <div className='col-2'>
                <h5>Compnay</h5>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-2'>
                    <a href='/' className='nav-link p-0 text-muted'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/about' className='nav-link p-0 text-muted'>
                      About
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/signin' className='nav-link p-0 text-muted'>
                      Signin
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/signup' className='nav-link p-0 text-muted'>
                      SignUp
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/faqs' className='nav-link p-0 text-muted'>
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-2'>
                <h5>Services</h5>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-2'>
                    <a href='/' className='nav-link p-0 text-muted'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/about' className='nav-link p-0 text-muted'>
                      About
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/signin' className='nav-link p-0 text-muted'>
                      Signin
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/signup' className='nav-link p-0 text-muted'>
                      SignUp
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/faqs' className='nav-link p-0 text-muted'>
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-2'>
                <h5>FAQs</h5>
                <ul className='nav flex-column'>
                  <li className='nav-item mb-2'>
                    <a href='/' className='nav-link p-0 text-muted'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/about' className='nav-link p-0 text-muted'>
                      About
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/signin' className='nav-link p-0 text-muted'>
                      Signin
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/signup' className='nav-link p-0 text-muted'>
                      SignUp
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a href='/faqs' className='nav-link p-0 text-muted'>
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-4 offset-1'>
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className='d-flex w-100 gap-2'>
                    <label htmlFor='newsletter1' className='visually-hidden'>
                      Email address
                    </label>
                    <input
                      id='newsletter1'
                      type='text'
                      className='form-control'
                      placeholder='Email address'
                    />
                    <button className='btn btn-danger' type='button'>
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className='d-flex justify-content-between py-4 my-4 border-top'>
              <p>© 2022 Palansoft Interactive, Inc. All rights reserved.</p>
              <ul className='list-unstyled d-flex'>
                <li className='ms-3'>
                  <a className='link-dark' href='#'>
                    <FaTwitter />
                  </a>
                </li>
                <li className='ms-3'>
                  <a className='link-dark' href='#'>
                    <FaFacebookF />
                  </a>
                </li>
                <li className='ms-3'>
                  <a className='link-dark' href='#'>
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Footer
