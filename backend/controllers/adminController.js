import validator from 'validator'
import bcrypt from "bcrypt"
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'

//API for adding doctor
const addDoctor = async(req,res) =>{
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address}= req.body
        const imageFile = req.file
        
        
        //checking for all data to add doctor
        const data= {name,email,password,speciality,degree,experience,about,fees,address};
        for(const key in data){
            if(typeof data[key]==='string'){
                if(!data[key]){
                    return res.json({ success: false, message: `${key} is a required field` });
                }
            }
            else{
                if(data[key]===undefined || data[key]===null){
                    return res.json({ success: false, message: `${key} is a required field` });
                }
            }
        }
        
        if(!imageFile){
            return res.json({success:false,message:"image is not uploaded"});
        }
        
        //validate email
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"email is not valid"});
        }
        
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        
        //upload image on cloudinary
        const uploadImageInstance = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = uploadImageInstance.secure_url
        
        const doctorData = {
            name,
            email,
            password:hashedPassword,
            image:imageUrl,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }
        
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        
        return res.json({
            success:true,
            message:"New doctor is added"
        })

    } catch (error) {
        console.log("Error in addDoctor Controller",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}


//API for admin Login
const loginAdmin = async(req,res)=>{
    try {
        const {email,password}= req.body
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            
            const token =jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({
                success:false,
                message:"Invalid credentials"
            })
        }

    } catch (error) {
        console.log("Error in loginAdmin",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}



// API for get all doctors data
const allDoctors = async(req,res) =>{
    try {
        const doctors = await doctorModel.find({}).select('-password')
        if(doctors){
            return res.json({
                success:true,
                doctors
            })
        }
        else{
            return res.json({
                success:false,
                message:"All doctors data is not fetched"
            })
        }
        
    } catch (error) {
        console.log("Error in allDoctors function",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}

export {addDoctor,loginAdmin,allDoctors}