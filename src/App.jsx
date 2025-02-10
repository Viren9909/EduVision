import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LadingPage from './screens/LandingPage/LadingPage';
import { Routes, Route } from 'react-router-dom'
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import DashBoard from './screens/DashBoard/DashBoard';
import Profile from './screens/Profile/Profile';

const App = () => {

  return (
    <div className='montserrat'>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
