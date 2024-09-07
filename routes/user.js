const express = require("express");
const router = express.Router();
const  {listingSchema, reviewSchema} = require("../schema.js");
const user = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js")


const listingController = require("../controllers/listing.js");
router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(saveRedirectUrl, wrapAsync(userController.signup));


router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate('local',{ failureRedirect: '/login', failureFlash: true }), wrapAsync(userController.login));


router.get("/logout",userController.logout);


router.get("/",  wrapAsync(listingController.index));


module.exports = router;