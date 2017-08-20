const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const login = require("./loginRoutes");
const url = require("url");

const userPermit = {
  name: "Wonder Woman",
  email: "wwoman@gmail.com",
  password: "password"
};

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(
  session({
    secret: "helloPass",
    resave: false,
    saveUninitialized: false
  })
);

app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = 0;
  }
  req.session.views += 1;
  next();
})

app.use((req, res, next) => {
  if(req.body.email === userPermit.email) {
    if (req.body.password === userPermit.password) {
      req.session.login = true;
      req.session.name = userPermit.name;
    }
  }
  next();
});

app.use(require("./loginRoutes"))

app.listen(3000, () => {
  console.log("Node running at http://localhost:3000");
});
