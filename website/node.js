var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
   res.sendFile(__dirname + "/" + "public/home.html");
});

var server = app.listen(8080, function() {
   var host = server.address().address;
   var port = server.address().port;
});

var server = app.listen(80, function() {
   var host = server.address().address;
   var port = server.address().port;
});
