import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import Homepage from './pages/Home'
import Faqs from './components/Faqs'
import EditUser from './pages/EditUser'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/edit-user' element={<EditUser />} />
            <Route path='/reset-password' element={<ResetPassword />} />
          </Routes>
        </div>
        <Faqs />
        <Footer />
      </Router>
    </FeedbackProvider>
  )
}

export default App
