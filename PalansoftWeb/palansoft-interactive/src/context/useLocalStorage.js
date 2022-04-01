import { useState, useEffect } from 'react'

function getStorageValue(userinfo, data) {
  //console.log(userinfo.data.Name)
  // getting stored value
  const saved = localStorage.getItem(userinfo)
  const initial = JSON.parse(saved)
  return initial || data
}

export const useLocalStorage = (userinfo, data) => {
  const [value, setValue] = useState(() => {
    return getStorageValue('userinfo', data)
  })

  //   useEffect(() => {
  //     // storing input name
  //     localStorage.setItem('userinfo', JSON.stringify(value))
  //   }, [userinfo, value])

  return [value, setValue]
}
