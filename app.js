const express = require('express');
const app = express();
const path = require('path');

app.get("/", function(req, res){
    // console.log("started / call");
    // res.send("<h1>Hello world mn</h1>");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/game.js", function(req, res){
    res.sendFile(path.join(__dirname + '/game.js'));
});

app.listen(3000, function(error) {
    if (error)
    {
        console.log("error detected");
    } else
    {
        console.log("no error");
    }

});