var express = require('express');
var bodyParser = require('body-parser');
var {postSearch, selectAll} = require('../database-mongo/index.js');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/searches', function (req, res) {
  selectAll(req.query.cookieID, (err, foundSearches) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(foundSearches);
    }
  })
});

app.post('/searches', function (req, res) {
  postSearch(req.body, (err, savedSearch) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(savedSearch);
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

