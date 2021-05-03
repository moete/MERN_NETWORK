const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());

// Connect Database
connectDB();
var corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));
// init midlleware
app.use(express.json({ extended: false }));

//publish fanout

// Logger
app.use(logger('dev'));

// body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
const CompanyRouter = require('./routes/company.routes');
const Jobtype = require('./routes/job_type.routes');
const Postedon = require('./routes/posted_on.routes');
const Job = require('./routes/job.routes');
const Schedule = require('./routes/schedule.routes');
const PdfRouter = require('./routes/pdf.routes');

app.use('/company', CompanyRouter);
app.use('/jobtype', Jobtype);
app.use('/postedon', Postedon);
app.use('/job', Job);
app.use('/schedule', Schedule);
app.use('/pdf',PdfRouter);

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
