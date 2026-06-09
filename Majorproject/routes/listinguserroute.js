const express = require("express");
const router = express.Router();
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware2.js");



const listinguserController = require("../controllers/listinguserController");
//signup form route
router.get("/signup", listinguserController.signupForm);

router.post("/signup", listinguserController.signup);


//login form route
router.get("/login", listinguserController.loginForm);

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), listinguserController.login);

router.get("/logout", listinguserController.logout);


module.exports = router;    





