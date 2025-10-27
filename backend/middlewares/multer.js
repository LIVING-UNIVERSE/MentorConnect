// import express from 'express'
// import multer from 'multer'

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './public/temp')  
//     },
//     filename:function(req,file,callback){
//         callback(null,file.originalname)
//     }
// })


// const upload = multer({storage})

// export default upload


import multer from 'multer'

// In serverless, prefer memory storage + upload_stream to Cloudinary
const upload = multer({ storage: multer.memoryStorage() })

export default upload