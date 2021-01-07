import express from 'express'

import {
    getCategory,
    createCategory,
    deleteCategory,
    getCategoryById,
    updateCategory
} from '../controllers/CategoryController.js'

const router = express.Router()



router.route('/').get(getCategory)
router.route('/:id').get(getCategoryById)
router.route('/').post(createCategory)
router.route('/:id').delete(deleteCategory)
router.route('/:id').put(updateCategory)
   


export default router