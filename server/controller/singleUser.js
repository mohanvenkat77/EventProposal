const bcypt = require("bcrypt");
const joi = require("joi");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const jwtAuthToken = require("../middleware/jwtAuthToken");
// const Proposal=require("../Model/proposal")


 const updatelist=async(req,res)=>{
   console.log(req.params);
  let {id}=req.params
 const newL=[]
  try {
    let user=await User.findById(id)

    if(!user) return res.status(400).json({status:"Failed",message:"User not exits"})

    const {selected}=user
   
    let newL=user.selected.filter((each)=>  each===req.body.selected._id )
 
    if(newL.length===0 || !newL){

   var updateuser=await User.findByIdAndUpdate({_id:id}, {
      selected:[...selected,req.body.selected],
  },{new:true})
}
    res.status(200).json({status:"completed",message:"updated....",data:updateuser})
  } catch (error) {
    res.status(400).json({status:"failed",message:error.message});
  }
 }




 const singleuser=async(req,res)=>{
  const {id}=req.params
  console.log(req.params);
  try {
    const prop=await User.findById(id)

    res.status(200).json({status:"completed",message:"single user is..",data:prop})
  } catch (error) {
    res.status(400).json({status:"failed",message:error.message});
  }
 }
module.exports = { updatelist,singleuser };
