var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var todoController = require("./todoController");
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev"));
todoController(app);
app.listen(port, ()=>{
    console.log("App listenting on port: ", port);
});