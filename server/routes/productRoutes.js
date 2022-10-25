const express = require("express");
const router = express.Router();

const {
  getProductById,
  getAllProducts,
  addProduct,
  delProduct,
  editProduct,
} = require("../controller/productController");

//get all product from db
router.get("/", getAllProducts);

//get a product by id from db
router.get("/:id", getProductById);

//Add a product
router.post("/Add", addProduct);

//Delete a product
router.delete("/:id", delProduct);

//Edit product
router.patch("/:id", editProduct);

module.exports = router;
