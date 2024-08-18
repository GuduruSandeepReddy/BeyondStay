const express = require("express");
const router = express.Router();
const  {listingSchema, reviewSchema} = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner, validateListing} = require("../middleware.js");
const {storage} = require("../cloudConfig.js")

const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const upload = multer({ storage})

// Index Route
router.get("/",  wrapAsync(listingController.index));

// new route
router.get("/new", isLoggedIn ,listingController.renderNewForm);

//create route
router.post("/create",isLoggedIn,upload.single("listing[image]"), validateListing,wrapAsync(listingController.createListing));


router
.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"), validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,  wrapAsync(listingController.destroyListing));



//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync( listingController.renderEditForm));

module.exports = router;
