
// import app from './app.js'
// const PORT = process.env.PORT || 4000
// app.listen(PORT, () => console.log(`Server listening on ${PORT}`))


import app from "./app.js";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongoDB.js";

const PORT = process.env.PORT || 4000

async function start() {
  try {
    await connectDB()
    await connectCloudinary()
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
  } catch (err) {
    console.error('Failed to start server locally:', err)
    process.exit(1)
  }
}

start()
