var express = require ('express');
var PORT = 8082;

var app=express();
app.get ('/', function(req, res)
{
    res.sendFile ('shoppingcar.html')
});

app.listen (PORT);
console.log ('Running on port ' + PORT);