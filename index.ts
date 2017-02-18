var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies

app.get('/', function (req, res) {
  var options = {
    url: 'http://localhost:3000/post',
    method: 'POST',
    json: true,
    body: {
      id: 1,
      name: 'Marc'
    }
  }

  request(options, function (error, response, body) {
    console.log(body);
  });
});

app.post('/post', function(req, res){
  console.log(req.body.id);
  res.send('Hello World!');
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
