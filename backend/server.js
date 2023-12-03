require("dotenv").config()
const express=require('express')
const cors=require('cors')
const morgan=require("morgan")
const cookieParser=require("cookie-parser")
const authRoutes=require("./routes/Auth")
const { connectToDB } = require("./database/db")


// server init
const server=express()

// database connection
connectToDB()


// middlewares
server.use(cors({credentials:true,origin:process.env.ORIGIN}))
server.use(express.json())
server.use(cookieParser())
server.use(morgan("tiny"))

// routeMiddleware
server.use("/auth",authRoutes)




server.get("/",(req,res)=>{
    res.status(200).json({message:'running'})
})

server.listen(8000,()=>{
    console.log('server [STARTED] ~ http://localhost:8000');
})