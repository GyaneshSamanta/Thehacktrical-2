const express = require("express");
require('dotenv').config();
const passport = require("passport");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.render("login",{clientId:process.env.GOOGLE_CLIENT_ID});
});
router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req, res, next) => {}
);

//does serializing too
router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res, next) => {
    res.redirect("/home");
  }
);

router.get("/logout", (req, res, next) => {
  req.logOut();
  res.redirect("/login");
});

module.exports = router;
