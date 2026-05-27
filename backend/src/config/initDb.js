const pool = require('./db');

const initializeDatabase = async () => {
    try {
        console.log('Connecting to the database and running migrations...');

        // 1. Create the users table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL UNIQUE,
                password_hash VARCHAR(255) NOT NULL,
                refresh_token TEXT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('✓ Users table created or verified.');

        // 2. Create the notes table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS notes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                encrypted_content TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log('✓ Notes table created or verified.');

        console.log('🎉 Database initialization complete!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Database migration failed:', error);
        process.exit(1);
    }
};

initializeDatabase();
