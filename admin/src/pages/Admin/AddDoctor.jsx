import React,{useContext, useState} from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'


const AddDoctor = () => {

  const [image,setImage] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [experience,setExperience] = useState('1 Year')
  const [fees,setFees] = useState('')
  const [speciality,setSpeciality] = useState('General physician')
  const [degree,setDegree] = useState('')
  const [address1,setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [about,setAbout] = useState('')

  const {backendURL,aToken} = useContext(AdminContext)

  const onSubmitHandler = async(event)=>{
    event.preventDefault()
    try {
      if(!image){
        return toast.error('Image not Selected')
      }
      const formData = new FormData()

      formData.append('image',image)
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('experience',experience)
      formData.append('fees',Number(fees))
      formData.append('speciality',speciality)
      formData.append('degree',degree)
      formData.append('about',about)
      formData.append('address',JSON.stringify({line11:address1,line2:address2}))

      const {data} = await axios.post(backendURL+'/api/admin/add-doctor',formData,{headers:{aToken}})

      if(data.success){
        setImage(false)
        setName('')
        setEmail('')
        setPassword('')
        setAbout('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setFees('')
        return toast.success(data.message)
      }
      else{
        return toast.error(data.message)
      }

    } 
    catch (error) {
      console.log(error.message)
      return toast.error(error.message)
    }
  }

  return (
      <form onSubmit={onSubmitHandler} className='m-5 w-full'>
        <p className='mb-3 text-lg font-medium'> Add Doctor</p>
        <div className='bg-white px-8 py-8 drop-shadow-lg rounded-xl w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
          <div className='flex items-center gap-4 mb-8 text-gray-500'>
            <label htmlFor='doc-img'>
              <img className='w-16 bg-gray-100 rounded-full  cursor-pointer' src={image ? URL.createObjectURL(image):assets.upload_area} alt=""/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' hidden id='doc-img'/>
            <p>Upload doctor <br/> picture </p>
          </div>

          <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
            <div className='w-full lg:flex-1 flex flex-col gap-4'>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Doctor Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)} className='border rounded px-3 py-2' type='text' required placeholder='Name'/>
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Doctor Email</p>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border rounded px-3 py-2' type='email' required placeholder='Your eamil'/>
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Doctor Password</p>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border rounded px-3 py-2' type='password' required placeholder='Password'/>
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Experience</p>
                <select value={experience} onChange={(e)=>setExperience(e.target.value)} className='border rounded px-3 py-2' >
                  <option value='1 Year'>1 Years</option>
                  <option value='2 Year'>2 Years</option>
                  <option value='3 Year'>3 Years</option>
                  <option value='4 Year'>4 Years</option>
                  <option value='5 Year'>5 Years</option>
                  <option value='6 Year'>6 Years</option>
                  <option value='7 Year'>7 Years</option>
                  <option value='8 Year'>8 Years</option>
                  <option value='9 Year'>9 Years</option>
                  <option value='10 Year'>10 Years</option>
                </select>
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Fees</p>
                <input value={fees} onChange={(e)=>setFees(e.target.value)} className='border rounded px-3 py-2' type='number' required placeholder='Your fees'/>
              </div>

            </div>
            <div className='w-full lg:flex-1 flex flex-col gap-4'>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Speciality</p>
                <select value={speciality} onChange={(e)=>setSpeciality(e.target.value)} className='border rounded px-3 py-2'>
                  <option value='General physician'>General physician</option>
                  <option value='Gynecologist'>Gynecologist</option>
                  <option value='Dermatologist'>Dermatologist</option>
                  <option value='Pediatricians'>Pediatricians </option>
                  <option value='Neurologist'>Neurologist </option>
                  <option value='Gastroenterologist'>Gastroenterologist </option>
                </select>
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Education</p>
                <input value={degree} onChange={(e)=>setDegree(e.target.value)} className='border rounded px-3 py-2' type='text' required placeholder='Education'/>
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Address</p>
                <input value={address1} onChange={(e)=>setAddress1(e.target.value)} className='border rounded px-3 py-2' type='text' placeholder='Address1' required/>
                <input value={address2} onChange={(e)=>setAddress2(e.target.value)} className='border rounded px-3 py-2' type='text' placeholder='Address2' required/>
              </div>

            </div>
          </div>

          <div >
                <p className='mt-4 mb-2'>About Doctor</p>
                <textarea value={about} onChange={(e)=>setAbout(e.target.value)} className='w-full px-4 pt-2 border rounded' rows={5} placeholder='write about yourself'/>
          </div>

          <button type='submit' className='bg-[#5f6FFF] px-10 py-3 mt-4 text-white rounded-full cursor-pointer'>Add doctor</button>
        </div>
      </form>
  )
}

export default AddDoctor