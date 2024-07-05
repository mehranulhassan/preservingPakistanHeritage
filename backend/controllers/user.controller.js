const Users = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email, password });

    if (user) {
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ message: "notexist" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "fail" });
  }
}

async function signUpUser(req, res) {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await Users.findOne({ email });
    if (userExists) {
      return res.json({ message: "exist" });
    }

    // Create new user
    const newUser = new Users({
      name: username,
      email,
      password,
      cartData: initializeCartData(), // Initialize cart data (assuming a function is defined for this purpose)
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, "secret_ecom");

    res.json({ success: true, token });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "fail" });
  }
}

// Helper function to initialize cart data
function initializeCartData() {
  let cart = {};
  for (let index = 0; index < 300; index++) {
    cart[index] = 0;
  }
  return cart;
}

module.exports = { loginUser, signUpUser };
