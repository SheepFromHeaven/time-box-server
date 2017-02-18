import { TogglTracker } from './TogglTracker';

let express = require('express');
let request = require('request');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json()); // support json encoded bodies

let tracker = new TogglTracker('de017ec570aa74d5956c648a9bd202e1');

app.get('/v1/getcolors', function(req, res){

  res.send('0;192;155;64;24');

});

app.get('/v1/rotate', function(req, res){

  let serial = req.query.serial;
  let number = req.query.number;

  console.log(number);
  /*
  tracker.start(projectId, function() {
    res.send('Succes');
  });
  */


  //tracker.stop(function(){});
  res.send(number);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
