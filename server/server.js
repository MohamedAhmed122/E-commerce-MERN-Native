import express from 'express'


const app = express()

app.get('/',(req,res)=>{
    res.send("Hello From Port 5000")
})

app.listen(5000, ()=>{
    console.log('Hello there')
})