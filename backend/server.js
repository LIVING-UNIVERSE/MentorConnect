import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'
import connectCloudinary from './config/cloudinary.js';


// app congig
const app=express();
const PORT = process.env.port || 4000

// middlewares
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()

// api endpoint
app.get('/',(req,res)=>{
    res.send('API is working just fine')
})

app.listen(PORT,()=>{
    console.log(`This server is running on ${PORT}`)
})