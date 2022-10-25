const Products = require("../database/model");
const productSchema = require("../database/schema");

//get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.json(products);

    console.log("All products", { products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  console.log("get product by ID: ", req.params.id);
  let product;
  try {
    product = await Products.findById(req.params.id);

    console.log(product);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//Add Product(Post)
const addProduct = async (req, res) => {
  const product = new Products({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image_link: req.body.image_link,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

//Edit Product(Post)

const editProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    console.log(product);

    product.name = req.body.name ? req.body.name : product.name;
    product.description = req.body.description
      ? req.body.description
      : product.description;
    product.price = req.body.price ? req.body.price : product.price;
    product.image_link = req.body.image_link
      ? req.body.image_link
      : product.image_link;

    console.log(product);

    const editProduct = await product.save();
    res.status(201).json(editProduct);
  } catch (error) {
    res.status(400).json({ message: "edit failed" });
  }
};

//Delete Product
const delProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    console.log(product);
    await product.remove();
    res.json({ message: "delete success" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  delProduct,
  editProduct,
};
