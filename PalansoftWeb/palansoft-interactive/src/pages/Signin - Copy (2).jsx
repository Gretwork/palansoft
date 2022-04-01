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
import { useForm } from 'react-hook-form'
import Axios from 'axios'

function Signin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [loginresult, setLoginresult] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('response')) {
      navigate('/')
    }
  }, [])

  // New Login Function From Pedro
  const loginme = () => {
    Axios.post(
      'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/signin',
      {
        Mobile: mobile,
        Password: password,
      }
    ).then((response) => {
      if (response.data.message) {
        setLoginresult(response.data.message)
      } else {
        setLoginresult(response.data.data.Name)
        //navigate('/')
        //setLoginresult(response)
      }
    })
  }

  // NOTE: pass selected to RatingSelect so we don't need local duplicate state
  return (
    <div className='form-main-con-1'>
      <form onSubmit={handleSubmit(loginme)}>
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
              id='mobile'
              aria-describedby='mobile'
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
              aria-label='password'
              id='password'
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
          <button className='btn btn-primary d-grid gap-2 col-12' type='button'>
            Sign In...
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
