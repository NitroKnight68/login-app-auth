const express = require("express")
const router = express.Router()
const path = require('path');

// Get all posts
router.get("/login", (req,res)=>{
	res.sendFile(path.join(__dirname, '../public/html/login.html'));
})

router.get("/register", (req,res)=>{
	res.sendFile(path.join(__dirname, '../public/html/register.html'));
})

module.exports = router