var express = require('express'),
    app = express(),
    fs = require('fs'),
    routes;

require('./db');

app.configure(function() {
    var logFile = fs.createWriteStream('./logs/application.log', {flags: 'a'});
    app.use(express.logger({stream: logFile}));
    app.use(express.static(__dirname + '/public'));
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
});

app.configure('development', function() {
    app.use(express.logger());
    app.use(
        express.errorHandler({
            dumpExceptions: true,
            showStack: true
        })
    );
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

require('./routes')(app);

app.listen(3000);

console.log("Server started.");
