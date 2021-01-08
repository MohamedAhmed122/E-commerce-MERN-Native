import express from 'express'

import {
    getCategory,
    createCategory,
    deleteCategory,
    getCategoryById,
    updateCategory
} from '../controllers/CategoryController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/').get(getCategory)
router.route('/:id').get(getCategoryById)
router.route('/').post(protect, admin, createCategory)
router.route('/:id').delete(protect, admin, deleteCategory)
router.route('/:id').put(protect, admin, updateCategory)
   


export default router