import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import Homepage from './pages/Home'
import UserListing from './pages/UserListing'
import EditUser from './pages/EditUser'
import AddUser from './pages/AddUser'
import Faqs from './components/Faqs'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/edit-user' element={<EditUser />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/userListing' element={<UserListing />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/faqs' element={<Faqs />} />
        </Routes>
        <Footer />
      </Router>
    </FeedbackProvider>
  )
}

export default App
