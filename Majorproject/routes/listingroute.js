const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");
const { validateListing } = require("../middleware");
const { validateReview } = require("../middleware1");
const {isloggedin ,isAuthor}=require("../middleware2.js");


// INDEX
router.get("/", listingController.index);

// NEW
router.get("/new", isloggedin, listingController.new_route);
router.post("/new", isloggedin, validateListing, listingController.new_route_post);

// SHOW
router.get("/:id", isloggedin, listingController.show_indivdual_listing);

// EDIT
router.get("/:id/edit", isloggedin, isAuthor, listingController.Updateroute);
router.post("/:id/edit", isloggedin, isAuthor, validateListing, listingController.Update_route_post);

// DELETE
router.post("/:id/delete", isloggedin, isAuthor, listingController.delete_route_post);


//post reviews
router.post("/:id/reviews", isloggedin, validateReview, listingController.writing_Reviews);

//delte reviews
router.post("/:id/reviews/:reviewId/delete", isloggedin, isAuthor, listingController.delete_review);


module.exports = router;