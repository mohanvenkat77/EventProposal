const bcypt = require("bcrypt");
const joi = require("joi");
const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const jwtAuthToken = require("../middleware/jwtAuthToken");

const register = async (req, res) => {
  const { name, contact, email, password, selected, isUser, isVendor } =
    req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({status:"Failed",message:"user already exits"});
    }
    const newdata = new User({
      name,
      contact,
      email,
      password,
      isUser,
      isVendor,
      selected,
    });
    const salt = await bcypt.genSalt(10);
    newdata.password = await bcypt.hash(newdata.password, salt);
    const token = jwtAuthToken(newdata);
    await newdata.save();
 
    res.status(200).json({status:"Success",token});
  } catch (error) {
    console.log(error);
    
    res.status(400).json({status:"failed",message:error.details});
  }
};



const login=async (req,res)=>{
  try {
     let user=await User.findOne({email:req.body.email})
     if(!user) return res.status(400).json({status:"Failed",message:"User not exits"})
     const isvalid=await bcypt.compare(req.body.password,user.password)
     if(!isvalid) return res.status(400).send("Invalid email or password....")
     const token= jwtAuthToken(user)
     console.log(token)
     res.send(token)
  } catch (error) {
    res.status(400).json({status:"failed",message:error.details});
  }
 }

module.exports = { register,login };
