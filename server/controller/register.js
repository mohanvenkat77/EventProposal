const bcypt = require("bcrypt");
const joi = require("joi");
const express = require("express");
const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const jwtAuthToken = require("../middleware/jwtAuthToken");
const cloudinary = require("../utilities/cloudinary");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name,contact,email, password,selected,isUser,isVendor } = req.body;
  try {
  if(err) {
  return res.status(400).send(err.error.details[0].message)
  }
  let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("user already exits");
    }


          const newdata = new User({ name,contact, email, password,isUser,isVendor,selected });
          const salt = await bcypt.genSalt(10);
          newdata.password = await bcypt.hash(newdata.password, salt);
          const token=jwtAuthToken(newdata)
           res.send(token)
          await newdata.save()
   
  } catch (error) {
    res.status(400).send(error.details);
  }
});
module.exports = router;
