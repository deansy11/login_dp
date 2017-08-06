const express = require("express");
const router = express.Router();

// const sessionStore = {
// };
//
// const user =  {
//     "id" : "id",
//     "email" : "cookiesareyummy@homework.com",
//     "password" : "nOmN0m503"
// };

// function isLoggedIn(req) {
//   return req.session.name !== undefined
// };

router.get("/", (req, res) => {
  if(sessionStore[req.session.id]) {
    res.send("You're logged in!");
  } else {
    res.send("Please login.");
  }
});

router.get("/login", (req,res) => {
  if(isLoggedIn(req)) {
    res.redirect("/")
  } else {
    res.render("login");
  }
});
router.post("/userLogin", (req, res) => {
  if(req.body.email === user.email && req.body.password === user.password) {
    req.body.user = user.email;
    req.body.password = user.password;
    sessionStore[req.session.id] = req.session;
    res.render("index", { loggedIn: "You're logged in!"});
  } else {
    res.render("index", { error: "You're not logged in. Please try again."});
    return;
  }
});

module.exports = router;
//
// router.get("/", (req, res) => {
//   console.log("Is working?");
//   res.render("index", {
//     user : user
//   });
// });

//
// router.post("/userLogin"), (req, res) => {
//   if(req.body)
// }

//
// router.post("/userLogin", (req, res) => {
//   console.log("Post request", req.body);
//   req.checkBody("email", "You must provide an email.").notEmpty();
//
//   req.getValidationResult().then(result => {
//      if (!result.isEmpty()) {
//        res.render("index", { error: "Please enter your login information."});
//        return;
//      }
//      user.push({
//        email: req.user.email,
//        password: req.user.password
//      });
//      res.redirect("/loggedIn");
//    });
// });


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
