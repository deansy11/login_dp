const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressValidator = require("express-validator");
const fs = require("fs");
const morgan = require("morgan");

const usersPermit = {
  email: "cookiesareyummy@homework.com",
  password: "nOmN0m503"
};

// sets up body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("mustache", mustacheExpress());

// turn on template engine
app.set("view engine", "mustache");

// assign where views are stored
app.set("views", __dirname + "/views");

// sets up express-validator
app.use(expressValidator());


app.get("/", (req, res) => {
  res.render("index", {});
  console.log("Can I read mustache?");
});

// this sets up a session store using the express-session npm
app.use(session({
    secret: 'what-is-the-secret?',
    resave: false,
    saveUninitialized: false,
    // cookie: {secure: true }
  })
);

// this tracks our views
app.use((req, res, next) => {
  console.log(req.session);
  if (!req.session.views) {
    req.session.views = 0;
  }
  req.session.views += 1;
  next();
});

app.listen(3000, () =>{
  console.log("Node running at http://localhost3000");
});
