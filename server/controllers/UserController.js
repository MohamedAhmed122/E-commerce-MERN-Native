import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateWebToken } from '../utility/GenerateJsonWeToken.js';


//@desc    Register User 
//@route   Post /api/user
//@Access  Public
// @desc   register new user 
//@route   GET /api/users
//@Access  Public
export const registerUser = asyncHandler (async (req, res) =>{
    const {
        name,
        email,
        password,
        phone,
        apartment,
        street,
        zipCode,
        city,
        country,
        isAdmin
    } = req.body;
 
    const userExist = await User.findOne({email})
 
    if(userExist) {
       res.status(400)
       throw new Error("User's already exist")
    }
 
    const user = await User.create({
       name,
       email,
       password,
       phone,
       apartment,
       street,
       zipCode,
       city,
       country,
       isAdmin
    })
    if (user){
       res.status(201).json({
          id : user._id,
          email: user.email,
          password: user.password,
          name: user.name,
          isAdmin: user.isAdmin,
          phone: user.phone,
          apartment: user.apartment,
          street: user.street,
          zipCode: user.zipCode,
          isAdmin: user.isAdmin,
          city: user.city,
          country: user.country,
          token: generateWebToken(user._id),
         
       })
    }else{
       res.status(400)
       throw new Error('Incorrect Data')
    }
 })