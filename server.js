//Install express server
const express = require('express');
const path = require('path');

const app = express();

var fs = require('fs');
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/DTKatalog'));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname + '/dist/DTKatalog/index.html'));
});

app.post('/upload-file', function(req, res, next) {
    var fstream;
    console.log("postladı"); 
    if (req.busboy) {
  
      req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
          console.log("server bussby içi")
        fstream = fs.createWriteStream(__dirname + '/../../public/my-files/' + filename);
        file.pipe(fstream);
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

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);