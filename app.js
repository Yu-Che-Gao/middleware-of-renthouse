const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const lib = reqire('./lib.js');
const port = process.env.PORT || 80;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.send('you have no right to access this page.');
});

app.post('/insert-url-and-phone', function (req, res) {
  let url = req.body.url;
  let phone = req.body.phone;
  let urlId = req.body.url_id;
  lib.insertDB(url, phone, urlId);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

