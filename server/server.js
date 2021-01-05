import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import colors from 'colors'
import connectDB from './config/db.js';


const app = express()
app.use(bodyParser.json())
app.use(morgan('tiny'))

dotenv.config()
connectDB()

const api = process.env.API_URL

app.get('/',(req,res)=>{
    res.send("Hello From Port 5000")
})

app.listen(5000, ()=>{
    console.log('Hello there', api)
})