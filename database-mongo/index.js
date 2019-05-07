var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/searches', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var searchSchema = mongoose.Schema({
  cookieID: String,
  timezones: [{
    type: String
  }],
  times: [{
    type: String
  }]
});

var Search = mongoose.model('Searches', searchSchema);

var selectAll = function(cookieID, callback) {
  Search.find({cookieID: cookieID}, function(err, pastSearches) {
    if(err) {
      callback(err, null);
    } else {
      console.log('pastSearches', pastSearches);
      callback(null, pastSearches);
    }
  });
};

var postSearch = function(data, callback) {
  var newSearch = new Search({
    cookieID: data.cookieID,
    times: data.times,
    timezones: data.timezones
  });
  newSearch.save((err, savedSearch) => {
    if (err) {
      callback(err);
    } else {
      callback(null, savedSearch);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.postSearch = postSearch;