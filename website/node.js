var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
   res.sendFile(__dirname + "/" + "public/home.html");
});

app.listen(8080);
app.listen(80);

// var server = app.listen(8080, function() {
//    var host = server.address().address;
//    var port = server.address().port;
// });
//
// var server = app.listen(80, function() {
//    var host = server.address().address;
//    var port = server.address().port;
// });
