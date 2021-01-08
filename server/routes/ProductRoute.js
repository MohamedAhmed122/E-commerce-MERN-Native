import express from 'express'

import {
    getProducts, 
    getProductById, 
    createProduct,
    updateProduct,
    deleteProduct,
    getProductCount,
    getProductFeatured,
    filterProductByCategory
 } from '../controllers/ProductController.js'

 import {protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()



router.route('/').get(filterProductByCategory)
router.route('/').get(getProducts)
router.route('/').post(protect, admin, createProduct)
router.route('/:id').get(getProductById)
router.route('/:id').put(protect, admin, updateProduct)
router.route('/:id').delete(protect, admin, deleteProduct)
router.route('/get/count').get(getProductCount) 
router.route('/get/featured/:count').get(getProductFeatured) 


export default router