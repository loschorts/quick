var express = require('express');

var app = express();

let _letters = '';

app.get('/', function (req, res) {
	_letters += req.originalUrl.slice(2);
  res.send(_letters);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});