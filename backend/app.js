
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



// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import adminRouter from './routes/adminRoute.js'
// import doctorRouter from './routes/doctorRoute.js'
// import userRouter from './routes/userRoute.js'

// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors({
//   origin: ["https://mentor-connect-6jqg.vercel.app", "https://mentor-connect-oaep.vercel.app"],
//   credentials: true
// }));


// app.use('/api/admin', adminRouter)
// app.use('/api/doctor', doctorRouter)
// app.use('/api/user', userRouter)

// app.get('/', (req, res) => res.send('API is working just fine'))

// export default app


import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const whitelist = [
  "https://mentor-connect-6jqg.vercel.app",
  "https://mentor-connect-oaep.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like curl, postman, server-to-server)
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS: Origin not allowed: " + origin));
    }
  },
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // explicitly handle preflight

// debug helper (remove in production)
app.use((req, res, next) => {
  console.log('Incoming origin:', req.headers.origin);
  next();
});

app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res) => res.send('API is working just fine'))

export default app

