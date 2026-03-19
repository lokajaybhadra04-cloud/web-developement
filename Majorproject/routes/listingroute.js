const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");

// INDEX ROUTE (Show all listings)
router.get("/", listingController.index);

// Creater NEW LISTING
router.get("/new", listingController.new_route);
router.post("/new", listingController.new_route_post);

// SHOW INDIVIDUAL LISTING
router.get("/:id", listingController.show_indivdual_listing);

// EDIT `
router.get("/:id/edit", listingController.Updateroute);
router.post("/:id/edit", listingController.Update_route_post);

// DELETE ROUTE
router.post("/:id/delete", listingController.delete_route_post);

module.exports = router;