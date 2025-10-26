// import jwt from 'jsonwebtoken'

// // doctor authentication middleware
// const authDoctor = async (req, res, next) => {
//     const { dtoken } = req.headers
//     if (!dtoken) {
//         return res.json({ success: false, message: 'Not Authorized Login Again' })
//     }
//     try {
//         const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
//         req.body.docId = token_decode.docId
//         next()
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

// export default authDoctor;



import jwt from 'jsonwebtoken'

const authDoctor = (req, res, next) => {
  const { dtoken } = req.headers
  if (!dtoken) {
    return res.json({ success: false, message: 'Not Authorized Login Again' })
  }
  try {
    const { docId } = jwt.verify(dtoken, process.env.JWT_SECRET)
    req.docId = docId
    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authDoctor
