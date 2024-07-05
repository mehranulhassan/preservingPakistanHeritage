// routes.js

const express = require("express");
const router = express.Router();
const { loginUser, signUpUser } = require("../controllers/user.controller");

// Define routes
router.get("/", (req, res) => res.send("Hello World"));
router.post("/login", loginUser);
router.post("/signup", signUpUser);

module.exports = router;
