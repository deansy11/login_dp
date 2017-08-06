const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressValidator = require("express-validator");
const fs = require("fs");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const login = require("./loginRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
// assign where views are stored
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.use(cookieParser);
app.use(session);
app.use(expressValidator());
app.use(morgan('dev'));


app.listen(3000, () =>{
  console.log("Node running at http://localhost:3000");
});
