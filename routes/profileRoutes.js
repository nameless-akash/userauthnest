const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('database.db');

// Get profile of a specific user
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const userRole = req.user.role;

    db.get('SELECT * FROM profiles WHERE userId = ?', [userId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (!row) {
            return res.status(404).json({ error: 'User profile not found' });
        }
        if (userRole === 'NORMAL' && row.visibility !== 'PUBLIC' && userId !== req.user.profile.userId) {
            return res.status(403).json({ error: 'Unauthorized access' });
        }

        res.json(row);
    });
});

// Get all profiles
router.get('/', (req, res) => {
    const userRole = req.user.role;
    let sqlQuery;

    if (userRole === 'NORMAL') {
        sqlQuery = 'SELECT * FROM profiles WHERE visibility = "PUBLIC"';
    } else if (userRole === 'ADMIN') {
        sqlQuery = 'SELECT * FROM profiles';
    } else {
        return res.status(403).json({ error: 'Unauthorized access' });
    }

    db.all(sqlQuery, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(rows);
    });
});

// Update profile visibility
router.put('/:userId/visibility', (req, res) => {
    const userId = req.params.userId;
    const visibility = req.body.visibility;
    db.run('UPDATE profiles SET visibility = ? WHERE userId = ?', [visibility, userId], (err) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json({ message: 'Profile visibility updated successfully' });
    });
});

module.exports = router;
