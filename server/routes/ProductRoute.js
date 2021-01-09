import express from 'express'
import Product from '../models/productsModel.js'
import Category from '../models/categoryModel.js'
import multer from 'multer'

import {
    getProducts, 
    getProductById, 
    updateProduct,
    deleteProduct,
    getProductCount,
    getProductFeatured,
    filterProductByCategory
 } from '../controllers/ProductController.js'

 import {protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()



router.route('/').get(filterProductByCategory)
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/:id').put(protect, admin, updateProduct)
router.route('/:id').delete(protect, admin, deleteProduct)
router.route('/get/count').get(getProductCount) 
router.route('/get/featured/:count').get(getProductFeatured) 



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        
      const fileName = file.originalname.split(' ').join('-');
    
      cb(null, `${fileName}-${Date.now()}`)
    }
  })
  
const uploadOptions = multer({ storage: storage })

router.post(`/`, uploadOptions.single('image'), async (req, res) =>{
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')


    const fileName = req.file.filename
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: `${basePath}${fileName}`,// "http://localhost:3000/public/upload/image-2323232"
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    })

    product = await product.save();

    if(!product) 
    return res.status(500).send('The product cannot be created')

    res.send(product);
})



export default router