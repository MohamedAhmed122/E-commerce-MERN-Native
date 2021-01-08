import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'
import OrderItem from '../models/orderItemModel.js'

//@desc    Create new  Order 
//@route   Post /api/orders
//@Access  Private
export const createOrder = asyncHandler (async (req, res) =>{

    const newOrderItem =Promise.all( req.body.orderItems.map(async orderItem=>{
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })
        newOrderItem = await newOrderItem.save()
        return newOrderItem._id
    }))
    const orderItemsResolved = await newOrderItem
    let order = await Order({
        orderItems: orderItemsResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        country: req.body.country,
        zipCode: req.body.zipCode,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        user: req.body.user,
        
    })
    
    const createdOrder = await order.save();
    res.status(201).json(createdOrder)
})


// @desc   Fetch all Orders 
//@route   Get /api/orders
//@Access  Private/Admin
export const getOrders = asyncHandler (async (req, res) =>{
    const Orders = await Order.find({}).populate('user', 'name')
    res.json(Orders)
})


//@desc    get Order By Id 
//@route   Get /api/Order/:id
//@Access  Public
export const getOrderById = asyncHandler (async (req, res) =>{
    const order = await Order.findById(req.params.id).populate('user', 'name')
    if(order){     
        res.json(order) 
    }else{
        res.status(404)
        throw new Error('order Not Found')
    }
})


// @desc    Delete Order by Id
// @route   DELETE /api/Order §/:id
// @access  Private/Admin
export const deleteOrder= asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
 
    if(order){
       await order.remove()
       res.json({message : "order has Been deleted"})
    }else{
       res.status(404)
       res.json({message : "order Not Found"})
    }
})


// @desc    Update Order status
// @route   PUT /api/Order/:id
// @access  Private/Admin
export const updateOrderStatus = asyncHandler(async (req, res) => {
    const {
      status
     } = req.body

     const order = await Order.findById(req.params.id)
     if(order){
       
        order.status = status

        const updatedOrder = await order.save();
  
        res.json(updatedOrder) 

     }else{
         res.status(404)
         throw new Error('Order Not Found')
     }
})
