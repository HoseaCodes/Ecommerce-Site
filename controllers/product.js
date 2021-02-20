const Products = require("../models/product")

const productCtrl = {
    getProducts,
    createProducts,
    deleteProducts,
    updateProducts
}
async function getProducts(req, res) {
    try {
        const products = await Products.find()
        res.json(products)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function createProducts(req, res) {
    try {
        const { product_id, title, price, description, content, images, category } = req.body;
        if (!images) return res.status(400).json({ msg: "No image upload" })

        const product = await Products.findOne({ product_id })
        if (product) return res.status(400).json({ msg: "This category already exists." })

        const newProduct = new Products({
            product_id, title: title.toLowerCase(), price, description, content, images, category
        })

        await newProduct.save()

        res.json({ msg: "Created a new product" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function deleteProducts(req, res) {
    try {
        await Products.findByIdAndDelete(req.params.id)
        res.json({ msg: "Deleted a product" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function updateProducts(req, res) {
    try {
        const { product_id, title, price, description, content, images, category } = req.body;
        if (!images) return res.status(400).json({ msg: "No image upload" })

        await Products.findOneAndUpdate({ _id: req.params.id }, {
            title: title.toLowerCase(), price, description, content, images, category
        })
        res.json({ msg: 'Updated a product' })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = productCtrl