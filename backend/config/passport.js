const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./db');

passport.use(new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:  process.env.GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists
    const [rows] = await db.query(
      'SELECT * FROM users WHERE google_id = ?',
      [profile.id]
    );
    if (rows.length > 0) return done(null, rows[0]);

    // First time — create the user
    const [result] = await db.query(
      'INSERT INTO users (google_id, name, email, avatar_url) VALUES (?,?,?,?)',
      [
        profile.id,
        profile.displayName,
        profile.emails[0].value,
        profile.photos[0].value,
      ]
    );
    const [newUser] = await db.query(
      'SELECT * FROM users WHERE id = ?',
      [result.insertId]
    );
    return done(null, newUser[0]);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  done(null, rows[0] || false);
});