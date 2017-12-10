const express = require('express');
const app = express();

app.get("/", function(req, res){
    console.log("started / call");
    res.send("<h1>Hello world mn</h1>");
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