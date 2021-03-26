// app.js

const express = require('express');
const connectDB = require('./config/db');

var questionRouter = require('./routes/apiContent/questions');
const app = express();

// Use Cors

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();


app.use('/question',questionRouter);


app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
