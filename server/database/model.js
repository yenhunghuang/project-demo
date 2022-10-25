const mongoose = require("mongoose");
const productSchema = require("./schema");

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
