import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import { Route, Routes } from 'react-router-dom';
import DoctorList from './pages/Admin/DoctorList';
import AddDoctor from './pages/Admin/AddDoctor';
import Appointments from './pages/Admin/AllAppointments';
import Dashboard from './pages/Admin/Dashboard';


const App = () => {

  const {aToken} = useContext(AdminContext)

  return aToken ?(
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorList/>}/>
          <Route path='/all-appointments' element={<Appointments/>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>

    </div>
  ):(
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App