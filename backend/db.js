import mysql from 'mysql2';

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mySQLroot!23',  // Replace this with your MySQL password
  database: 'tech'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the MySQL server');
});

export default db; // Use export default to export the db connection
