
const express = require('express')
const yellowRouter = express.Router()

yellowRouter.get("/", (req, res)=>{
    res.status(200).json({ 
        message: "The Stars Shine Bright"
    })
})

module.exports = yellowRouter