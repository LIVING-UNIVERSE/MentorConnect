import jwt from 'jsonwebtoken'

// user identification middleware
const authUser = async(req,res,next)=>{
    try {
        const {token} = req.headers
        if(!token){
            console.log("Unauthorized access")
            res.json({
                success:false,
                message:"Unauthorized access!!"
            })
        }

        const decoded_token = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = decoded_token.id
        next()
        
    } catch (error) {
        console.log("Error in authLogin",error|| error.message)
        return res.json({
            success:false,
            message:`Error occured in authUser function: ${error}`
        })
    }
}


export default authUser