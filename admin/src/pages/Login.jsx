import React, { useState } from 'react'
import axios from 'axios'
import { AdminContext } from '../context/AdminContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

    const [state,setState] = useState('Admin')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {setaToken,backendURL} = useContext(AdminContext)

    const onSubmitHandler= async(event)=>{
        event.preventDefault()

        try {
            if(state==='Admin'){
                const { data } = await axios.post(backendURL+'/api/admin/login', {email,password,});
                if (data.success) {
                    console.log(data.token);
                    localStorage.setItem('aToken', data.token);
                    setaToken(data.token);
                    toast.success("Login Successful!");
                }
                else{
                    toast.error(data.message);
                }
            }
            else{

            }
        } 
        catch (error) {
            
        }

    }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
            <p className='text-2xl font-semibold m-auto'> <span className='text-[#5f6FFF]'>{state}</span> Login</p>
            <div className='w-full'>
                <p>Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} className='border border-[#DADADA] rounded w-full p-2 mt-1' type='email' required/>
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} className='border border-[#DADADA] rounded w-full p-2 mt-1' type='password' required/>
            </div>
            <button className='bg-[#5f6FFF] text-white w-full py-2 rounded-b-md text-base cursor-pointer'>Login</button>
            {
                state==='Admin'
                ?<p>Doctor Login? <span className='text-[#5f6FFF] underline cursor-pointer' onClick={()=>setState('Doctor')} >Click Here</span></p>
                :<p>Admin Login? <span className='text-[#5f6FFF] underline cursor-pointer'onClick={()=>setState('Admin')} >Click Here</span></p>
            }
        </div>
    </form>
  )
}

export default Login