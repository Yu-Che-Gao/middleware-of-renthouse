const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('testing');
});

// app.post('/insert-url-and-phone', function (req, res) {
//   let url = req.param('url');
//   let phone = req.param('phone');
//   let urlId = req.param('url_id');
//   res.charset = 'utf-8';
//   res.send(url + ' ' + phone + ' ' + urlId);
// });

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});