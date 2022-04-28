const redThings = []
const userName = []
const userDog = []

const express = require("express")
const redRouter = express.Router()

redRouter.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

redRouter.get("/", (req, res)=>{
    res.status(200).json({message: "Infinite Space"})
})

redRouter.get('/about', function (req, res) {
    res.status(200).json({message: "ABOUT: Infinite Space"})
})

//POSTMAN
//http://localhost:8888/red/about
//POST-Body-raw-JSON
// {
//     "redContent": "WUT IS THIS",
//     "name": "vicky",
//     "dog": "pinky"
// }

redRouter.post('/about', function (req, res) {
    redThings.push(req.body.redContent)
    userName.push(req.body.name)
    userDog.push(req.body.dog)
    res.json({message: redThings, userName, userDog})
    console.log(redThings, userName, userDog)
})

module.exports = redRouter