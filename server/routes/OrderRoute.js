import express from 'express'

// import { protect, admin } from '../middleware/authMiddleware.js'
import { createOrder } from '../controllers/OrderController.js'

const router = express.Router()


router.route('/').get(createOrder)

   


export default router