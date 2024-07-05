const Product = require('../models/products.model');



// Get all products
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {  getAllProducts };
