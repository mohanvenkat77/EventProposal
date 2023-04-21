const bcypt = require("bcrypt");
const express = require("express");
const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const jwtAuthToken = require("../middleware/jwtAuthToken");
const { register, login } = require("../controller/register");
const router = express.Router();

router.post("/register",register)
router.post("/login",login)
module.exports = router;
