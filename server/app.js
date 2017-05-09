'use strict'

var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var credentials = require('./credentials.json');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

console.log('* [example2] sending test email without checking the result');

var send = require('gmail-send')({
  user: credentials.user,           // Your GMail account used to send emails
  pass: credentials.pass,           // Application-specific password
  to:   'husnihabil@rocketmail.com',           // Send to yourself
                                    // you also may set array of recipients:
                                    // [ 'user1@gmail.com', 'user2@gmail.com' ]
  subject: 'jangan marah ya',
  text:    'coba lagi ahhh'   // Plain text
})();

app.use('/', (req, res, next) => {
	res.send('connect');
})

app.listen(3000);

module.exports = app;
