const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const reviewController = require("../controllers/review.js")

const  {listingSchema, reviewSchema} = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
 const ExpressError = require("../utils/ExpressError.js");
 const Listing = require("../models/listing.js");

 const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");



router.post("/reviews",isLoggedIn ,validateReview,wrapAsync(reviewController.createReview));

//delete review route
router.delete("/reviews/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync( reviewController.destroyReview));




module.exports = router;
