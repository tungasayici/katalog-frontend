//Install express server
const express = require('express');
const path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var busboy = require('connect-busboy');

const app = express();

var fs = require('fs');
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/DTKatalog'));
app.use(logger('dev'));
app.use(busboy({ immediate: true }));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname + '/dist/DTKatalog/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.post('/upload-file', function(req, res, next) {
    var fstream;
    console.log("postladı"); 
    console.log(req.busboy)
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