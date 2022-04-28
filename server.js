const express = require("express")
const bodyParser = require("body-parser")

const indexRouter =require("./routes/index")
const yellowRoute = require("./routes/yellow")
const orangeRoute = require("./routes/orange")
const blueRoute = require("./routes/blue")
const redRoute = require("./routes/red")

const server = express()
const PORT = 8888

// const path = require("path");

server.use(express.json())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

server.use('/', indexRouter);
server.use("/channels", yellowRoute)
server.use("/orange", orangeRoute)
server.use("/blue", blueRoute)
server.use("/red", redRoute)



server.get("/users/vicky", (req, res)=>{
    res.status(200).json({
        message:"Welcome to Vicky TV."})
})

server.get("/channels", (req, res)=>{
    res.status(200).json({
        message:"Overwritten by the yellowRoute."})
})


server.listen(PORT, ()=>{
    console.log(`Server is listening at Port: ${PORT}`)
})



//Ten Routes
// /index ....+listen
// /channels....+get
// /users/vicky...+get
// /blue .... +get
// /blue/about ....+get..+ post
// /red .... +use...+get
// /red/about .... +get...+post
// /orange ....+get...+get

//npm init -y
//npm i express
//npm i dotenv



