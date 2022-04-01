import { useState, useContext, useEffect } from 'react'
import {
  FaUserAlt,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
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
    <form onSubmit={handleSubmit}>
      <h2 className='page-title-1 text-left'>Signup</h2>

      {/* <RatingSelect select={setRating} selected={rating} /> */}
      <div class='col-12'>
        <h4 className='inline page-sub-title-1 text-left'>Your Role</h4>
        <p>Enter your credential to continue</p>
      </div>
      <div class='col-12'>
        <div class='form-check form-check-inline'>
          <input
            class='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            id='Parent'
            value='Parent'
          />
          <label class='form-check-label' for='Parent'>
            Parent
          </label>
        </div>
        <div class='form-check form-check-inline'>
          <input
            class='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            id='Teacher'
            value='Teacher'
          />
          <label class='form-check-label' for='Teacher'>
            Teacher
          </label>
        </div>
        <div class='form-check form-check-inline'>
          <input
            class='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            id='Student'
            value='Student'
          />
          <label class='form-check-label' for='Student'>
            Student
          </label>
        </div>
      </div>
      <div class='col-12'>
        <div class='input-group has-validation'>
          <span class='input-group-text' id='fullname'>
            <FaUserAlt />
          </span>
          <input
            type='text'
            class='form-control'
            id='fullname'
            aria-describedby='fullname'
            placeholder='Full Name'
            required
          />
          <div class='invalid-feedback'>Please choose a username.</div>
        </div>
      </div>
      <div class='col-12'>
        <div class='input-group has-validation'>
          <span class='input-group-text' id='mobile'>
            <FaMobileAlt />
          </span>
          <input
            type='text'
            class='form-control'
            id='mobile'
            aria-describedby='mobile'
            placeholder='Mobile No.'
            required
          />
          <div class='invalid-feedback'>Please choose a username.</div>
        </div>
      </div>
      <div class='col-12'>
        <div class='input-group'>
          <span class='input-group-text'>
            <FaMapMarkerAlt />
          </span>
          <textarea
            class='form-control'
            placeholder='Current Address'
            aria-label='Address'
            id='address'
          ></textarea>
        </div>
      </div>
      <div class='col-12'>
        <div class='input-group flex-nowrap'>
          <span class='input-group-text' id='addon-wrapping'>
            <FaEnvelope />
          </span>
          <input
            type='email'
            class='form-control'
            placeholder='Email'
            aria-label='Email'
            id='email'
            aria-describedby='addon-wrapping'
          />
        </div>
      </div>
      <div class='col-12'>
        <div class='input-group flex-nowrap'>
          <span class='input-group-text' id='addon-wrapping'>
            <FaLock />
          </span>
          <input
            type={passwordShown ? 'text' : 'password'}
            class='form-control'
            placeholder='Password'
            aria-label='password'
            id='password'
            aria-describedby='addon-wrapping'
          />
          <span
            class='input-group-text'
            id='basic-addon2'
            onClick={togglePassword}
          >
            <FaEyeSlash />
          </span>
        </div>
      </div>
      <div class='col-12'>
        <div class='input-group flex-nowrap'>
          <span class='input-group-text' id='addon-wrapping'>
            <FaLock />
          </span>
          <input
            type='password'
            class='form-control'
            placeholder='Confirm Password'
            aria-label='conpassword'
            id='conpassword'
            aria-describedby='addon-wrapping'
          />
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
      <div class='col-12'>
        <button class='btn btn-primary d-grid gap-2 col-12' type='button'>
          Sign Up
        </button>
      </div>
      {message && <div className='message'>{message}</div>}
    </form>
  )
}

export default FeedbackForm
