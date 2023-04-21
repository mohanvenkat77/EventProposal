const router = require("express").Router();
const { getAllProposals, getVendorProposals, addNewProposal, deleteProposal, getSingleProposal, renderImage } = require("../controller/proposalController");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");


const Storage = new GridFsStorage({
    url : process.env.DB_URL+process.env.DB_NAME,
    file : (req, file ) => {
        return {
            bucketName : process.env.DB_IMAGE_COLLECTION,
            filename : `${Date.now()}_${file.originalname}`
        }
    } 
})

const upload = multer({
    storage : Storage
});

router.get("/", getAllProposals);
router.get("/:id",getSingleProposal);
router.get("/vendor/:id", getVendorProposals);
router.post("/", upload.array("images", 10), addNewProposal);
router.delete("/:id", deleteProposal);
router.get("/images/:name",renderImage)
module.exports = router;