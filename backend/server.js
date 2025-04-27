require("dotenv").config()

const express = require("express")

//express app
const app = express()

// routes
app.get("/", (req,res)=>{
 res.json({mssg:"Welcome tpo the app"})
})

// Listening to port 4000
app.listen(process.env.PORT,()=>{
    console.log("Listening to port", process.env.PORT)
})