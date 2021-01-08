import express from 'express'

import { protect, admin } from '../middleware/authMiddleware.js'
import { createOrder, getOrderById, getOrders } from '../controllers/OrderController.js'

const router = express.Router()


router.route('/').get(protect, admin, getOrders)
router.route('/').post(protect, admin, createOrder)
router.route('/:id').get(protect, getOrderById)

   


export default router