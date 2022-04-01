import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  FaUserAlt,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa'
import RatingSelect from '../components/RatingSelect'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { GetUserData } from '../components/GetUserData'
import axios from 'axios'

//Axios.defaults.withCredentials = true

function Signin() {
  const [Mobile, setMobile] = useState('')
  const [Password, setPassword] = useState('')
  const [loginresult, setLoginresult] = useState('')
  //const [userdata, setUserdata] = useState('')

  const navigate = useNavigate()

  const [loginStatus, setLoginStatus] = useState('')

  //const userdata = JSON.stringify(localStorage.getItem('userinfo'))
  //Axios.defaults.withCredentials = true

  // New Login Function From Pedro
  const loginme = () => {
    axios({
      method: 'post',
      header: { 'X-Requested-With': 'XMLHttpRequest' },
      url: 'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/signin',
      data: {
        Mobile: Mobile,
        Password: Password,
      },
    }).then((response) => {
      if (response.data.status) {
        localStorage.setItem('userinfo', JSON.stringify(response.data.data))
        setLoginresult(response.data.data.Name)
        navigate('/')
        window.location.reload(false)
      } else {
        // setUserdata = response.data.data.Name
        // setLoginresult(response.data.data.Name)
        // console.log(response.data.data.Name)
      }
    })
  }

  // NOTE: pass selected to RatingSelect so we don't need local duplicate state
  return (
    <div className='form-main-con-1'>
      <form>
        <h2 className='page-title-1 text-left'>Welcome Back - {loginresult}</h2>
        <div className='col-12'>
          <p>Enter your credential to continue</p>
        </div>
        <div className='col-12'>
          <div className='input-group has-validation'>
            <span className='input-group-text' id='mobile'>
              <FaMobileAlt />
            </span>
            <input
              type='text'
              className='form-control'
              id='Mobile'
              aria-describedby='Mobile'
              placeholder='Mobile No.'
              required
              onChange={(e) => setMobile(e.target.value)}
            />
            <div className='invalid-feedback'>Please choose a username.</div>
          </div>
        </div>

        <div className='col-12'>
          <div className='input-group flex-nowrap'>
            <span className='input-group-text' id='addon-wrapping'>
              <FaLock />
            </span>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              aria-label='Password'
              id='Password'
              aria-describedby='addon-wrapping'
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className='input-group-text' id='basic-addon2'>
              <FaEyeSlash />
            </span>
          </div>
        </div>
        <div className='col-12'>
          <div className='divider-2'></div>
          <p className='text-right'>
            <Link to='/reset-password'>Forgot password?</Link>
          </p>
        </div>
        <div className='col-12'>
          <button
            onClick={loginme}
            className='btn btn-primary d-grid gap-2 col-12'
            type='button'
          >
            Sign In
          </button>
        </div>
        <div className='col-12'>
          <div className='divider-2'></div>
          <p className='text-center'>
            Don't Have an Account? <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signin
