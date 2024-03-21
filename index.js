const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/conn"); // require the conn file.
require("dotenv").config();
let jwtSecretKey = process.env.SECRET_KEY;
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());




app.listen(process.env.PORT || 4000, () => {
    console.log("sever is listen in port no 4000");
  });