import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'
import Product from '../models/productsModel.js'

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




// // @desc    Delete Category
// // @route   DELETE /api/category/:id
// // @access  Private/Admin
// export const deleteCategory = asyncHandler(async (req, res) => {
//     const category = await Category.findById(req.params.id)
 
//     if(category){
//        await category.remove()
//        res.json({message : "category has Been deleted"})
//     }else{
//        res.status(404)
//        res.json({message : "category Not Found"})
//     }
  
// })




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
