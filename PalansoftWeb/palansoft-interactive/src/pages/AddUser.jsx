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
import axios from 'axios'
function AddUser() {
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
  const [apiStatus, setApiStatus] = useState('')

  const navigate = useNavigate()
  const [gradelist, setGradelist] = useState([])
  const [languageList, setLanguageList] = useState([])
  const [userinfo, setUserinfo] = useState(null)

  useEffect(async () => {
    const userdata = await JSON.parse(localStorage.getItem('userinfo'))
    //console.log(userdata)
    setUserinfo(userdata)
    setUID(setUserinfo.UID)
  }, [])

  //Get Grade Data
  useEffect(() => {
    async function fetchData() {
      const request = await axios({
        method: 'get',
        header: { 'X-Requested-With': 'XMLHttpRequest' },
        url: 'http://hereinoman.com:3000/api/v1/palansoftInteractive/master/grade',
      })
        .then((response) => {
          if (response.data.status) {
            localStorage.setItem('AllGradelist', JSON.stringify(response.data))
            setGradelist(response.data.data)
            console.log(response.data.data)
          } else {
          }
        })
        .catch(function (error) {
          console.log(
            // 'There has been a problem with your fetch operation: ',
            console.log('this is a', error.message),
            setApiStatus('Network error, Please try again after some time')
            // console.log(error.message)
          )
        })
    }
    fetchData()
  }, [])
  // End Get Grade Data

  //Get Subject list Data
  useEffect(() => {
    async function fetchData() {
      const request = await axios({
        method: 'get',
        header: { 'X-Requested-With': 'XMLHttpRequest' },
        url: 'http://hereinoman.com:3000/api/v1/palansoftInteractive/master/Language',
      })
        .then((response) => {
          if (response.data.status) {
            localStorage.setItem(
              'AlllanguageList',
              JSON.stringify(response.data)
            )
            setLanguageList(response.data.data)
            console.log(response.data.data)
          } else {
          }
        })
        .catch(function (error) {
          console.log(
            // 'There has been a problem with your fetch operation: ',
            console.log('this is a', error.message),
            setApiStatus('Network error, Please try again after some time')
            // console.log(error.message)
          )
        })
    }
    fetchData()
  }, [])
  // End Get Subject list Data
  const register = (data) => {
    let objGrade = null,
      objLanguage = null
    try {
      objGrade = gradelist.find((obj) => obj.Code == Grade)
      objLanguage = languageList.find((obj) => obj.Code == Language)
    } catch (error) {
      console.log(error)
    }
    var sendData = {
      UID: userinfo.UID,
      Name: Name,
      Grade: objGrade.Grade,
      GradeCode: Grade,
      Language: objLanguage.Language,
      LanguageCode: Language,
      DOB: DOB,
      PIN: Mpin,
      //AllowActivityCurrentGrade: true,
      //AllowActivityLowerGrade: false,
      //AllowAll: false,
      Gender: Gender,
      AllowAccess: AllowAccess,
    }
    //console.log(sendData)
    axios
      .post(
        'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/addUser',
        sendData
      )
      .then((response) => {
        if (response.data.message) {
          localStorage.setItem(
            'userroleadded',
            JSON.stringify(response.data.data)
          )
          setLoginresult(response.data.message)
          loginresult(response.data.message)
          console.log(response.data)
          navigate('/UserListing')
          window.location.reload(false)
        } else {
        }
      })
      .catch(function (error) {
        console.log(
          // 'There has been a problem with your fetch operation: ',
          console.log('this is a', error.message),
          setApiStatus('Network error, Please try again after some time')
          // console.log(error.message)
        )
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
                {gradelist.map((item, index) => (
                  <option key={index} value={item.Code}>
                    {item.Grade}
                  </option>
                ))}
                {/* <option value='One'>One</option>
                <option value='Two'>Two</option>
                <option value='Three'>Three</option> */}
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
                <option value='Language' disabled>
                  Select Language
                </option>

                {languageList.map((item, index) => (
                  <option key={index} value={item.Code}>
                    {item.Language}
                  </option>
                ))}
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
                value='1'
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
                value='2'
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
                value='3'
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
          <p className='text-white  text-center'>{loginresult}</p>
          <p className='text-center text-white'>
            <Link
              className='btn btn-primary text-white text-center'
              to='/UserListing'
            >
              View Users
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default AddUser
