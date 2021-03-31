const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

// Connect Database
connectDB();
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// init midlleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
  res.send('API Running');
});

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
