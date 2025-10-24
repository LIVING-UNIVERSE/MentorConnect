import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'

// API to register user
const registerUser = async(req,res)=>{
    try {

        const {name,email,password} = req.body
        const data= req.body
        for (const key in data) {
            if (!data[key]) {
                return res.json({
                    success: false,
                    message: `${key} is missing`
                });
            }
        }
        // validate email
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Email is not valid"
            })
        }
        // checking strong password
        if(password.length < 8){
            return res.json({
                success:false,
                message:"Password in weak"
            })
        }
        // hasing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData ={
            name,
            email,
            password:hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        return res.json({
            success:true,
            token
        })

    } 
    catch (error) {
        console.log("Error in authLogin",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}


//API to login user
const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({
                success:false,
                message:'User does not exist'
            })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            return res.json({
                success:true,
                token,
            })
        }
        else{
            return res.json({
                success:true,
                message:"Invalid Credentials"
            })
        }
        
    } 
    catch (error) {
        console.log("Error in authLogin",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}


//API to get User Profile
const getProfile = async(req,res) =>{
    try {
        const {user_id} = req.body
        const user= await userModel.findById(user_id).select('-password')
        if(user){
            return res.json({
                success:true,
                user
            })
        }
        else{
            return res.json({
                success:false,
                message:"User data is not fetched"
            })
        }
    } 
    catch (error) {
        console.log("Error in authLogin",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}


// API to update user profile
const updateProfile = async(req,res)=>{
    try {
        const {userId,name,phone,gender,address,dob} = req.body
        const imageFile = req.file

        const data= req.body
        for(const key in data){
            if(!data[key]){
                return res.json({
                    success:false,
                    message:`${key} is missing!!`
                })
            }
        }

        const user = await userModel.findByIdAndUpdate(userId,{name,phone,gender,address:JSON.parse(address),dob})

        if(imageFile){
            const uploadImage = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL = uploadImage.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }

        res.json({
            success:true,
            message:"Profile updated successfully!!"
        })
    } 
    catch (error) {
        console.log("Error in authLogin",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
    }
}


export {registerUser,loginUser,getProfile,updateProfile}