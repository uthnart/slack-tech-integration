'use strict';

// import external modules
var express = require('express');

var app =  express();

var port = 3000;


app.post('/slack/command', function(req, res){
    console.log('Recieved data from Slack:');
    console.log(req);
});


app.listen(port, function () {
    console.log('Express server listening on port %d', port);
});
