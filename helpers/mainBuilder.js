(function() {
    'use strict';
    var mainJS =
`var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var port = (process.env.PORT || 8800);
var bodyParser = require('body-parser');

// Use body parser for json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

//Load the application files that are in the public directory
app.use(express.static(__dirname + '/public'));

//So that bower components can be loaded in from the nested "public" directory
app.use('/bower_components', express.static(__dirname + '/bower_components'));

http.listen(port, function(){
    console.log('Load app at: http://localhost:' + port);
});`;
    module.exports = {
        buildMainFile: function () {
            return mainJS;
        }
    };
}());
