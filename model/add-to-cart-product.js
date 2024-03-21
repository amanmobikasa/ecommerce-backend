const mongoose = require('mongoose');

const addToCartProducts = new mongoose.Schema({
    productOrder : {
        type : Array

    },
    productPrice : {
        type : String
    },
    productQuantity : {
        type : Number
    },
    userId : {
        type : String
    },
    orderId : {
        type : String,
        require : true,
        default : `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    }
})

const AddToCartProducts = mongoose.model("addToCartProduct", addToCartProducts);
module.exports = AddToCartProducts