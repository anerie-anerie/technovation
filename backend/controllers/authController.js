export const register = (req, res) => {
  console.log('Register endpoint hit', req.body); // 👈 add this line

  const { name, email, password } = req.body;

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err); // 👈 log DB error
      return res.status(500).send('Error registering user');
    }
    res.status(200).send('User registered');
  });
};
  
  export const login = (req, res) => {
    const { email, password } = req.body;
  
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
      if (err) {
        return res.status(500).send('Error logging in');
      }
  
      if (results.length > 0) {
        res.status(200).send('Login successful');
      } else {
        res.status(401).send('Invalid email or password');
      }
    });
  };
  