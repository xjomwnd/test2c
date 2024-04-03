var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongodb = require('./db/connect');
var users = require('./routes/users');
const mongoose = require('mongoose');
require('dotenv').config();

var app = express();



const uri = 'mongodb+srv://ndimong:<password>@cluster0.iwufs.mongodb.net/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } 
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/', users);

module.exports = app;
