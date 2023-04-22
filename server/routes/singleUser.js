const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const jwtAuthToken = require("../middleware/jwtAuthToken");
const { updatelist,singleuser } = require("../controller/singleUser");
const router = express.Router();
router.put("/update/:id",updatelist)
router.get("/singleuser/:id",singleuser)
module.exports = router;
