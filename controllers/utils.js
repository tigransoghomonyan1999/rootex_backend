const multer = require("multer");

module.exports = {
    upload: () => {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "./files");
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);
                cb(null, uniqueSuffix + "-" + file.originalname);
            }
        })
        return multer({storage: storage});
    }
}