const router = require('express').Router()
const paymentCtrl = require('../controllers/payment');
const auth = require('../utils/auth')
const authAdmin = require('../utils/authAdmin')

router.route('/payment')
    .get(auth, authAdmin, paymentCtrl.getPayments)
    .post(auth, paymentCtrl.createPayment)


module.exports = router