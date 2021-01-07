import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'


//@desc    Register User 
//@route   Post /api/user
//@Access  Public
export const registerUser = asyncHandler (async (req, res) =>{

    let user = await User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        zipCode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country,
        apartment: req.body.apartment,
    })
    
    const createdUser = await user.save();
    res.status(201).json(createdUser)
})



