const express = require('express');
const router = express.Router();

/* GET home page. */

router.get("/", (req, res)=>{
  res.status(200).json({Title: "88 RISING"})
})



module.exports = router;



