const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const app = express();
// Use Cors

//app.use(cors());
app.use(express.json());

// Connect Database
connectDB();
var corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// init midlleware
app.use(express.json({ extended: false }));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const port = process.env.PORT || 5000;
//routes

const QuestionsRouter = require('./routes/apiContent/question');
const CoursesRouter = require('./routes/apiContent/course');
const groupsRouter = require('./routes/groupApi/group');
const invitationsRouter = require('./routes/groupApi/invitation');
const membershipsRouter = require('./routes/groupApi/membership');
app.use('/question', QuestionsRouter);
app.use('/course', CoursesRouter);
app.use('/group', groupsRouter);
app.use('/invitation', invitationsRouter);
app.use('/membership', membershipsRouter);

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Server running on port ${port}`));
