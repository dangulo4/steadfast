const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header("x-auth-token");

    // Check for valid token
    if(!token) {
        return res.status(401).json({ 
            msg: "No token found, Authorization denied"
        });
    }
    
    try {
        // Verify if token is Valid
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        // Add the user from payload
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({ msg: "Token provided is not valid" })
    }
}

module.exports = auth;