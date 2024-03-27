// Sample hardcoded user data (for demonstration purposes)
const userData = require('../data/userData');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token not provided' });
    }

    // Here, you would verify the JWT token and extract user information
    // For demonstration, we'll just use the hardcoded user data
    req.user = userData[0];
    next();
};

module.exports = verifyToken;
