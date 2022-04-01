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
} from 'react-icons/fa'
import RatingSelect from '../components/RatingSelect'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { GetUserData } from '../components/GetUserData'
import axios from 'axios'

//Axios.defaults.withCredentials = true

function MovieRaw() {
  const [activity, setActivity] = useState([])
  const [activitylistresult, setActivitylistresult] = useState('')
  useEffect(() => {
    async function fetchData() {
      const request = await axios({
        method: 'post',
        header: { 'X-Requested-With': 'XMLHttpRequest' },
        url: 'http://hereinoman.com:3000/api/v1/palansoftInteractive/activity/activityListing',
        data: {
          UID: 'e20cecbe-4f26-4fb4-b8a9-1813c00c0f20',
          UserUID: '33a524ea-68a4-4a8f-99c1-0bb9e80c5507',
          page: 1,
        },
      }).then((response) => {
        if (response.data.status) {
          localStorage.setItem('activitylist', JSON.stringify(response.data))
          setActivity(response.data.data)
          //console.log(response.data.data)
        } else {
        }
      })
    }
    fetchData()
  }, [])

  return (
    <>
      <h1 className='page-title-1 text-left'>User Activity</h1>
      <div className='user-active-out-con'>
        {activity.map((item, index) => (
          <div className='card act-box-main-con'>
            <span className='con-data act-img-con'>
              <span
                className={`con-data act-price ${item.Price > 0 && 'paid'}`}
              >
                <FaRupeeSign className='fa icon-small' />
                {item.Price}
              </span>
              <img
                className='card-img-top act-img'
                src={item.ThumbnailBig}
                alt={item.Activity}
              />
            </span>
            <div className='card-body act-info-con'>
              <span className='con-data act-category text-blue'>
                {item.Category}
                <FaChevronRight className='fa' />
                {item.Subject}
              </span>
              <span className='card-title con-data act-name'>
                {item.Activity}
              </span>
              <span className='con-data act-chapter'>{item.Chapter}</span>
              <span className='con-data act-grade text-text-gray-1 '>
                Grade : {item.Grade}
                <span className='con-data act-lang'>
                  <FaLanguage className='fa icon-big' />
                  {item.Language}
                </span>
              </span>

              <span className='con-data act-rat-icon-con act-clicks'>
                <FaEye className='fa icon-big' />
                <span className='val-con'>{item.Clicks}</span> Views
              </span>
              <span className='con-data act-rat-icon-con act-reviews'>
                <FaComment className='fa icon-big' />
                <span className='val-con'>{item.Review}</span> Review
              </span>
              <span className='con-data act-rat-icon-con act-purchase-count'>
                <FaShoppingCart className='fa icon-big' />
                <span className='val-con'>{item.Downloads}</span> Purchased
              </span>

              {/* <span className='con-data act-subsc-type'>
              {activity.SubscriptionType}
            </span> 
            <span className='con-data act-sub-id'>id: {activity.id}</span>
            <span className='con-data act-sub-code'>Code: {activity.Code}</span>

            {/* <h5 className='card-title con-data act-title'></h5> 

            <span className='con-data act-ratings'>
              Ratings: {activity.Ratings}
            </span>
            <span className='con-data act-views'>
              Activity: {activity.Activity}
            </span>

            <span className='con-data act-purchase-status'>
              Status: {activity.Status}
            </span>
            <p className='con-data card-text'>Info: {activity.Activity}</p>
            */}
              <span
                className={`con-data act-buy-btn-con ${
                  item.SubscriptionType === 'Paid' && 'paid'
                }`}
              >
                <Link to='/' className='btn btn-danger text-white'>
                  Lunch
                </Link>
                <Link to='/' className='btn btn-warning text-white'>
                  Buy
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MovieRaw
