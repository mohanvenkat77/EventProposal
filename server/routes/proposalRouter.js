require("dotenv").config();
const router = require("express").Router();
const deleteBeforeUpdate = require("../middleware/deleteBeforeUpdate");
const { getAllProposals, getVendorProposals, addNewProposal, deleteProposal, renderImage, editProposal, getSingleProposal } = require("../controller/proposalController");
const upload = require("../middleware/proposalImageStorage");
// const multer = require("multer");
// const {GridFsStorage} = require("multer-gridfs-storage");

// const Storage = new GridFsStorage({
//     url : process.env.DB_URL+process.env.DB_NAME,
//     file : (req, file ) => {
//         return {
//             bucketName : process.env.DB_IMAGE_COLLECTION,
//             filename : `${Date.now()}_${file.originalname}`
//         }
//     } 
// })

// const upload = multer({
//     storage : Storage
// });

router.get("/", getAllProposals);
router.get("/:id",getSingleProposal);
router.get("/vendor/:id", getVendorProposals);
router.post("/", upload.array("images", 10), addNewProposal);
router.put("/:id", upload.array("images", 10), deleteBeforeUpdate, editProposal);
router.delete("/:id", deleteProposal);
router.get("/images/:name", renderImage);

module.exports = router;