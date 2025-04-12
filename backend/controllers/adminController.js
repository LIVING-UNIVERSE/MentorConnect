import validator from 'validator'
import bcrypt from "bcrypt"
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'

//API for adding doctor
const addDoctor = async(req,res) =>{
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address}= req.body
        const imageFile = req.file
        
        console.log("start")
        //checking for all data to add doctor
        const data= {name,email,password,speciality,degree,experience,about,fees,address};
        for(const key in data){
            if(typeof data[key]==='string'){
                if(!data[key]){
                    return res.status(400).json({ success: false, message: `${key} is a required field` });
                }
            }
            else{
                if(data[key]===undefined || data[key]===null){
                    return res.status(400).json({ success: false, message: `${key} is a required field` });
                }
            }
        }
        console.log("1")
        if(!imageFile){
            return res.status(400).json({success:false,message:"image is not uploaded"});
        }

        //validate email
        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message:"email is not valid"});
        }
        console.log("2")
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        console.log("3")
        //upload image on cloudinary
        const uploadImageInstance = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = uploadImageInstance.secure_url
        console.log("4")
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
        console.log("5")
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        console.log("6")
        return res.status(201).json({
            success:true,
            message:"The new doctor data is added in the dataBase"
        })

    } catch (error) {
        console.log("Error in addDoctor Controller",error|| error.message)
        return res.status(500).json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}

export {addDoctor}