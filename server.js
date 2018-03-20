var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  var reservations = [
    {
      name: "Brenton", 
      email: "brenton@brenton.com", 
      ID: "Brenton", 
      phoneNr: 0120102010
    },
    {
      name: "Ryan", 
      email: "Ryan@brenton.com", 
      ID: "Ryan", 
      phoneNr: 192819832
    },
    {
      name: "Fredrik", 
      email: "Fredrik@brenton.com", 
      ID: "Fredrik", 
      phoneNr: 232323
    },
    {
      name: "Asad", 
      email: "asad@brenton.com", 
      ID: "asad", 
      phoneNr: 343434
    },
]

var waitList = [
  {
    name: "Donald Duck", 
    email: "donald@duck.com", 
    ID: "Donald Duck", 
    phoneNr: 0120102010
  },
  {
    name: "Goofy", 
    email: "Goofy@silly.com", 
    ID: "Goofy", 
    phoneNr: 34343443
  },
  {
    name: "Mickey Mouse", 
    email: "Mickey@mouse.com", 
    ID: "Fredrik", 
    phoneNr: 232323
  },
  {
    name: "Minnie Mouse", 
    email: "Minnie@Mouse.com", 
    ID: "asad", 
    phoneNr: 343434
  },
]

app.get("/api/reservations", function(req, res){
  return res.json(reservations);
}); 

app.get("/api/waitList", function(req, res){
  return res.json(waitList);
}); 

//app.post("/rese")