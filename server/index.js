// server/index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// example route
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table_name', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
