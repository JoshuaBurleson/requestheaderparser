const express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    var parsedHeadObj = {ipaddress : null,
                         language : null,
                         software : null,
                        };
    parsedHeadObj.ipaddress = req.connection.remoteAddress;
    parsedHeadObj.language = req.headers['accept-language'].split(',')[0];
    parsedHeadObj.software = req.headers['user-agent'].split('(')[1].split(')')[0];
    res.end(JSON.stringify(parsedHeadObj));
});

app.listen(port);   
