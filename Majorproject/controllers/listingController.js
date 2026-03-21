
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const listingSchema = require('../schema');





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
    if (!listing) return res.status(404).send("Listing not found");

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

    res.redirect("/listing/" + id);
  }

  );


// DELETE
module.exports.delete_route_post =wrapAsync(async (req, res) => {
  const { id } = req.params;


    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");

});


// NEW PAGE
module.exports.new_route = (req, res) => {
  res.render("listings/new");
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

    res.redirect("/listing");

  });


// SHOW ROUTE

module.exports.show_indivdual_listing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    return next(new ExpressError("Listing Not Found", 404));
  }

  res.render("listings/show", { listing });
});