const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/PreservingPakistanHeritage")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object, // Assuming `cart` is an object containing various details
  },
  date: {
    type: Date,
    default: Date.now, // Setting default value to current timestamp
  },
});

const collection = mongoose.model("users", newSchema);

module.exports = collection;
