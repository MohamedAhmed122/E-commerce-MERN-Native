import express from 'express'

import {
    getProducts, 
    getProductById, 
    createProduct,
    updateProduct,
    deleteProduct
 } from '../controllers/ProductController.js'

const router = express.Router()



router.route('/').get(getProducts)
router.route('/').post(createProduct)
router.route('/:id').get(getProductById)
router.route('/:id').put(updateProduct)
router.route('/:id').delete(deleteProduct)
   


export default router