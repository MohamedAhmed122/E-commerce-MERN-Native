import express from 'express'

import { 
    registerUser,
    getUserById, 
    getUsers,
    authUser,
 } from '../controllers/UserController.js'

 import { protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router.route('/').get(protect, admin,  getUsers)
router.route('/:id').get(protect, admin, getUserById)
router.route('/login').post(authUser)


export default router