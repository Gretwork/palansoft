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
import FeedbackContext from '../context/FeedbackContext'

function Signin() {
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/')
    }
  }, [])
  async function sigin() {
    console.warn('data', mobile, password)
    let item = { mobile, password }
    let result = await fetch(
      'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(item),
      }
    )
    result = await result.json()
    localStorage.setItem('user-info', JSON.stringify(result))
    navigate('/')
  }

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  // NOTE: This should be checking input value not state as state won't be the updated value until the next render of the component

  // prettier-ignore
  const handleTextChange = ({ target: { value } }) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
      
  // prettier-ignore
    } else if (value.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      // NOTE: reset to default state after submission
      setBtnDisabled(true) // 👈  add this line to reset disabled
      setRating(10) //👈 add this line to set rating back to 10
      setText('')
    }
  }

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
      <form onSubmit={handleSubmit}>
        <h2 className='page-title-1 text-left'>Welcome Back</h2>

        {/* <RatingSelect select={setRating} selected={rating} /> */}
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
              type={passwordShown ? 'text' : 'password'}
              className='form-control'
              placeholder='Password'
              aria-label='password'
              id='password'
              aria-describedby='addon-wrapping'
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className='input-group-text'
              id='basic-addon2'
              onClick={togglePassword}
            >
              <FaEyeSlash />
            </span>
          </div>
        </div>

        {/* <div className='input-group'>
        <input
          onChange={handleTextChange}
          type='text'
          placeholder='Write a review'
          value={text}
        />

        <Button type='submit' className='' isDisabled={btnDisabled}>
          Send
        </Button>
      </div> */}
        <div className='col-12'>
          <div className='divider-2'></div>
          <p className='text-right'>
            <Link to='/reset-password'>Forgot password?</Link>
          </p>
        </div>
        <div className='col-12'>
          <button
            onClick={sigin}
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
        {message && <div className='message'>{message}</div>}
      </form>
    </div>
  )
}

export default Signin
