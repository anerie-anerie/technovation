import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; // Note the .js extension
import db from './db.js'; // Import the db connection with ES Modules syntax

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use routes
app.use('/api/auth', authRoutes);

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5000', // Your React app's origin
  credentials: true
}));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
