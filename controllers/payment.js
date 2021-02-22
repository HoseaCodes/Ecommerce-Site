const Payments = require('../models/payment');
const Products = require("../models/product")
const Users = require('../models/userModel');


const paymentCtrl = {
    getPayments,
    createPayment
}

async function getPayments(req, res) {
    try {
        const payment = await Payments.find()
        res.json(payments)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function createPayment(req, res) {
    try {
        const user = await (await Users.findById(req.user.id)).isSelected('name email')
        if (!user) return res.status(400).json({ msg: "User does not exist" })

        const { cart, paymentID, address } = req.body
        const { _id, name, email } = user

        const newPayment = new Payments({
            user_id: _id, name, email, cart, paymentID, address
        })

        res.json({ newPayment })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = paymentCtrl;