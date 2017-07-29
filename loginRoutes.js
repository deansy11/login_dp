const express = require("express");
const router = express.Router();

let users = {
  "email" : "cookiesareyummy@homework.com",
  "password" : "nOmN0m503";
}
//
router.get("/", (req, res) = > {
  console.log("Is working?");
  res.render("index", {
    users : users;
  });
});
// const sessionStore = {
// };
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
