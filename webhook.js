var express = require('express');
var app = express();
var git = require('simple-git');
// executes `pwd`

app.get('/', function (req, res) {

  console.log(__dirname);

  git(__dirname)
     .pull(function(err, update) {

       console.log('Paso');
        if(update && update.summary.changes) {
           require('child_process').exec('npm restart',function(error, stdout, stderr) {
              if (error) {
                console.error('exec error: ', error);
                console.log('stderr: ', stderr);
                return;
              }
              console.log(stdout);
            });
        }
      });
});

app.listen(6591, function () {
  console.log('Fedora LATAM WebHook listen on 6591!');
});
