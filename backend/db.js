import mysql from 'mysql2';

// Create a connection to the database
const db = mysql.createConnection({
  host: 'bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'xzuiy5jyc74zbda5',
  password: 'swqlbvet91pcgd9o',  // Replace this with your MySQL password
  database: 'bvq5kwnqfqg0lcql'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the MySQL server');
});

export default db; // Use export default to export the db connection