const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req,file, cv) {
        cv(null, path.join(__dirname, "../../public/images/products"))
    },
    filename: function(req, file, cv) {
        cv(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
})

const uploadFile = multer({storage});
module.exports = uploadFile;