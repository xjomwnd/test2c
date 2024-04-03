var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongodb = require('./db/connect');
var users = require('./routes/users');
const mongoose = require('mongoose');
require('dotenv').config();

var app = express();

mongoose.set('strictQuery', false);

const uri = 'mongodb+srv://ndimong:<password>@cluster0.iwufs.mongodb.net/';


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
