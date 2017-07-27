const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const session = require("express-session");

const usersPermit = {
  email: "cookiesareyummy@homework.com",
  password: "nOmN0m503"
};

app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");

// this sets up a session store using the express-session npm
app.use(session({
    secret: 'what-is-the-secret?',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true }
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
