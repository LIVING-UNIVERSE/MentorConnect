import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import  About from './pages/About'
import Appointment from './pages/Appointment'
import  Contact  from './pages/Contact'
import  Doctors  from './pages/Doctors'
import  Login  from './pages/Login'
import Myappointment  from './pages/Myappointment'
import Navbar from './components/Navbar'
import  Myprofile  from './pages/Myprofile'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/myProfile' element={<Myprofile/>}/>
        <Route path='/myAppointments' element={<Myappointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App