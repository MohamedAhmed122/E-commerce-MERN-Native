import express from 'express'

import {
    getProducts, 
    getProductById, 
    createProduct,
    updateProduct
 } from '../controllers/ProductController.js'

const router = express.Router()



router.route('/').get(getProducts)
router.route('/').post(createProduct)
router.route('/:id').get(getProductById)
router.route('/:id').put(updateProduct)
   


export default router