import { TogglTracker } from './TogglTracker';

let express = require('express');
let request = require('request');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json()); // support json encoded bodies

let tracker = new TogglTracker('de017ec570aa74d5956c648a9bd202e1');

app.post('/start', function(req, res){
  let projectId = req.body.id;
  console.log(projectId);
  tracker.start(projectId, function() {
    res.send('Succes');
  });
});

app.post('/stop', function(req, res){
  tracker.stop();
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
