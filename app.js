var express = require('express');
var app = express();

var oneYear = 31557600000;
app.use(express.static(__dirname + '/public', { maxAge:oneYear }));
console.log("server started at port 3000")
app.listen(3000);
