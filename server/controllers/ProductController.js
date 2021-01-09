import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'
import Product from '../models/productsModel.js'
import multer from 'multer'

// @desc   Fetch all products 
//@route   Get /api/products
//@Access  Public
export const getProducts = asyncHandler (async (req, res) =>{
    const products = await Product.find({}).populate('category')
    res.json(products)
})




//@desc   Fetch a single product by its id
//@route   Get /api/products/:id
//@Access  Public
export const getProductById = asyncHandler (async (req, res) =>{
    const product = await Product.findById(req.params.id).populate('category')
    if(product){     
        res.json(product) 
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})






// @desc    Delete product by Id
// @route   DELETE /api/product §/:id
// @access  Private/Admin
export const deleteProduct= asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
 
    if(product){
       await product.remove()
       res.json({message : "product has Been deleted"})
    }else{
       res.status(404)
       res.json({message : "product Not Found"})
    }
})




// @desc    Update product
// @route   PUT /api/product/:id
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {

    const categoryData = await await Category.findById(req.body.category)
    if (!categoryData) return res.status(400).send("Invalid Category")
    const {
        name,
        description,
        detail,
        image,
        brand,
        price,
        countInStock,
        category,
        rating,
        numReviews,
        isFeatured
     } = req.body

     const product = await Product.findById(req.params.id)
     if(product){
        product.name = name
        product.description = description
        product.detail = detail
        product.image = image
        product.brand = brand
        product.price = price
        product.countInStock = countInStock
        product.category = category
        product.rating = rating  
        product.numReviews = numReviews
        product.isFeatured = isFeatured

        const updatedProduct = await product.save();
  
        res.json(updatedProduct) 

     }else{
         res.status(404)
         throw new Error('product Not Found')
     }
})


// @desc   get the Counts of the products
//@route   Get /api/products/get/count
//@Access  private/Admin
export const getProductCount = asyncHandler (async (req, res) =>{
    const productCount = await Product.countDocuments((count) => count)
    res.json({productCount})
})


//@desc   get the the Featured Products
//@route   Get /api/products/get/featured
//@Access  private/Admin
export const getProductFeatured = asyncHandler (async (req, res) =>{
    
    const count = req.params.count ? req.params.count : 0 
    const featuredProduct = await Product.find({isFeatured: true}).limit(+count)
    res.json(featuredProduct)
})

// @desc   filter products by Category
//@route   Get /api/products
//@Access  Public
export const filterProductByCategory = asyncHandler (async (req, res) =>{
    let filter ={}
    if (req.query.categories){
        filter ={ category : req.query.categories.split(',') }
    }
    const products = await Product.find(filter).populate('category')
    res.json(products)
})


