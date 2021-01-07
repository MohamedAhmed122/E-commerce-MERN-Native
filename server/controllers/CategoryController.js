import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'



// @desc   Fetch all Categories 
//@route   Get /api/category
//@Access  Public
export const getCategory = asyncHandler (async (req, res) =>{
    const category = await Category.find({})
    res.json(category)
})


//@desc   get Category By Id 
//@route   Get /api/Category/:id
//@Access  Public
export const getCategoryById = asyncHandler (async (req, res) =>{
    const category = await Category.findById(req.params.id)
    if(category){     
        res.json(category) 
    }else{
        res.status(404)
        throw new Error('category Not Found')
    }
})



//@desc    Create new  Category 
//@route   Post /api/category
//@Access  Private
export const createCategory = asyncHandler (async (req, res) =>{
    let category = await Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    })
    
    const createdCategory = await category.save();
    res.status(201).json(createdCategory)
})


// @desc    Delete Category
// @route   DELETE /api/category/:id
// @access  Private/Admin
export const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
 
    if(category){
       await category.remove()
       res.json({message : "category has Been deleted"})
    }else{
       res.status(404)
       res.json({message : "category Not Found"})
    }
  
})
