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
  FaChevronRight,
  FaComment,
  FaShoppingCart,
  FaShoppingBag,
  FaLanguage,
  FaRupeeSign,
  FaRegTrashAlt,
  FaUserTimes,
  FaUserEdit,
} from 'react-icons/fa'
import RatingSelect from '../components/RatingSelect'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { GetUserData } from '../components/GetUserData'
import axios from 'axios'
import demoimg from '../assets/users/1.png'

function UserListing(props) {
  const [activity, setActivity] = useState([])
  const [activitylistresult, setActivitylistresult] = useState(null)
  const [apiStatus, setApiStatus] = useState('')
  // get login user info
  const [userinfo, setUserinfo] = useState(null)
  useEffect(async () => {
    const userdata = await JSON.parse(localStorage.getItem('userinfo'))
    //console.log(userdata)
    setUserinfo(userdata)
  }, [])

  useEffect(() => {
    async function fetchData() {
      const request = await axios({
        method: 'post',
        header: { 'X-Requested-With': 'XMLHttpRequest' },
        url: 'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/listing',
        data: {
          UID: '84c96d6d-1d69-4f0d-af73-420c8c2d209c',
        },
      })
        .then((response) => {
          if (response.data.status) {
            localStorage.setItem('activitylist', JSON.stringify(response.data))
            setActivity(response.data.data)
            console.log(response.data.data.Name)
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

  // Start Delete Users function
  function deleteUser(name) {
    alert('Are You Sure?')
    let deleteuser = `${name}`
    console.log(deleteuser)

    console.log(this)
    axios({
      method: 'post',
      header: { 'X-Requested-With': 'XMLHttpRequest' },
      url: 'http://hereinoman.com:3000/api/v1/palansoftInteractive/user/deleteUser',
      data: {
        UserUID: deleteuser,
      },
    }).then((response) => {
      if (response.data.status) {
        //localStorage.setItem('userinfo', JSON.stringify(response.data.data))
        //setLoginresult(response.data.data.Name)
        //navigate('/')
        window.location.reload(false)
      } else {
      }
    })
  }

  // End Delete Users function
  return (
    <div className='form-main-con-1 container'>
      <div className='col-12'>
        <h1>Add Users</h1>
        {userinfo !==
        (
          <>
            <h1>All Users</h1>
          </>
        )}
        {userinfo && (
          <>
            <h2 className='page-title-1 text-left'>Max 2 Users</h2>
            {/* <button
              //   onClick={loginme}
              className='btn btn-primary d-grid gap-2 col-12'
              type='button'
            >
              View users
            </button> */}
          </>
        )}
        {activity.map((item, index) => (
          <div className='row'>
            <div className='user-info-box'>
              <a title='Edit User' className='icon-edit'>
                <FaUserEdit className='fa' />
              </a>
              <a
                title='Delete User'
                onClick={() => deleteUser(item.UserUID)}
                className='icon-delete text-red'
              >
                <FaUserTimes className='fa text-red' />
              </a>
              <span className='user-image'>
                <img width={100} src={demoimg} />
              </span>
              <span className='user-name'>{item.Name}</span>
              <span className='user-grade'>Grade: {item.Grade}</span>
              <span className='user-language'>Lang: {item.Language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserListing
