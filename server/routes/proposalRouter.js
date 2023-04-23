require("dotenv").config();
const router = require("express").Router();
const deleteBeforeUpdate = require("../middleware/deleteBeforeUpdate");
const { getAllProposals, getVendorProposals, addNewProposal, deleteProposal, renderImage, editProposal, getSingleProposal } = require("../controller/proposalController");
const upload = require("../middleware/proposalImageStorage");
const vendorAuthentication = require("../middleware/vendorAuthentication");
router.get("/", getAllProposals);
router.get("/:id",getSingleProposal);
router.get("/vendor/:id", vendorAuthentication, getVendorProposals);
router.post("/",vendorAuthentication, upload.array("images", 10), addNewProposal);
router.put("/:id",vendorAuthentication, upload.array("images", 10), deleteBeforeUpdate, editProposal);
router.delete("/:id",vendorAuthentication, deleteProposal);
router.get("/images/:name", renderImage);

module.exports = router;