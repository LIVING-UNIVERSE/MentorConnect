// import jwt from 'jsonwebtoken'

// // user identification middleware
// const authUser = async(req,res,next)=>{
//     try {
//         const {token} = req.headers
//         if(!token){
//             console.log("Unauthorized access")
//             res.json({
//                 success:false,
//                 message:"Unauthorized access!!"
//             })
//         }

//         const decoded_token = jwt.verify(token,process.env.JWT_SECRET)
//         req.userId = decoded_token.userId
//         next()
        
//     } catch (error) {
//         console.log("Error in authLogin",error|| error.message)
//         return res.json({
//             success:false,
//             message:`Error occured in authUser function: ${error}`
//         })
//     }
// }


// export default authUser



import jwt from 'jsonwebtoken';

// user identification middleware
const authUser = async (req, res, next) => {
  try {
    // accept either a custom "token" header or Authorization: Bearer <token>
    let token = req.headers?.token;
    if (!token && req.headers?.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      console.log('Unauthorized access - no token');
      return res.status(401).json({
        success: false,
        message: 'Unauthorized access!!',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // your JWT payload is { userId: ... }
    req.userId = decoded.userId;

    return next();
  } catch (error) {
    console.log('Error in authUser', error?.message || error);
    return res.status(401).json({
      success: false,
      message: `Error occured in authUser function: ${error?.message || error}`,
    });
  }
};

export default authUser;
