const mongoose = require("mongoose");
// const {
//   default: productsStore,
// } = require("../../client/src/database/products");

// export const productSchema = {
//     name: "",
//     description: "",
//     category: "",
//     price: "",
//     stock_quantity: "",
//     image_link: "",
//   };

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  stock_quantity: {
    type: Number,
    require: true,
  },
  image_link: {
    type: String,
    require: true,
  },
});

module.exports = productSchema;
