import React, { useState, useContext, useEffect } from 'react'
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
import FeedbackContext from '../context/FeedbackContext'
import { useForm } from 'react-hook-form'
import { useUserContext } from '../context/userContext'

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const { user, logIn } = useUserContext()
  const onSubmit = (data) => {
    logIn(data.username)
    console.log('Form data', data)
  }
  console.log(errors)

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/')
    }
  }, [])
  async function sigin(data) {
    logIn(data.username)
    console.warn('data', mobile, password)
    let item = { mobile, password }
    let result = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    })
    result = await result.json()
    localStorage.setItem('user-info', JSON.stringify(result))
    alert('Welcome!')
    navigate('/')
  }

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false)

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown)
  }

  // NOTE: pass selected to RatingSelect so we don't need local duplicate state
  return (
    <div className='form-main-con-1'>
      <form onSubmit={handleSubmit(sigin)}>
        <h2 className='page-title-1 text-left'>Welcome Back, {user.name}</h2>

        {/* <RatingSelect select={setRating} selected={rating} /> */}
        <div className='col-12'>
          <p>Enter your credential to continue</p>
        </div>

        <div className='col-12'>
          <div className='input-group flex-nowrap'>
            <span className='input-group-text'>
              <FaMobileAlt />
            </span>
            <input
              class='form-control'
              type='text'
              name='username'
              placeholder='Username'
              {...register('username', { required: true })}
            />
          </div>
          <div class='invalid-feedback'>
            {errors.username?.type === 'required' && 'Username is required'}
          </div>
        </div>

        <div className='col-12'>
          <div className='input-group flex-nowrap'>
            <span className='input-group-text'>
              <FaLock />
            </span>
            <input
              class='form-control'
              type={passwordShown ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              {...register('password', { required: true })}
            />
            <span
              className='input-group-text'
              id='basic-addon2'
              onClick={togglePassword}
            >
              <FaEyeSlash />
            </span>
          </div>
          <p>
            {errors.password?.type === 'required' && 'password is required'}
          </p>
        </div>
        <div className='col-12'>
          <div className='divider-2'></div>
          <p className='text-right'>
            <Link to='/reset-password'>Forgot password?</Link>
          </p>
        </div>
        <div className='col-12'>
          <button className='btn btn-primary d-grid gap-2 col-12' type='submit'>
            Sign In
          </button>
        </div>
        <div className='col-12'>
          <div className='divider-2'></div>
          <p className='text-center'>
            Don't Have an Account? <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </div>
  )
}

export default Signin
