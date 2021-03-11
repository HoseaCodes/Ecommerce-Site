const Payments = require('../models/payment');
const Products = require("../models/product")
const Users = require('../models/userModel');


const paymentCtrl = {
    getPayments,
    createPayment,
    sold
}

async function getPayments(req, res) {
    try {
        const payments = await Payments.find()
        res.json(payments)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function createPayment(req, res) {
    try {
        const user = await Users.findById(req.user.id).select('name email')
        if (!user) return res.status(400).json({ msg: "User does not exist" })

        const { cart, paymentID, address } = req.body
        const { _id, name, email } = user

        const newPayment = new Payments({
            user_id: _id, name, email, cart, paymentID, address
        })

        cart.filter(item => {
            return sold(item._id, item.quantity, item.sold)
        })

        await newPayment.save()
        res.json({ msg: "Payment Success" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function sold(id, quantity, oldSold) {
    await Products.findByIdAndUpdate({ _id: id }, {
        sold: quantity + oldSold
    })
}

module.exports = paymentCtrl;