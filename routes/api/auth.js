const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User model
const User = require("../../models/User");

router.post("/", (req, res) => {
    const { email, password } = req.body;

    // validation
    if(!email || !password) {
        return res.status(400).json({ msg: "Please fill out all fields"})
    }

    // Check for existing user
    User.findOne({ email })
    .then(user => {
        if(!user)
            return res.status(400).json({ msg: "User Does not exist!"});

        // Validate the password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: "Invalid Password" });
            jwt.sign(
                { 
                    id: user.id,
                    name: user.name
                },
                config.get("jwtSecret"),
                {
                    expiresIn: 1800 
                },
                (err, token) => {
                    if(err) throw(err);
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    });
                }
            )   
        })    
    })
});

// Route for authorization "api/auth/user"
router.get("/user", auth, (req, res) => {
    User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;