const express = require("express");
const router = express.Router();

const sessionStore = {
};

let user = {
  "email" : "cookiesareyummy@homework.com",
  "password" : "nOmN0m503"
};
//
router.get("/", (req, res) => {
  console.log("Is working?");
  res.render("index", {
    user : user
  });
});

router.get("/userLogin", (req, res) => {
  if(isLoggedIn(req)) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

router.post("/userLogin", (req, res) => {
  if(req.body.email === user.email && req.body.password === user.password) {
    req.body.user = user.email;
    req.body.password = user.password;
    sessionStore[req.session.id] = req.session;
    res.send("You're logged in!");
  } else {
    res.send("You're not logged in. Please try again.")
  }
});

// router.post("/userLogin", (req, res) => {
//   console.log("Login request", req.body);
//   req.checkBody("email", "You must provide an email.").notEmpty();
//
//   req.getValidationResult().then(result => {
//     if (!result.isEmpty()) {
//       res.render("index", { error: "Please enter your login information."});
//     }
//
//   })
// })
//
//
//
// router.post("/logins", (req, res) => {
//   console.log("Is this working??", req.body);
//   req.checkBody("email", "You must provide an email.").notEmpty();
//
//   req.getValidationResult().then(result => {
//     if (!result.isEmpty()) {
//       res.render("index", { error: "Please enter your email." });
//       return;
//     }
// });

module.exports = router;
