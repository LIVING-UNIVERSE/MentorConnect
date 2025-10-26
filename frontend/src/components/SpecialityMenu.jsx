// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//     return (
//         <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
//             <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//             <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted Counsellors, schedule your appointment hassle-free.</p>
//             <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
//                 {specialityData.map((item, index) => (
//                     <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                         <img className='sm:w-24 mb-2 ' width={100} src={item.image} alt="" />
//                         <p>{item.speciality}</p>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SpecialityMenu


import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-6 py-20 text-[#262626]'>
            <h1 className='text-4xl font-semibold'>Find by Speciality</h1>
            <p className='sm:w-1/2 text-center text-base text-gray-600'>
                Simply browse through our extensive list of trusted Counsellors, schedule your appointment hassle-free.
            </p>

            {/* ---------- Scrollable Row ---------- */}
            <div
                className='flex gap-5 pt-8 w-full overflow-x-auto scrollbar-hide px-6 sm:justify-start sm:px-0'
            >
                {specialityData.map((item, index) => (
                    <Link
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className='flex flex-col items-center text-sm sm:text-base cursor-pointer flex-shrink-0 hover:-translate-y-3 transition-all duration-500'
                        key={index}
                    >
                        <img
                            className='w-28 h-28 sm:w-32 sm:h-32 mb-3 object-contain'
                            src={item.image}
                            alt={item.speciality}
                        />
                        <p className='font-medium'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
