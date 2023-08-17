const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post("/", [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({ min: 7 }),
] ,(req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // create new user
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then((user) => res.json(user))
    .catch((error) => {
        console.log(error);
        res.json({ error: "Please enter unique value for email", success: false });
    });
});

module.exports = router;