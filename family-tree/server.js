var express = require('express');
var path = require('path');
var user = require('./models/user');
var book = require('./models/books');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost/family-tree' );

var bob = new user({
  firstName: 'Bob',
  email: 'bob@ga.co',
  meta: {
    age: 27
  }
});

var newUser = new user({
  firstName: 'gerry',
  email: 'gerry@gmail.com',
  password: 'password'
});

newUser.save( function( err ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log( 'User created!' );
    }
});

bob.save( function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log('User created!');
  }
});


bob.sayHello();
