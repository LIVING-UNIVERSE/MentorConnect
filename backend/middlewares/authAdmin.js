import jwt from 'jsonwebtoken'

const authAdmin = async(req,res,next)=>{
   try {
        const {atoken} = req.headers
        if(!atoken){
            return res.json({
                success:false,
                message:"Unauthorized access!! Login again"
            })
        }

        const decoded_token= jwt.verify(atoken,process.env.JWT_SECRET)
        if(decoded_token!== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({
                success:false,
                message:"Unauthorized access !"
            })
        }

        next()

   } 
   catch (error) {
    console.log("Error in authLogin",error|| error.message)
        return res.json({
            success:false,
            message:`There is an error occured: ${error}`
        })
   }
}

export default authAdmin