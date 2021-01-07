import express from 'express'

import {
    getCategory,
    createCategory,
    deleteCategory,
    getCategoryById
} from '../controllers/CategoryController.js'

const router = express.Router()



router.route('/').get(getCategory)
router.route('/:id').get(getCategoryById)
router.route('/').post(createCategory)
router.route('/:id').delete(deleteCategory)
   


export default router