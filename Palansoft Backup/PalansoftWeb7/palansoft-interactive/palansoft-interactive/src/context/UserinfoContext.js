import { createContext, useState, useEffect } from 'react'

const UserinfoContext = createContext()

export const UserinfoProvider = ({ children }) => {
  const [Userinfo, setUserinfo] = useState([])

  return (
    <UserinfoContext.Provider
      value={{
        Userinfo,
      }}
    >
      {children}
    </UserinfoContext.Provider>
  )
}

export default UserinfoContext
