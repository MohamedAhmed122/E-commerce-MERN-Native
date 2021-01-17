import multer from 'multer'
 
 const FILE_TYPE ={
    'image/png' : 'png',
    'image/jpeg' : 'jpeg',
    'image/jpg' : 'jpg'
   }
   
   const storage = multer.diskStorage({
     destination: function (req, file, cb) {
       const isValidate = FILE_TYPE[file.mimetype]
       let uploadError = new Error('Invalid Image Type')
       if(isValidate){
         uploadError =null
       }
       cb(uploadError, 'public/uploads')
     },
     filename: function (req, file, cb) {
       
       const fileName = file.originalname.split(' ').join('-');
       const extension = FILE_TYPE[file.mimetype]
       cb(null, `${fileName}-${Date.now()}.${extension}`)
     }
   })
   
 const uploadOptions = multer({ storage: storage })

 export default uploadOptions