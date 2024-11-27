const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Firstname must be greater than 3 characters"),
    body("fullname.lastname") // Add validation for lastname if needed
      .optional() // Optional if you want to allow empty last names
      .isLength({ min: 3 })
      .withMessage("Lastname must be greater than 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  userController.registerUser
);

module.exports = router;
