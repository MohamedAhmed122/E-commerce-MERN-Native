import express from 'express'

import { protect, admin } from '../middleware/authMiddleware.js'
import { 
    createOrder, 
    getOrderById, 
    getOrders,
    updateOrderStatus,
    deleteOrder,
    deleteOrderItem
 } from '../controllers/OrderController.js'

const router = express.Router()


router.route('/:id').get(protect, getOrderById)
router.route('/').get(protect, admin, getOrders)
router.route('/').post(protect, admin, createOrder)
router.route('/:id').delete(protect, admin, deleteOrder)
router.route('/:id').delete(protect, admin, deleteOrderItem)
router.route('/:id').put(protect, admin, updateOrderStatus)

   


export default router