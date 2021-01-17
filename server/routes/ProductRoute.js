import express from 'express'
import uploadOptions from '../config/ConfigUploadImage.js'

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
  
  router.route('/').get(filterProductByCategory)
  router.route('/').get(getProducts)
  router.route('/').post(uploadOptions.single('image'),CreateNewProduct)
  router.route('/:id').get(getProductById)
  router.route('/:id').put(protect, admin, updateProduct)
  router.route('/:id').delete(protect, admin, deleteProduct)
  router.route('/get/count').get(getProductCount) 
  router.route('/get/featured/:count').get(getProductFeatured) 
  
  
  
  
  export default router