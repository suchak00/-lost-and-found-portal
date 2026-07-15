require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

const db = pool.promise();

db.query('SELECT 1')
  .then(() => console.log('MySQL connected ✓'))
  .catch(err => console.error('MySQL error:', err.message));

module.exports = db;