const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// Logger
app.use(logger('dev'));

// body parsers
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

// routes
const CompanyRouter = require("./routes/company.routes");
const Jobtype = require("./routes/job_type.routes");
const Postedon = require("./routes/posted_on.routes");
const Job = require("./routes/job.routes");
const Schedule = require("./routes/schedule.routes");


// Connect Database
connectDB();

app.use("/company", CompanyRouter);
app.use("/jobtype", Jobtype);
app.use("/postedon", Postedon);
app.use("/job", Job);
app.use("/schedule",Schedule);


const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});