const bcypt = require("bcrypt");

const express = require("express");
const User = require("../Models/user");
const jwtAuthToken = require('../middleware/jwtAuthToken');
const jwt = require("jsonwebtoken");


const router=express.Router();

router.post('/login',async (req,res)=>{
 try {
    // if(err) return res.status(400).send(err.details[0].message)
    let user=await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send("User not exits")
    const isvalid=await bcypt.compare(req.body.password,user.password)
    if(!isvalid) return res.status(400).send("Invalid email or password....")
    const token=jwtAuthToken(user)
    res.send(token)
 } catch (error) {
    console.log(error)
 }
})
module.exports=router