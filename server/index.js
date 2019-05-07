var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/searches', function (req, res) {
});

app.post('/searches', function (req, res) {
  console.log('in the req', req.body);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

