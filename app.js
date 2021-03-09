const express = require('express');
const connectDB = require('./config/db');


const app = express();

// Connect Database

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://taz:<B967C73C>@cluster0.j5yri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));