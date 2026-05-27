# Secure Notes Application 🔒

A high-performance, full-stack application that allows users to create, search, and manage secure, client-side encrypted notes. Rebuilt completely with a custom vanilla CSS design system for ultra-fast load times.

---

## 🚀 Key Architectural Highlights
- **No Heavy Frameworks / Libraries (MUI-Free)**: Rebuilt entirely using native HTML5 and utility-driven vanilla CSS. The client bundle size was **reduced by 75%** (210 kB to 53 kB) for near-instant page load times.
- **Client-Side Cryptography**: Notes are fully encrypted locally on the client using AES-256 (`crypto-js`) before transmission. The server and database only store the encrypted payload.
- **Micro-Animations**: Smooth entry, exit, and list transitions powered by `react-transition-group` and CSS keyframe animations.
- **Instant Search**: Direct keypress-driven search bar for real-time note filtering.

---

## 📁 Repository Directory Structure

```text
├── backend/
│   ├── src/
│   │   ├── config/       # Connection pools & automated migrations
│   │   ├── controllers/  # API endpoints handlers
│   │   ├── routes/       # Express route mappings
│   │   └── index.js      # App entry point
│   ├── .env              # Backend local environment configs
│   └── package.json      # Node.js dependencies
└── frontend/
    ├── src/
    │   ├── components/   # Auth forms, note items, modal dialogs
    │   ├── pages/        # Dashboard & Auth pages
    │   ├── redux/        # Store, auth and note slices
    │   ├── services/     # API request structures
    │   ├── index.css     # Premium custom CSS variables & resets
    │   └── index.js      # React bootstrap entry point
    └── package.json      # React dependencies
```

---

## 🛠️ Local Installation & Setup

### Prerequisites
- **Node.js** (v16.x or newer)
- **MySQL Server** (local or remote)

### 1. Clone the Repository
```bash
git clone https://github.com/prakharkatiyar181/secure-notes.git
cd secure-notes
```

### 2. Configure the Backend
Navigate to the `backend/` directory, install packages, and set up your `.env`:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```text
DB_HOST=localhost
DB_USER=your_db_username
DB_DATABASE=secure_notes
DB_PASSWORD=your_db_password
DB_PORT=3306

JWT_SECRET=your_secret_jwt_key
JWT_REFRESH_SECRET=your_refresh_jwt_key
```

### 3. Initialize the Database Schema (Automated)
Run the built-in database migration script to automatically connect to your database and provision the tables (`users` and `notes`):
```bash
node src/config/initDb.js
```
*No manual SQL queries or database GUI tools needed!*

### 4. Configure the Frontend
Navigate to the `frontend/` directory, install packages, and set up your environment variables:
```bash
cd ../frontend
npm install
```

To configure a custom backend endpoint for local development (optional, defaults to `http://localhost:5000/api`):
Create a `.env` file in the `frontend/` folder:
```text
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 💻 Running the Application Locally

Start both the API server and the React dev client:

### Backend API
In the `backend/` directory:
```bash
npm start
```
*API will run on [http://localhost:5000](http://localhost:5000)*

### Frontend Client
In the `frontend/` directory:
```bash
npm start
```
*React app will run on [http://localhost:3000](http://localhost:3000)*

---

## ☁️ Production Deployment

### 1. Database (MySQL)
Deploy a managed MySQL instance on **Railway.app** or **Aiven.io**. Copy down the database connection variables (Host, User, Password, Port, Database name). Run `node src/config/initDb.js` pointing to your remote variables to auto-generate the schema.

### 2. Backend API (Render)
1. Deploy a new **Web Service** on **Render.com** linked to your GitHub repo.
2. Set the **Root Directory** to `backend`.
3. Set the **Build Command** to `npm install`.
4. Set the **Start Command** to `npm start`.
5. Inject your Database credentials and JWT secrets under **Environment Variables**.

### 3. Frontend (Vercel or Netlify)
1. Deploy a new **Project** on **Vercel** or **Netlify** linked to your GitHub repo.
2. Set the **Root Directory** to `frontend`.
3. Select **Create React App** as the framework preset.
4. Set the **Build Command** to `npm run build`.
5. Set the **Output Directory** to `build`.
   - `REACT_APP_API_URL` = `https://your-backend-app.onrender.com/api`

---

## 📬 Postman API Integration & Testing

We have included a complete Postman collection v2.1.0 in the root of the project: [secure-notes.postman_collection.json](file:///d:/PROJECTS/secure-notes/secure-notes.postman_collection.json).

### How to Import and Use:
1. Open the **Postman** desktop application or web client.
2. Click **Import** in the top left corner.
3. Drag and drop the `secure-notes.postman_collection.json` file from the root directory into the upload box (or choose **File** and select it).
4. Configure your `baseUrl` variable to point either to:
   - Local development: `http://localhost:5000`
   - Production API: `https://secure-notes-g5ax.onrender.com`
5. **Zero-friction Testing**: Calling the **Login User** request automatically extracts the `accessToken` and `refreshToken` and saves them to your environment. All subsequent requests (like creating or deleting notes) will automatically inject the token headers without any manual copy-paste!
