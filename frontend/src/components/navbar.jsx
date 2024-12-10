import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'


function Navbar() {

  const navigate = useNavigate();
  const [showMenu,setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm
            py-4 mb-5 border-b border-b-gray-400'>
      <img  onClick={()=>navigate('/')} className='w-44 cursor-pointer'  src={assets.logo} alt=''/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 rounded-sm bg-primary w-4/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 rounded-sm bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/about'>                                       
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 rounded-sm bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 rounded-sm bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        </ul>

        <div>
          {token?<div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-9 rounded-full' src={assets.profile_pic}/>
                    <img className='w-2.5' src={assets.dropdown_icon}/>
                      <div className='absolute z-10 text-gray-600 top-0 right-0 pt-14 text-base font-medium hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-2 p-4'>
                          <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/myProfile')}>My Profile</p>
                          <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/myAppointment')}>My Appointment</p>
                          <p className='hover:text-black cursor-pointer' onClick={()=>setToken(false)}>Logout</p>
                        </div>
                      </div>
                </div> 
          : <button onClick={()=>navigate('/login')} className='bg-primary outine-none rounded-full hidden md:block px-8 py-3 text-white'>Create account</button>}
        </div>
    </div>
  )
}

export default Navbar