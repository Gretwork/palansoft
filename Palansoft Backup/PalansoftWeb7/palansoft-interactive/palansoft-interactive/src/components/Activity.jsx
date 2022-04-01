import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ActivityRaw({ title, fetchURL, isLargeRow, UID, UserUID, page }) {
  const [activity, setActivity] = useState([])
  const [activitylistresult, setActivitylistresult] = useState('')
  useEffect(() => {
    async function fetchData() {
      //   const request = await axios.get(fetchURL)
      //   setActivity(request.data.results)
      //   return request

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

          setActivity(response.data.data[0])
          console.log(response.data.data[0].Activity)
          //navigate('/')
        } else {
          // setUserdata = response.data.data.Name
          // setLoginresult(response.data.data.Name)
          // console.log(response.data.data.Name)
        }
      })
    }
    fetchData()
  }, [])

  return (
    <div className='row'>
      <h1>{activity.Activity}Hello</h1>
      <div className='movie-row-inn-con'>
        <img
          className={`movie-img ${isLargeRow && 'movie-img-large'}`}
          key={activity.id}
          alt={activity.SubscriptionType}
          title={activity.name}
          src={activity.ThumbnailBig}
        />
        <div class='card'>
          <img
            class='card-img-top'
            src='{activity.ThumbnailBig}'
            alt='Card image cap'
          />
          <div class='card-body'>
            <h5 class='card-title'>{activity.Activity}</h5>
            <p class='card-text'>{activity.Activity}</p>
            <a href='#' class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        {/* {activity.map(() => (
          <img
            className={`movie-img ${isLargeRow && 'movie-img-large'}`}
            key={activity.id}
            alt={activity.SubscriptionType}
            title={activity.name}
            src={activity.ThumbnailBig}
          />
        ))} */}
      </div>
    </div>
  )
}

export default ActivityRaw
