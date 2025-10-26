import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the career counsellors.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Software Engineer' ? navigate('/doctors') : navigate('/doctors/Software Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-4 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Software Engineer' ? 'bg-red-100 text-black ' : ''}`}>Software Engineer</p>
          <p onClick={() => speciality === 'Film Director' ? navigate('/doctors') : navigate('/doctors/Film Director')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Film Director' ? 'bg-red-100 text-black ' : ''}`}>Film Director</p>
          <p onClick={() => speciality === 'Hotel Manager' ? navigate('/doctors') : navigate('/doctors/Hotel Manager')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Hotel Manager' ? 'bg-red-100 text-black ' : ''}`}>Hotel Manager</p>
          <p onClick={() => speciality === 'Architect' ? navigate('/doctors') : navigate('/doctors/Architect')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Architect' ? 'bg-red-100 text-black ' : ''}`}>Architect</p>
          <p onClick={() => speciality === 'Professional Athlete' ? navigate('/doctors') : navigate('/doctors/Professional Athlete')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Professional Athlete' ? 'bg-red-100 text-black ' : ''}`}>Professional Athlete</p>
          <p onClick={() => speciality === 'Marketing Specialist' ? navigate('/doctors') : navigate('/doctors/Marketing Specialist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Marketing Specialist' ? 'bg-red-100 text-black ' : ''}`}>Marketing Specialist</p>
          <p onClick={() => speciality === 'Graphic Designer' ? navigate('/doctors') : navigate('/doctors/Graphic Designer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Graphic Designer' ? 'bg-red-100 text-black ' : ''}`}>Graphic Designer</p>
          <p onClick={() => speciality === 'Cinematographer' ? navigate('/doctors') : navigate('/doctors/Cinematographer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Cinematographer' ? 'bg-red-100 text-black ' : ''}`}>Cinematographer</p>
          <p onClick={() => speciality === 'Game Developer' ? navigate('/doctors') : navigate('/doctors/Game Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Game Developer' ? 'bg-red-100 text-black ' : ''}`}>Game Developer</p>
          <p onClick={() => speciality === 'Aerospace Engineer' ? navigate('/doctors') : navigate('/doctors/Aerospace Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Aerospace Engineer' ? 'bg-red-100 text-black ' : ''}`}>Aerospace Engineer</p>
          <p onClick={() => speciality === 'Fashion Designer' ? navigate('/doctors') : navigate('/doctors/Fashion Designer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Fashion Designer' ? 'bg-red-100 text-black ' : ''}`}>Fashion Designer</p>
          <p onClick={() => speciality === 'Artist' ? navigate('/doctors') : navigate('/doctors/Artist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Artist' ? 'bg-red-100 text-black ' : ''}`}>Artist</p>
          <p onClick={() => speciality === 'Doctor' ? navigate('/doctors') : navigate('/doctors/Doctor')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Doctor' ? 'bg-red-100 text-black ' : ''}`}>Doctor</p>
         
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-red-100' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors