const sqlite3 = require('sqlite3').verbose();

// Specify the file path for the SQLite database
const dbFilePath = 'database.db';

// Create a new SQLite database instance
const db = new sqlite3.Database(dbFilePath);

// Define the schema for the profiles table
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS profiles (
        id INTEGER PRIMARY KEY,
        userId TEXT UNIQUE,
        bio TEXT,
        visibility TEXT,
        role TEXT
    )
`;

// Define sample data to insert into the profiles table
const sampleData = [
    {
        userId: '1',
        bio: 'Sample bio 1',
        visibility: 'PUBLIC',
        role: 'NORMAL'
    },
    {
        userId: '2',
        bio: 'Sample bio 2',
        visibility: 'PRIVATE',
        role: 'ADMIN'
    }
];

// Execute the query to create the profiles table
db.serialize(() => {
    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Profiles table created successfully');

            // Insert sample data into the profiles table
            const insertDataQuery = `
                INSERT INTO profiles (userId, bio, visibility, role)
                VALUES (?, ?, ?, ?)
            `;
            sampleData.forEach((data) => {
                db.run(insertDataQuery, [data.userId, data.bio, data.visibility, data.role], (err) => {
                    if (err) {
                        console.error('Error inserting sample data:', err.message);
                    } else {
                        console.log('Sample data inserted successfully');
                    }
                });
            });
        }

        // Close the database connection
        db.close();
    });
});
