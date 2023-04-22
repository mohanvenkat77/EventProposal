const bcypt = require("bcrypt");
const joi = require("joi");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const jwtAuthToken = require("../middleware/jwtAuthToken");
// const Proposal=require("../Model/proposal")


 const updatelist=async(req,res)=>{
  let {id}=req.params
  let list=req.body
  console.log(id);
 const newL=[]
  try {
    let user=await User.findById(id)
    console.log(user);
    if(!user) return res.status(400).json({status:"Failed",message:"User not exits"})
    console.log("jiiii");
    const {selected}=user
    console.log(selected);
    console.log("selected........",req.body.selected);
    let newL=user.selected.filter((each)=>  each===req.body.selected._id )
    console.log(newL.length);
    if(newL.length===0 || !newL){
      console.log("ifblock");
   var updateuser=await User.findByIdAndUpdate({_id:id}, {
      selected:[...selected,req.body.selected],
  },{new:true})
}
    console.log("updated");
    res.status(200).json({status:"completed",message:"updated....",data:updateuser})
  } catch (error) {
    res.status(400).json({status:"failed",message:error.message});
  }
 }


 const singleuser=async(req,res)=>{
  const {id}=req.params
  try {

    const prop=await User.findById({_id:id})

    res.status(200).json({status:"completed",message:"single user is..",data:prop})
  } catch (error) {
    res.status(400).json({status:"failed",message:error.message});
  }
 }
module.exports = { updatelist,singleuser };
