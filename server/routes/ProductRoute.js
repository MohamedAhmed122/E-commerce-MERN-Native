import express from 'express'

import {getProducts, getProductById, createProduct } from '../controllers/ProductController.js'

const router = express.Router()



router.route('/').get(getProducts)
router.route('/').post(createProduct)
router.route('/:id').get(getProductById)
   


export default router