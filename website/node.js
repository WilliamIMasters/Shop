var express = require("express");
var app = express();

app.use(express.static("public"));




app.get("/", function(req, res) {
   res.sendFile(__dirname + "/public/home.html");

});

app.get("/home", function(req, res) {
   //res.sendFile(__dirname + "/public/home.html");
   res.redirect(".");
});
app.get("/shop", function(req, res) {
   res.sendFile(__dirname + "/public/shop.html");

});
app.get("/contact", function(req, res) {
   res.sendFile(__dirname + "/public/contact.html");

});
app.get("/cart", function(req, res) {
   res.send("Sorry, this feature is not currently available </br><a href='.'> Home </a>");
});




app.listen(80);
