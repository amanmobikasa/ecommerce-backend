const mongoose = require('mongoose');

const productListSchema = new mongoose.Schema({
    productImage : {
        type : String
    },
    productTitle : {
        type : String
    },
    productDescription : {
        type : String
    },
    productRating : {
        type : Number
    },
    productPrice : {
        type : String
    }
})

const ProductListSchema = mongoose.model("productList", productListSchema);
module.exports = ProductListSchema;