const multer = require('multer');
const path = require('path');

const storageDir = path.join(__dirname, '..', 'storage')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, '/tmp/my-uploads')
        cb(null, storageDir)
    },
    filename: (req, file, cb) => {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, Date.now() + path.extname(file.originalname))
        // cb(null,file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })