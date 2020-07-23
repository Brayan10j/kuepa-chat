const express = require('express');
const app = express();

const path = require('path');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const { TRUE } = require('node-sass');


// settings 
app.set('port', process.env.PORT || 4000);


// middlewares  -- funciones antes que llegue al server

app.use(cors());
app.use(express.urlencoded({extended: TRUE}));
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Global Variables


// routes

app.use('/api', require('./routes/users'));



// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
module.exports = app;
