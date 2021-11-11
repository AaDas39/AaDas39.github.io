var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next();
});

//console.log("Hello World");

/*app.get("/", (req, res) => {
  res.send("Hello Express");
});*/

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public/style.css"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  var response = { "message": "Hello json" };
  //var response = "Hello json".toUpperCase();

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  } else {
    res.json(response);
  }
});




































module.exports = app;
