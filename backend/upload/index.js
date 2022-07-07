const multer = require('multer');

// Storage Config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        const extension = file.originalname.split('.')[1];
        const filename = `${req.params.id}.${extension}`;
        
        req.filename = filename
        
        cb(null, filename)
    }
});


module.exports = multer({ storage })