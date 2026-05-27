# Secure Notes Application

This is a full-stack application that allows users to create and manage secure, encrypted notes.

## Features

- **Frontend:** Built with React, Redux, and Material-UI.
- **Backend:** Built with Node.js, Express, and MySQL.
- **Authentication:** Secure JWT-based authentication with refresh tokens.
- **Encryption:** Notes are encrypted on the client-side using AES before being stored in the database.
- **CRUD Operations:** Users can create, view, and delete their notes.
- **Search:** Client-side search functionality to filter notes.
- **Responsive Design:** The UI is designed to be responsive and work on different screen sizes.

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

### Database Setup

1.  **Create a MySQL database** named `secure_notes`.
2.  **Create the `users` table:**
    ```sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        refresh_token VARCHAR(255)
    );
    ```
3.  **Create the `notes` table:**
    ```sql
    CREATE TABLE notes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        encrypted_content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
    ```

### Configuration

1.  **Backend:** Create a `.env` file in the `backend` directory and add the following:
    ```
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_DATABASE=secure_notes
    DB_PASSWORD=your_db_password

    JWT_SECRET=your_jwt_secret
    JWT_REFRESH_SECRET=your_jwt_refresh_secret
    ```

2.  **Frontend:** The frontend is configured to work with the backend running on `http://localhost:5000`.

### Running the Application

1.  **Start the backend server:**
    ```bash
    cd backend
    npm start
    ```
    (You may need to add a `"start": "node src/index.js"` script to your `backend/package.json`)

2.  **Start the frontend application:**
    ```bash
    cd ../frontend
    npm start
    ```

The application should now be running and accessible in your browser.
