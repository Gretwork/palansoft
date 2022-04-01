import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaUserAlt,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa'

import Axios from 'axios'

function EditUser() {
  const [Role, setRole] = useState('')
  const [Name, setName] = useState('')
  const [CountryCode, setCountryCode] = useState('91')
  const [Mobile, setMobile] = useState('')
  const [Email, setEmail] = useState('')
  const [Address, setAddress] = useState('')
  const [City, setCity] = useState('')
  const [DeviceToken, setDeviceToken] = useState('Deviceweb')
  const [IPAddress, setIPAddress] = useState('')
  const [MobileOS, setMobileOS] = useState('OSweb')
  const [Password, setPassword] = useState('')
  const [loginresult, setLoginresult] = useState('')

  return (
    <>
      <div className='form-main-con-1'>
        <form>
          <h2 className='page-title-1 text-left'>Sign Up {loginresult}</h2>

          {/* <RatingSelect select={setRating} selected={rating} /> */}
          <div className='col-12'>
            <p>Enter your credential to continue</p>
          </div>
          <div className='col-12'>
            <h2 className='inline page-sub-title-1 text-left'>Your Role</h2>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='Role'
                id='Parent'
                value='Parent'
                onChange={(e) => setRole(e.target.value)}
              />
              <label className='form-check-label' htmlFor='Parent'>
                Parent
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='Role'
                id='Teacher'
                value='Teacher'
                onChange={(e) => setRole(e.target.value)}
              />
              <label className='form-check-label' htmlFor='Teacher'>
                Teacher
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='Role'
                id='Student'
                value='Student'
                onChange={(e) => setRole(e.target.value)}
              />
              <label className='form-check-label' htmlFor='Student'>
                Student
              </label>
            </div>
          </div>
          <div className='col-12'>
            <div className='input-group has-validation'>
              <span className='input-group-text' id='Name'>
                <FaUserAlt />
              </span>
              <input
                type='text'
                className='form-control'
                id='Name'
                aria-describedby='Name'
                placeholder='Full Name'
                required
                onChange={(e) => setName(e.target.value)}
              />
              <div className='invalid-feedback'>Please choose a username.</div>
            </div>
          </div>
          <div className='col-12'>
            <div className='input-group has-validation'>
              <span className='input-group-text' id='Mobile'>
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
                <FaEnvelope />
              </span>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                aria-label='Email'
                id='Email'
                aria-describedby='addon-wrapping'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='col-12'>
            <div className='input-group'>
              <span className='input-group-text'>
                <FaMapMarkerAlt />
              </span>
              <textarea
                className='form-control'
                placeholder='Current Address'
                aria-label='Address'
                id='Address'
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='col-12'>
            <div className='input-group'>
              <span className='input-group-text'>
                <FaMapMarkerAlt />
              </span>
              <input
                type='text'
                className='form-control'
                id='City'
                aria-describedby='City'
                placeholder='City'
                required
                onChange={(e) => setCity(e.target.value)}
              />
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
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby='addon-wrapping'
              />
              <span className='input-group-text' id='basic-addon2'>
                <FaEyeSlash />
              </span>
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
                placeholder='Confirm Password'
                aria-label='Conpassword'
                id='Conpassword'
                aria-describedby='addon-wrapping'
              />
            </div>
          </div>

          <div className='col-12'>
            <button
              className='btn btn-primary d-grid gap-2 col-12'
              type='button'
              onClick=''
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='col-12'>
          <div className='divider-2'></div>
          <p className='text-center'>
            Back to <Link to='/signin'>Sign In</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default EditUser
