const express = require("express")
const orangeRouter = express.Router()


orangeRouter.get("/", (req, res)=>{
    res.status(200).json({message: "Orange you glad?", code: 420})
})

orangeRouter.get("/:id/:pupper/:name", (req, res)=>{
    const id = req.params.id
    const pupper = req.params.pupper
    const name = req.params.name
    res.status(200).json ({
        message: `${id}, ${pupper}, ${name}`
    })
})



module.exports = orangeRouter



