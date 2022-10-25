const mongoose = require("mongoose");

//mongodb+srv://yen:<password>@cluster0.xe9vcmz.mongodb.net/?retryWrites=true&w=majority
//useNewUrlParser: true, useUnifiedTopology: true

const connectionStr =
  "mongodb+srv://yen:0628@cluster0.xe9vcmz.mongodb.net/Myfirst?retryWrites=true&w=majority";

const connectToMongoose = () => {
  mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console), "connection error");
  db.once("open", () => {
    console.log("succeed connect!");
  });
};

module.exports = connectToMongoose;
