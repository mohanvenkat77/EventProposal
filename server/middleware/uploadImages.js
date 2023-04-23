const cloudinary = require("../utills/cloudinary");

function convertBase64(file) {
    return new Promise(res => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            res(fileReader.result);
        };

    })
};

const uploadImages = async (req, res, next) => {
    try {
        let { images } = req.body;
        if (!images) return next();
        let imageUrls = [];
        for (let i = 0; i < images.length; i++) {
            convertBase64(images[i])
                .then(res => {
                    const img = cloudinary.uploader.upload(res, {
                                folder: "Event-proposals"
                            });
                            imageUrls.push(img.secure_url);
                })
        }

        // let imageUrls = images.map(async (file) => {
        //     const img = cloudinary.uploader.upload(file, {
        //         folder: "Event-proposals"
        //     });
        //     return img.secure_url;
        // })
        req.imageUrls = imageUrls;
        return next();
    } catch (err) {
        return res.status(400).json({ status: "Failed", message: err.message });
    }
}

module.exports = { uploadImages };