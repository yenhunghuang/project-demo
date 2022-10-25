const connectToMongoose = require("./database/connect");
const ProductRoutes = require("./routes/productRoutes");
const express = require("express");

connectToMongoose();

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

// app.get("/allProducts", async (_, res) => {
//   console.log("get all products");
//   res.json();
// });

app.use("/api", ProductRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
