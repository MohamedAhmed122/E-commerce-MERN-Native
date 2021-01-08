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

