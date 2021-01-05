import express from 'express'

import {getCategory, createCategory, deleteCategory } from '../controllers/CategoryController.js'

const router = express.Router()



router.route('/').get(getCategory)
router.route('/').post(createCategory)
router.route('/:id').delete(deleteCategory)
   


export default router