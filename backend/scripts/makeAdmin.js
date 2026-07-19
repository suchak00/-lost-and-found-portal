require('dotenv').config();
const db = require('../config/db');

const email = process.argv[2];

if (!email) {
  console.error('Usage: node scripts/makeAdmin.js suchak3693@gmail.com');
  process.exit(1);
}

(async () => {
  try {
    const [result] = await db.query(
      `UPDATE users SET role = 'admin' WHERE email = ?`,
      [email]
    );
    if (result.affectedRows === 0) {
      console.log(`No user found with ${email} - log in at least once first, then rerun this.`);
    } else {
      console.log(`${email} is now an admin.`);
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
  process.exit(0);
})();
