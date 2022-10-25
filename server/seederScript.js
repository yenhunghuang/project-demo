const connectToMongoose = require("./database/connect");
const ProductRoutes = require("./routes/productRoutes");
const Products = require("./database/model");

const productData = require("./database/data");

connectToMongoose();

//insert Data from database/data.js
const importData = async () => {
  try {
    // await Products.deleteMany({});

    await Products.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
