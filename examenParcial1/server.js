var express = require ('express');
var PORT = 8083;

var app=express();
app.get ('/', function(req, res)
{
    //app.use('/public', express.static(__dirname + '/public'));
    res.sendfile ('index.html')
});

app.listen (PORT);
console.log ('Running on port ' + PORT);