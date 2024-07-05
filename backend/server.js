const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken"); // Import jwt module

const userRoutes = require("./routes/user.routes");
const calendarRoutes = require('./routes/calendar.routes');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/PreservingPakistanHeritage", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.get('/allproducts', async (req, res) => {
  console.log("Received request for all products");

  try {
    let products = await Product.find({});
    console.log("All products fetched successfully", products);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Error fetching products", error: error.message });
  }
});

app.use("/", userRoutes);
app.use("/", calendarRoutes);

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    imageUrl: `http://localhost:${PORT}/images/${req.file.filename}`
  });
});

app.post('/addproduct', async (req, res) => {
  try {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id: id,
      name: req.body.name,
      category: req.body.category,
      image: req.body.image,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log('Product saved:', product);
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Error adding product", error: error.message });
  }
});

app.post('/removeproduct', async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Product removed successfully");
    res.json({
      success: true,
      message: "Product removed successfully"
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Error removing product", error: error.message });
  }
});

app.get('/newcollections', async (req, res) => {
  try {
    let products = await Product.find({});
    let new_collection = products.slice(1).slice(-8);
    console.log("New Collection Fetched");
    res.json(new_collection);
  } catch (error) {
    console.error("Error fetching new collections:", error);
    res.status(500).json({ success: false, message: "Error fetching new collections", error: error.message });
  }
});

app.get('/popularinwomen', async (req, res) => {
  try {
    let products = await Product.find({ category: "women" }).limit(4);
    console.log("Popular products in women fetched");
    res.json(products);
  } catch (error) {
    console.error("Error fetching popular products in women:", error);
    res.status(500).json({ success: false, message: "Error fetching popular products in women", error: error.message });
  }
});

const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ errors: "Please authenticate user" });
  }

  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({ error: "Please authenticate using a valid secret key" });
  }
};

app.post('/addtocart', fetchUser, async (req, res) => {
  try {
    // Fetch user data and update cart
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });

    res.json({ success: true, message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Error adding to cart", error: error.message });
  }
});
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'mehranhashmi618@gmail.com',
      pass: 'qhjg boeg szag micp',
  },
});

app.post('/send-email', (req, res) => {
  const { email, subject, text } = req.body;
  console.log('Email request received:', { email, subject, text });
  const mailOptions = {
      from: 'mehranhashmi618@gmail.com',
      to: email,
      subject: subject,
      text: text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending email', details: error.toString() });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: `Email sent: ${info.response}` });
});
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
