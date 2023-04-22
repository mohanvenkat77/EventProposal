const express = require("express");
const router = express.Router();
const { userLogin, userRegister, vendorLogin, vendorRegister } = require("../controller/userController");

router.post("/vendor/register", vendorRegister);
router.post("/vendor/login", vendorLogin);
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);

module.exports = router;