import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import colors from 'colors'
import connectDB from './config/db.js';
import cors from 'cors'

import productRoute from './routes/ProductRoute.js'
import categoryRoute from './routes/CategoryRoute.js'
import userRoute from './routes/UserRoute.js'

import { notFound, errorHandler } from './middleware/errorHandler.js'


const app = express()

app.use(cors())
app.options('*', cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

dotenv.config()
const api = process.env.API_URL

connectDB()

// test
app.get('/',(req,res)=>{
    res.send("Hello From Port 5000")
})

// Routers
app.use(`${api}/products`, productRoute)
app.use(`${api}/category`, categoryRoute)
app.use(`${api}/users`, userRoute)

// middleware
app.use(notFound)
app.use(errorHandler)

// Port
app.listen(5000, ()=>{
    console.log('Hello there', api)
})