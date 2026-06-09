
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const listingSchema = require('../schema');
const reviewSchema = require('../schema1');
const Reviews=require('../models/reviews');







// INDEX ROUTE
module.exports.index = async (req, res) => {
  try {
    let { minPrice, maxPrice, category } = req.query;

    let filter = {};

    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (category && category !== "") {
      filter.category = category;
    }

    const listings = await Listing.find(filter);

    res.render("listings/index", {
      listings,
      minPrice: minPrice || "",
      maxPrice: maxPrice || "",
      category: category || ""
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};


// EDIT PAGE
module.exports.Updateroute = wrapAsync(async (req, res) => 
  {
  const { id } = req.params;

  
    const listing = await Listing.findById(id);
    if (!listing) 
    {
      req.flash("error", "Listing Not Found");
      return res.redirect("/listing");
    }
    
      res.render("listings/edit", { listing });

  
});


// UPDATE POST
module.exports.Update_route_post = wrapAsync(async (req, res,next) =>
   {

     // console.log("Received data:", req.body);
  //  if(!req.body.title || !req.body.price || !req.body.location || !req.body.country){
  //    throw new ExpressError("Send valid for the listing", 400);
  // }   

    
    const { id } = req.params;


    const listing = await Listing.findByIdAndUpdate(id, req.body,{ returnDocument: "after" } );


    
    if (!listing) return res.status(404).send("Listing not found");
    req.flash("success", "Listing updated successfully!");
    res.redirect("/listing/" + id);
  }

  );

 
// DELETE
module.exports.delete_route_post = wrapAsync(async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndDelete(id);

  req.flash("success", "Listing deleted successfully!");

  res.redirect("/listing");
});

// NEW PAGE
module.exports.new_route = (req, res) => {

    return res.render("listings/new");

};


// CREATE LISTING
module.exports.new_route_post = wrapAsync(async (req, res) => { 
  //to check if the data is being received correctly
   // console.log("Received data:", req.body);
  //  if(!req.body.title || !req.body.price || !req.body.location || !req.body.country){
  //    throw new ExpressError("Send valid for the listing", 400);
  // }
     

    const newListing = new Listing(req.body);
    await newListing.save();
    req.flash("success", "Listing created successfully!");
    res.redirect("/listing");

  });


// SHOW ROUTE

module.exports.show_indivdual_listing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findById(id).populate("reviews");

  if (!listing) {
    req.flash("error", "Listing Not Found");
    return res.redirect("/listing");
  }

  res.render("listings/show", { listing });
});




//wrtiting reveiws:
module.exports.writing_Reviews = wrapAsync(async (req, res, next) => {

  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing Not Found");
    return res.redirect("/listing");
  }

  if (!req.body || !req.body.review) {
    return next(
      new ExpressError("Review data missing", 400)
    );
  }

  const newReview = new Reviews(req.body.review);

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  req.flash("success", "Review added successfully!");
  res.status(201).redirect(`/listing/${id}`);
});




// deleting reviews ans also removing the reference from the listing  

module.exports.delete_review = wrapAsync(async (req, res, next) => {

  const { id, reviewId } = req.params;
  const listing = await Listing.findById(id);
  const review = await Reviews.findById(reviewId);

  if (!listing || !review) {
    return next(new ExpressError("Listing or Review Not Found", 404));
  }

  listing.reviews.pull(reviewId);
  await listing.save();
  await review.deleteOne();
  req.flash("success", "Review deleted successfully!");     

  res.redirect(`/listing/${id}`);
});
