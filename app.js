const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 80;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function (req, res) {
  res.send('you have no right to access this page.');
});

app.post('/insert-url-and-phone', function (req, res) {
  let url = req.params.url;
  let phone = req.params.phone;
  let urlId = req.params.url_id;
  // res.send(url + ' ' + phone + ' ' + urlId);

  var request = require('request');
  request.post({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://x.rce.tw/s/h3584935/insert_url_and_phone.php',
    body: 'url=' + url + '&phone=' + phone + '&url_id=' + urlId
  }, function (error, response, body) {
    res.send(body);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});