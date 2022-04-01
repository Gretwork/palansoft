import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import Homepage from './pages/Home'
import customjs from './assets/scripts/custom.js'
import {UserContextProvider} from './context/userContext'

function App() {
  const [username, setUsername] = useState('Check Name')
  return (
     
      <UserContextProvider>
      <Router>
        <Header />
        <div className='container'>
        
          <Routes>
            {/* <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                   <FeedbackList />
                </>
              }
            ></Route> */}
            
            <Route path='/' element={<Homepage />} />
            <Route path='/users' element={<FeedbackList />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            
          </Routes>
          
          {/* <AboutIconLink /> */}
        </div>

        {/* <Footer /> */}
      </Router>
      </UserContextProvider>
    
  )
}

export default App
