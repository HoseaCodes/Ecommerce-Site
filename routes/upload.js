const router = require('express').Router();
const cloudinary = require('cloudinary');
const auth = require('../utils/auth');
const authAdmin = require('../utils/authAdmin');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUND_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

//image upload
router.post("/upload", auth, authAdmin, (req, res) => {
    try {
        console.log(req.files)
        if (!req.files || Object.keys(req.files).length === 0) return res.status(400).send('No files were uploaded.')

        const file = req.files.file;
        if (file.size > 1024 * 1024) {
            removeTmp(file.tempFilePath)
            return res.status(400).json({ msg: "size too large" })
        }

        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            removeTmp(file.tempFilePath)
            return res.status(400).json({ msg: "File format is incorrect" })
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, { folder: "test" }, async (err, result) => {
            if (err) throw err;

            removeTmp(file.tempFilePath)

            res.json({ result })
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

//image delete
router.post("/destory", (req, res) => {
    try {
        const { public_id } = req.body
        if (!public_id) return res.status(400).json({ msg: 'No images Selected' })

        cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
            if (err) throw err;

            res.json({ msg: 'Deleted Image' })
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

})

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err;
    })
}

module.exports = router