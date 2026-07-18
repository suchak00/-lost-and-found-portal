require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const session  = require('express-session');
const passport = require('passport');

require('./config/passport');
require('./config/db');

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth',        require('./routes/auth'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/admin',   require('./routes/admin'));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Lost & Found API running ✓' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));