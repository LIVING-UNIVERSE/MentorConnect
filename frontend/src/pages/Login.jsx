import React from 'react'
import { useState } from 'react';

const Login = () => {

  const [state,setState]= useState('sign up');
  const [name,setName] = useState();
  const [email,setEmail]= useState();
  const [password,setPassword]= useState()

  const onSubmitHandler =(e)=>{
    e.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[]340px sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state==='sign up'? 'Create Account': 'Login'}</p>
          <p>Please {state==='sign up'? 'sign up' : 'login'} to book appointment</p>
          <div className='w-full'>
            {state==='sign up'? <div className='w-full'>
              <p>Full Name</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text'onChange={(e)=>setName(e.target.value)} placeholder='enter your full name' value={name} required></input>
            </div>:''}
            <div className='w-full'>
              <p>Email</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='enter your email' required></input>
            </div>
            <div className='w-full'>
              <p>Password</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password'onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='enter your password' required></input>
            </div>
          </div>
          <button onClick={()=>onSubmitHandler()} className='bg-primary text-white w-full p-2 mt-1 rounded-md text-base'>{state==='sign up'?'Create account': 'Login'}</button>
          {state==='sign up'?
            <p>Already have an account? <span onClick={()=>setState('login')} className='text-primary underline cursor-pointer'> Login here</span></p>:
            <p>Create an new account? <span onClick={()=>setState('sign up')} className='text-primary underline cursor-pointer'> Click here</span></p>}
        </div>
    </form>
  )
}

export default Login