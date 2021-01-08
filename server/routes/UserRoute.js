import express from 'express'

import { 
    registerUser,
    getUserById, 
    getUsers,
    authUser,
 } from '../controllers/UserController.js'

const router = express.Router()

router.route('/').post(registerUser)
router.route('/').get(getUsers)
router.route('/:id').get(getUserById)
router.route('/login').post(authUser)


export default router