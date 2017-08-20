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

const userPermit = {
  name: "Wonder Woman",
  email: "wwoman@gmail.com",
  password: "password"
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.use(cookieParser);
app.use(session);
app.get("/user/:user", (req, res) => {
  res.cookie("name", req.params.user)
  console.log(req.params.user);
})

app.get("/user", (req, res) => {
  res.send(req.cookies.name);
})
app.use(expressValidator());
app.use(morgan('dev'));


app.listen(3000, () =>{
  console.log("Node running at http://localhost:3000");
});
