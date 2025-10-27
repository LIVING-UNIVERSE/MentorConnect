// import serverless from 'serverless-http'
// import app from '../app'

// export const handler = serverless(app)
// export default handler



import app from '../app.js'
import connectDB from '../config/mongoDB.js'
import connectCloudinary from '../config/cloudinary.js'

let initialized = false
let initError = null

async function initOnce() {
  if (initialized) return
  if (initError) throw initError

  try {
    await connectDB()
    await connectCloudinary()
    initialized = true
    console.log('✅ Initialization complete (DB + Cloudinary)')
  } catch (err) {
    initError = err
    console.error('Initialization failed:', err)
    throw err
  }
}

// Vercel expects a handler(req, res)
export default async function handler(req, res) {
  try {
    await initOnce()
  } catch (err) {

    console.error('Server initialization error:', err)
    return res.status(500).json({
      success: false,
      message: 'Server initialization failed. Check logs for details.'
    })
  }


  return app(req, res)
}
