
// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongoDB.js'
// import connectCloudinary from './config/cloudinary.js'
// import adminRouter from './routes/adminRoute.js'
// import doctorRouter from './routes/doctorRoute.js'
// import userRouter from './routes/userRoute.js'

// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())

// // connect DB and Cloudinary (cached inside functions)
// await connectDB()
// await connectCloudinary()

// app.use('/api/admin', adminRouter)
// app.use('/api/doctor', doctorRouter)
// app.use('/api/user', userRouter)

// app.get('/', (req, res) => res.send('API is working just fine'))

// export default app



// C:\DocLook\backend\app.js
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: ["https://mentor-connect-6jqg.vercel.app", "https://mentor-connect-oaep.vercel.app","http://localhost:5173","http://localhost:5174"],
  credentials: true
}));


app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res) => res.send('API is working just fine'))

export default app
