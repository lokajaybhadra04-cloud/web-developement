const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");
const { validateListing } = require("../middleware");
const { validateReview } = require("../middleware1");
// INDEX
router.get("/", listingController.index);

// NEW
router.get("/new", listingController.new_route);
router.post("/new", validateListing, listingController.new_route_post);

// SHOW
router.get("/:id", listingController.show_indivdual_listing);

// EDIT
router.get("/:id/edit", listingController.Updateroute);
router.post("/:id/edit", validateListing, listingController.Update_route_post);

// DELETE
router.post("/:id/delete", listingController.delete_route_post);


//post reviews
router.post("/:id/reviews", validateReview, listingController.writing_Reviews);

//delte reviews
router.post("/:id/reviews/:reviewId/delete", listingController.delete_review);


module.exports = router;