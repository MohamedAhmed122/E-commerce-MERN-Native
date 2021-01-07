import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'
import Product from '../models/productsModel.js'

// @desc   Fetch all products 
//@route   Get /api/products
//@Access  Public
export const getProducts = asyncHandler (async (req, res) =>{
    const products = await Product.find({})
    res.json(products)
})




//@desc   Fetch a single product by its id
//@route   Get /api/products/:id
//@Access  Public
export const getProductById = asyncHandler (async (req, res) =>{
    const product = await Product.findById(req.params.id)
    if(product){     
        res.json(product) 
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})


//@desc    Create new  Product 
//@route   Post /api/product
//@Access  Private
export const createProduct = asyncHandler (async (req, res) =>{

    const category = await await Category.findById(req.body.category)
    if (!category) return res.status(400).send("Invalid Category")

    let product = await Product({
        name: req.body.name,
        description: req.body.description,
        detail: req.body.detail,
        image: req.body.image,
        // images: req.body.images,
        brand: req.body.brand,
        price: req.body.price,
        countInStock: req.body.countInStock,
        category: req.body.category,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    })
    
    const createdProduct = await product.save();
    res.status(201).json(createdProduct)
})
