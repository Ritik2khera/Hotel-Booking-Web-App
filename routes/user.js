const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
const { route } = require("./listing.js");

//get request for signup
router.route("/signup")
.get(userController.renderSignupForm)
.post(userController.signup);

router.route("/login")
//get request for login
.get(userController.renderForm)
//post request for login
.post(saveRedirectUrl, passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userController.login);

//get request for logout
router.get("/logout",userController.logout);
module.exports = router;
