const router = require('express').Router();
const productCtrl = require('../controllers/product');
const auth = require('../utils/auth')
const authAdmin = require('../utils/authAdmin')

router.route('/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProducts)

router.route('/products/:id')
    .delete(productCtrl.deleteProducts)
    .put(productCtrl.updateProducts)

module.exports = router