const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const connectDB = require('./database/connectDB')
dotenv.config()

const userRouter=require('./routes/user')
const blogRouter=require('./routes/blog')

const app=express()
connectDB()

app.use(cors())
app.use(express.json())

app.use('/api',userRouter)
app.use('/api',blogRouter)

app.get('/',(req,res)=>{
    res.send({message:"just started"})
})



app.listen(3000)