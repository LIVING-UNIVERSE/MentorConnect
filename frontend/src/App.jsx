import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Apointment } from './pages/Apointment'
import { Contact } from './pages/Contact'
import { Doctor } from './pages/Doctor'
import { Login } from './pages/Login'
import { Myappointment } from './pages/Myappointment'
import { Myprofile } from './pages/Myprofile'
import {navbar} from "./components/navbar"

export const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/my-appointments' element={<Myappointment/>}/>
          <Route path='/my-profile' element={<Myprofile/>}/>
          <Route path='/doctor' element={<Doctor/>}/>
          <Route path='/doctor/:speciality' element={<Doctor/>}/>
          <Route path='/apointment/:docID' element={<Apointment/>}/>
      </Routes>
    </div>
  )
}

export default App