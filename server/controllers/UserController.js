import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateWebToken } from '../utility/GenerateJsonWeToken.js';




// @desc   Auth user & get Token
//@route   POST /api/users/login
//@Access  Public
export const authUser = asyncHandler (async (req, res) =>{
   const {email, password} = req.body;

   const user = await User.findOne({email})

   if (user && (await user.matchPassword(password))){
      res.json({
         _id : user._id,
         email: user.email,
         name: user.name,
         isAdmin: user.isAdmin,
         token: generateWebToken(user._id)

      })
   }else{
      res.status(401);
      throw new Error('Invalid Email or/and Password')
   }
})


//@desc    Register User 
//@route   Post /api/user
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


// @desc   Fetch all the users 
//@route   Get /api/users
//@Access  Private/Admin
export const getUsers = asyncHandler (async (req, res) =>{
   const user = await User.find({}).select('-password')
   res.json(user)
})




//@desc   Fetch a single user by its id
//@route   Get /api/user/:id
//@Access  Private/Admin
export const getUserById = asyncHandler (async (req, res) =>{
   const user = await User.findById(req.params.id).select('-password')
   if(user){     
       res.json(user) 
   }else{
       res.status(404)
       throw new Error('user Not Found')
   }
})
