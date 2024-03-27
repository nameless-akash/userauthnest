const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profileRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(bodyParser.json());

// Middleware for verifying authentication token
app.use(authMiddleware);

// Profile routes
app.use('/api/profile', profileRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
