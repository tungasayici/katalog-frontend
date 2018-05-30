//Install express server
const express = require('express');
const path = require('path');

//FOR FİLE UPLOAD
var favicon = require('serve-favicon');
var logger = require('morgan');
var busboy = require('connect-busboy');

const app = express();

var fs = require('fs');
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/DTKatalog'));

//FOR FİLE UPLOAD
app.use(logger('dev'));
app.use(busboy({ immediate: true }));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname + '/dist/DTKatalog/index.html'));
});


//FOR FİLE UPLOAD
/*
app.post('/upload-file', function(req, res, next) {

    
    console.log(req);
    console.log(res);
    console.log(next);

    var fstream;
    console.log("postladı"); 
    console.log(req.busboy)
    if (req.busboy) {
      req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        console.log("------>>>>>");
        console.log(file);
        console.log("------>>>>>");
        console.log(encoding);
        console.log("<<<<<<------");
          console.log("server bussby içi")
        fstream = fs.createWriteStream(path.join(__dirname + '/dist/DTKatalog/' + filename));
        file.pipe(fstream);
        console.log(fstream);
        fstream.on('close', function(){
          console.log('file ' + filename + ' uploaded');
        });
      });
      req.busboy.on('finish', function(){
        console.log('finish, files uploaded ');
        res.json({ success : true});
      });
      req.pipe(req.busboy);
    }
  });
*/

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);