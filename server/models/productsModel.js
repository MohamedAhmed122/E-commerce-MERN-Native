import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    detail:{
        type: String,
       default: ''
    },
    image:{
        type: String,
        required: true
    },
    images:[{type: String}], 
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
    },
    isFeatured:{
        type: Boolean,
        default: false
    },
    dateCreated:{
        type: Date,
        default: Date.now,

    }
    
})

const Product = mongoose.model('Product', productSchema);

export default Product;