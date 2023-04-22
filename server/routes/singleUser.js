const express = require("express");
const { updatelist,singleuser } = require("../controller/singleUser");
const router = express.Router();
router.put("/update/:id",updatelist)
router.get("/singleuser/:id",singleuser)
module.exports = router;
