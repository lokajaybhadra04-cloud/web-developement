const Listing = require("../models/listing");

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
module.exports.Updateroute = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id);
    if (!listing) return res.status(404).send("Listing not found");

    res.render("listings/edit", { listing });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching listing");
  }
};


// UPDATE POST
module.exports.Update_route_post = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findByIdAndUpdate(
      id,
      req.body,
      { returnDocument: "after" }
    );

    if (!listing) return res.status(404).send("Listing not found");

    res.redirect("/listing/" + id);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating listing");
  }
};


// DELETE
module.exports.delete_route_post = async (req, res) => {
  const { id } = req.params;

  try {
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");

  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting listing");
  }
};


// NEW PAGE
module.exports.new_route = (req, res) => {
  res.render("listings/new");
};


// CREATE LISTING
module.exports.new_route_post = async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();

    res.redirect("/listing");

  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating listing");
  }
};


// SHOW ROUTE
module.exports.show_indivdual_listing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id);

    if (!listing) return res.status(404).send("Listing not found");

    res.render("listings/show", { listing });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching listing");
  }
};