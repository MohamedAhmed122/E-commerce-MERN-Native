import express from 'express'

import { protect, admin } from '../middleware/authMiddleware.js'
import { 
    createOrder, 
    getOrderById, 
    getOrders,
    updateOrderStatus,
    deleteOrder,
    deleteOrderItem,
    getTotalSale,
    getOrderCount
 } from '../controllers/OrderController.js'

const router = express.Router()


router.route('/:id').get(protect, getOrderById)
router.route('/').get(protect, admin, getOrders)
router.route('/').post(protect, admin, createOrder)
router.route('/:id').delete(protect, admin, deleteOrder)
router.route('/:id').delete(protect, admin, deleteOrderItem)
router.route('/:id').put(protect, admin, updateOrderStatus)
router.route('/totalsales').get(protect, admin, getTotalSale)
router.route('/get/count').get(protect, admin, getOrderCount)

   


export default router