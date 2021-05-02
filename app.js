const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config/twilio');
var path = require("path");
const app = express();



//publish fanout

// Logger
app.use(logger('dev'));

// body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


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


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});


/*
app.post("sms",Twilio.webhook(config.twilio),function(req,res){
  var addOn = JSON.parse(req.parse.AddOns);

  var msg = {
    text : req.body.Body , 
    from : req.body.from , 
    sentiment: addOn.results.marchex_sentiment.result.result,
    country: req.body.FromCountry  }
    // Create a TwiML response
  var twiml = new Twilio.TwimlResponse();
  twiml.message("Message received");

  // Send the TwiML response as XML
  res.send(twiml.toString());
});
*/