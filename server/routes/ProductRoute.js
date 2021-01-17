import express from 'express'
import Product from '../models/productsModel.js'
import Category from '../models/categoryModel.js'
import multer from 'multer'

import {
    getProducts, 
    getProductById, 
    updateProduct,
    deleteProduct,
    getProductCount,
    getProductFeatured,
    filterProductByCategory,
    CreateNewProduct
 } from '../controllers/ProductController.js'

 import {protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()




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




router.route('/').get(filterProductByCategory)
router.route('/').get(getProducts)
router.route('/').post(uploadOptions.single('image'),CreateNewProduct)
router.route('/:id').get(getProductById)
router.route('/:id').put(protect, admin, updateProduct)
router.route('/:id').delete(protect, admin, deleteProduct)
router.route('/get/count').get(getProductCount) 
router.route('/get/featured/:count').get(getProductFeatured) 




export default router