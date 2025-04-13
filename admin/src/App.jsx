import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';

const {aToken} = useContext(AdminContext)

const App = () => {
  return aToken? (
    <div>
      <ToastContainer/>
    </div>
  ):(
    <div>
      <Login/>
      <ToastContainer/>
    </div>
  )
}

export default App