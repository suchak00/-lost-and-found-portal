require('dotenv').config();
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const useSSL = process.env.DB_SSL === 'true';

const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT || 3306,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  ...(useSSL && {
    ssl: {
      ca: fs.readFileSync(path.join(__dirname, 'aiven-ca.pem')),
    },
  }),
});

const db = pool.promise();
db.rawPool = pool;   // ← add this line, exposes the raw pool for express-mysql-session

db.query('SELECT 1')
  .then(() => console.log('MySQL connected ✓'))
  .catch(err => console.error('MySQL error:', err.message));

module.exports = db;