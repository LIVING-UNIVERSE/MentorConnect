import doctorModel from "../models/doctorModel.js"

// API for changing availibilty of doctor
const changeAvailibility = async(req,res)=>{
    try {
        const {doc_id} = req.body
        const docData = await doctorModel.findById(doc_id);
        const result = await doctorModel.findByIdAndUpdate(doc_id,{available:!docData.available})
        if(result){
            return res.json({
                success:true,
                message:"Availibility is changed successfully"
            })
        }
        else{
            return res.json({
                success:false,
                message:`There is an error occured: ${error}`
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

export {changeAvailibility}