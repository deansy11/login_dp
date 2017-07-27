const express = require("express");
const router = express.Router();

router.get("/", (req, res) = > {
  res.render("index", {})
});

router.post("/", (req, res) => {
  console.log("Is this working??");
  res.send(req.body);
})


module.exports = router;
