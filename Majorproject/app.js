const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WanderLust");
}

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Root Route
app.get("/", (req, res) => {
  res.send("I am root route");
});











// =========================
// INDEX ROUTE (Show all listings)
// =========================
app.get("/listing", async (req, res) => {

  try {

    let { minPrice, maxPrice, category } = req.query;

    let filter = {};

    // PRICE FILTER
    if (minPrice || maxPrice) {

      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }

    }

    // CATEGORY FILTER
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

});


// =========================
// UPDATE ROUTE
// =========================
app.get("/listing/:id/edit", async (req, res) => {

  const { id } = req.params;
  try {

    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("listings/edit", { listing });
  } catch (err) {
    console.log("Error fetching listing for edit:", err);
    res.status(500).send("Error fetching listing for edit");
  }
});




app.post("/listing/:id/edit", async (req, res) => {

  const { id } = req.params;

  try {

    const listing = await Listing.findByIdAndUpdate(
      id,
      req.body,
      { returnDocument: "after" }
    );

    if (!listing) {
      return res.status(404).send("Listing not found");
    }

    res.redirect("/listing/" + id);

  } catch (err) {

    console.log("Error updating listing:", err);
    res.status(500).send("Error updating listing");

  }

});


// =========================
// DELETE ROUTE
// =========================
app.post("/listing/:id/delete", async (req, res) => {

  const { id } = req.params;

  try {

    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      return res.status(404).send("Listing not found");
    }

    res.redirect("/listing");

  } catch (err) {

    console.log("Error deleting listing:", err);
    res.status(500).send("Error deleting listing");

  }

});



//create new route listing:
app.get("/listing/new", (req, res) => {
  res.render("listings/new");
});

app.post("/listing/new", async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.redirect("/listing");
  } catch (err) {
    console.log("Error creating listing:", err);
    res.status(500).send("Error creating listing");
  }
});






//show indivual listing when click
//route show route
app.get("/listing/:id", async (req, res) => {
 const { id } = req.params;  
  try { 
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("listings/show", { listing });
  } catch (err) {
    console.log("Error fetching listing:", err);
    res.status(500).send("Error fetching listing");
  }
});




// Server
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
