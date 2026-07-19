require('dotenv').config();
const db = require('../config/db');
const email = process.argv[2];
(async () => {
  const [rows] = await db.query('SELECT id, email, role FROM users WHERE email = ?', [email]);
  console.log(rows);
  process.exit(0);
})();
