const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'testdb'
});

app.get('/api/data', (req, res) => {
  db.query('SELECT message FROM messages LIMIT 1', (err, results) => {
    if (err) return res.json({ error: err });
    res.json({ message: results[0].message });
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
