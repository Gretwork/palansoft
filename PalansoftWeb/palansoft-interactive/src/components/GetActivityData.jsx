import { useState, useEffect } from 'react'

function getStorageActivity(userinfo, data) {
  //console.log(userinfo.data.Name)
  // getting stored activity
  const savedactivity = localStorage.getItem(userinfo)
  const initial = JSON.parse(savedactivity)
  return initial || data
}

export const GetActivityData = (userinfo, data) => {
  const [activity, setActivity] = useState(() => {
    return getStorageActivity('useractivity', data)
  })

  //   useEffect(() => {
  //     // storing input name
  //     localStorage.setItem('userinfo', JSON.stringify(activity))
  //   }, [userinfo, activity])

  return [activity, setActivity]
}
