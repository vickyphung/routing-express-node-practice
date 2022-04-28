
const items = ["Alpha", "Beta", "Delta", "Theta"]

const express = require("express")
const blueRouter = express.Router()

blueRouter.get("/", (req, res)=>{
    res.status(200).json({message: "Imaginary Mindscapes"})
})

blueRouter.get('/about', function (req, res) {
    res.status(200).json({message: "ABOUT: Imaginary Mindscapes"})
})

blueRouter.post('/about', function (req, res) {
    items.push(req.body.content)
    res.json({message: items})
})




module.exports = blueRouter