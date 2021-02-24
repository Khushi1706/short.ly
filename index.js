var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('The Index Page');
});


app.post('/shorten',function(req,res){
 res.send('post');
});

// Find long URL from short, and redirect
app.get('/:key', function (req, res) {
    res.send('Your key was: ' + req.key)
});


app.listen(3000,function(){
    console.log('Listening on port 3000');
});
