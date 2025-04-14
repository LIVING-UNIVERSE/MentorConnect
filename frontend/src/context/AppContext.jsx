import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext= createContext()


const AppContextProvider = (props)=>{

    const [doctors,setDoctors] = useState([])
    const backendURL = import.meta.env.VITE_BACKEND_URL

    const getDoctorsData = async()=>{
        try {
            const {data} = await axios.get(backendURL+'/api/doctor/doctor-list',{})
            if(data.success){
                setDoctors(data.doctors)
            }
            else{
                return toast.error(data.message)
            }
        } 
        catch (error) {
            console.log('error in getDoctorData function',error)
            return toast.error(error.message)
        }
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    const value={
        doctors,backendURL
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

