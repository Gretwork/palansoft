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
  FaRegCalendarAlt,
} from 'react-icons/fa'
import demoimg from '../assets/users/1.png'
import Axios from 'axios'

function EditUser() {
  const [Gender, setGender] = useState('')
  const [Name, setName] = useState('')
  const [CountryCode, setCountryCode] = useState('91')
  const [Mobile, setMobile] = useState('')
  const [DOB, setDOB] = useState('')
  const [Address, setAddress] = useState('')
  const [City, setCity] = useState('')
  const [DeviceToken, setDeviceToken] = useState('Deviceweb')
  const [IPAddress, setIPAddress] = useState('')
  const [MobileOS, setMobileOS] = useState('OSweb')
  const [Mpin, setMpin] = useState('')
  const [Grade, setGrade] = useState('')
  const [Language, setLanguage] = useState('')
  const [AllowAccess, setAllowAccess] = useState('')
  const [loginresult, setLoginresult] = useState('')
  const [UID, setUID] = useState('')

  const navigate = useNavigate(null)

  const [userinfo, setUserinfo] = useState(null)
  useEffect(async () => {
    const userdata = await JSON.parse(localStorage.getItem('userinfo'))
    //console.log(userdata)
    setUserinfo(userdata)
    setUID(setUserinfo.UID)
  }, [])

  // Display Rendom User Profile Image
  // const cache = {}
  // function importAll(r) {
  //   r.keys().forEach((key) => (cache[key] = r(key)))
  // }
  // // Note from the docs -> Warning: The arguments passed to require.context must be literals!
  // importAll(require.context('../assets/users/', false, /\.(png|jpe?g|svg)$/))
  // const images = Object.entries(cache).map((module) => module[1].default)
  // const newIndex = Math.floor(Math.random() * images.length)
  //console.log('images are ', images[newIndex])

  // const adduser = () => {
  //   console.log('helloooo')
  //   axios({
  //     method: 'post',
  //     header: { 'X-Requested-With': 'XMLHttpRequest' },
  //     url: 'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/addUser',
  //     data: {
  //       Name: Name,
  //       Gender: Gender,
  //       DOB: DOB,
  //       Grade: Grade,
  //       Language: Language,
  //       PIN: Mpin,
  //       UID: '84c96d6d-1d69-4f0d-af73-420c8c2d209c',
  //       GradeCode: 'GRD-002',
  //       LanguageCode: 'LNG-001',
  //       AllowActivityCurrentGrade: AllowAccess,
  //       AllowActivityLowerGrade: AllowAccess,
  //       AllowAll: AllowAccess,
  //       AllowAccess: '1',
  //     },
  //   }).then((response) => {
  //     if (response.data.status) {
  //       console.log(response.data.status)
  //       localStorage.setItem(
  //         'userroleadded',
  //         JSON.stringify(response.data.data)
  //       )
  //       setLoginresult(response.data.data)
  //       //navigate('/')
  //       //window.location.reload(false)
  //     } else {
  //       // setUserdata = response.data.data.Name
  //       // setLoginresult(response.data.data.Name)
  //       // console.log(response.data.data.Name)
  //     }
  //   })
  // }
  const register = (data) => {
    Axios.post(
      'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/addUser',
      {
        UID: userinfo.UID,
        Name: Name,
        Grade: Grade,
        GradeCode: 'GRD-002',
        Language: Language,
        LanguageCode: 'LNG-001',
        DOB: DOB,
        PIN: Mpin,
        AllowActivityCurrentGrade: true,
        AllowActivityLowerGrade: false,
        AllowAll: false,
        Gender: Gender,
        AllowAccess: 1,
      }
    ).then((response) => {
      if (response.data.message) {
        localStorage.setItem(
          'userroleadded',
          JSON.stringify(response.data.data)
        )
        setLoginresult(response.data.message)
        loginresult(response.data.message)
        console.log(response.data)
      } else {
      }
    })
  }

  return (
    <>
      <div className='form-main-con-1'>
        <form>
          <h2 className='page-title-1 text-left'>{loginresult}</h2>
          <div className='col-12'>
            <p>Enter your credential to continue</p>
          </div>
          <div className='col-12'>
            <div className='input-group flex-nowrap'>
              <img width={100} src={demoimg} />
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
              <span className='input-group-text' id='Name'>
                <FaRegCalendarAlt />
              </span>
              <input
                type='date'
                className='form-control'
                id='DOB'
                aria-describedby='DOB'
                placeholder='Date of birth'
                required
                onChange={(e) => setDOB(e.target.value)}
              />
              <div className='invalid-feedback'>
                Please choose a Date of birth.
              </div>
            </div>
          </div>
          <div className='col-12'>
            <h2 className='inline page-sub-title-1 text-left'>Gender</h2>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='Role'
                id='Male'
                value='Male'
                onChange={(e) => setGender(e.target.value)}
              />
              <label className='form-check-label' htmlFor='Male'>
                Male
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='Role'
                id='Female'
                value='Female'
                onChange={(e) => setGender(e.target.value)}
              />
              <label className='form-check-label' htmlFor='Female'>
                Female
              </label>
            </div>
          </div>

          <div className='col-12'>
            <div className='input-group has-validation'>
              <select
                defaultValue={'Grade'}
                className='form-select'
                aria-label='Select Grade'
                onChange={(e) => setGrade(e.target.value)}
              >
                <option value='Grade' disabled>
                  Select Grade
                </option>
                <option value='One'>One</option>
                <option value='Two'>Two</option>
                <option value='Three'>Three</option>
              </select>
            </div>
          </div>
          <div className='col-12'>
            <div className='input-group has-validation'>
              <select
                defaultValue={'Language'}
                className='form-select'
                aria-label='Select language'
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value='Grade' disabled>
                  Select Language
                </option>
                <option value='English'>English</option>
                <option value='Hindi'>Hindi</option>
                <option value='Gujarati'>Gujarati</option>
              </select>
            </div>
          </div>
          <div className='col-12'>
            <h2 className='inline page-sub-title-1 text-left'>Allow Access</h2>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='AllowAccess'
                id='AllowCurrentGrade'
                value='AllowCurrentGrade'
                onChange={(e) => setAllowAccess(e.target.value)}
              />
              <label className='form-check-label' htmlFor='AllowCurrentGrade'>
                Allow Activity Current Grade
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='AllowAccess'
                id='AllowLowerGrade'
                value='AllowLowerGrade'
                onChange={(e) => setAllowAccess(e.target.value)}
              />
              <label className='form-check-label' htmlFor='AllowLowerGrade'>
                Allow Activity Lower Grade
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='AllowAccess'
                id='AllowAll'
                value='AllowAll'
                onChange={(e) => setAllowAccess(e.target.value)}
              />
              <label className='form-check-label' htmlFor='Allow All'>
                Allow All
              </label>
            </div>
          </div>
          <div className='col-12'>
            <div className='input-group flex-nowrap'>
              <input
                type='password'
                className='form-control'
                placeholder='Mpin'
                aria-label='Mpin'
                id='Mpin'
                min='1'
                max='4'
                onChange={(e) => setMpin(e.target.value)}
                aria-describedby='addon-wrapping'
              />
            </div>
          </div>
          <div className='col-12'>
            <button
              onClick={register}
              className='btn btn-primary d-grid gap-2 col-12'
              type='button'
            >
              Add User
            </button>
          </div>
        </form>
        <div className='col-12'>
          <div className='divider-2'></div>
          {/* <p className='text-center'>
            Back to <Link to='/signin'>Sign In</Link>
          </p> */}
        </div>
      </div>
    </>
  )
}

export default EditUser
