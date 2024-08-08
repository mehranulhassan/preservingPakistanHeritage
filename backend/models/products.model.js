const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/PreservingPakistanHeritage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    image: String,
    new_price: Number,
    old_price: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
