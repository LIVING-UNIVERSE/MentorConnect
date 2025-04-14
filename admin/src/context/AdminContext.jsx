import { createContext } from "react";
import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export const AdminContext = createContext()

const AdminContextProvider = (props)=>{

    const [aToken , setaToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [doctors, setDoctors] = useState([])
    const backendURL = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async() =>{
        try {
            const {data} = await axios.post(backendURL+'/api/admin/all-doctors',{},{headers:{aToken}})
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            }
            else{
                return toast.error(data.message)
            }
        } 
        catch (error) {
            console.log('error in getAllDoctors function',error)
            return toast.error(error.message)
        }
    }

    const changeAvailibility = async(doc_id)=>{
        try {
            const {data} = await axios.post(backendURL+'/api/admin/change-availibility',{doc_id},{headers:{aToken}})
            if(data.success){
                getAllDoctors()
                return toast.success(data.message)
            }
            else{
                return toast.error(data.message)
            }
        } 
        catch (error) {
            console.log('error in getAllDoctors function',error)
            return toast.error(error.message)
        }
    }

    const value = {
        aToken,setaToken,
        backendURL,
        doctors,getAllDoctors,
        changeAvailibility
    }

    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}


export default AdminContextProvider