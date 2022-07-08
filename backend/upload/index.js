const multer = require("multer");


// Storage Configuration
const storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, "images/");
    },
    filename: function(request, file, callback) {
        const extension = file.originalname.split('.')[1];
        const filename = request.params.id + '.' + extension;
        
        request.filename = filename;
        callback(null, filename);
    },
});


module.exports = multer({ storage });
