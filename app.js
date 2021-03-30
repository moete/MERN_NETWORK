const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Use Cors

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

const port = process.env.PORT || 5000;
//routes
const QuestionsRouter = require('./ContentBack/routes/apiContent/question');
const CoursesRouter = require('./ContentBack/routes/apiContent/course');

app.use('/question', QuestionsRouter);
app.use('/course', CoursesRouter)


app.listen(port, () => console.log(`Server running on port ${port}`));
