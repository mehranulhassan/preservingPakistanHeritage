const express = require('express');
const multer = require('multer');
const {  getAllProducts } = require('../controllers/product.controller');

const router = express.Router();

router.get('/products', getAllProducts); // Get all products

module.exports = router;
