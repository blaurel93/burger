var express = require("express");
var orm = require("./config/orm.js");
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars")
var app = express();
const cTable = require('console.table');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");


// orm.insertOne("Fat");
orm.selectAll("burgers");
// orm.updateOne("BooBoo",15);
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});