const express = require("express");
const app = express();
require("./db/conn"); // require the conn file.
// require("dotenv").config();
// let jwtSecretKey = process.env.SECRET_KEY;
const bodyParser = require("body-parser");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());

// create a get api for render the product to the frontend
const ProductListSchema = require("./model/product-list-schema")
const AddToCartProducts = require("./model/add-to-cart-product")


app.get("/products-list", async (req, res) => {
  try {
    const productsList = await ProductListSchema.find();
    if (productsList) {
      console.log("productsList", productsList);
      return res.json({
        status: 200,
        success: true,
        data : productsList,
        message: "Signup successful",
      });
    } else {
      console.log("products  is not fetch");
      return res.json({
        status: 400,
        success: false,
        message: "Failed to Fetch the products",
      });
    }
  } catch (error) {
    res.status(402).json({
      success: false,
      message: "Something went wrong. Failed to fetch the product",
      error: error,
    });
    console.log("error is", error);
  }
});


app.post("/add-to-cart", async (req, res) => {
  try {
    const {product, quantity, userId} = req.body;
    if (!product) {
      throw new Error("product object is required");
    }
    const addToCartProduct = new AddToCartProducts({userId : userId, productOrder : product, productQuantity : quantity});
    const addedToCart = await addToCartProduct.save();
    console.log("addedToCart", addedToCart);
    return res.json({
      status: 200,
      success: true,
      message: "Product added to cart successfully",
    });
  } catch (error) {
    res.status(402).json({
      success: false,
      message: "Failed to add the product to cart",
      error: error,
    });
    console.log("error is", error);
  }
});



app.listen(process.env.PORT || 4000, () => {
    console.log("sever is listen in port no 4000");
  });