const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('test');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});