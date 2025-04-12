


//API for adding doctor
const addDoctor = async() =>{
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address,date,available,slots_booked}= req.body
        const imageFile = req.file
        if

    } catch (error) {
        throw ("Error in addDoctor Controller",error)
        console.log("Error in addDoctor Controller",error)
    }
}

export {addDoctor}