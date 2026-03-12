const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    trim: true
  },

  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1772955527473-14ab0ae328af?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=gadiel-lazcano-5xo1pWASmnY-unsplash.jpg"
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  location: {
    type: String,
    required: true,
    trim: true
  },

  country: {
    type: String,
    required: true,
    trim: true
  },

  // Category for filtering
  category: {
    type: String,
    enum: ["Beach", "Mountain", "City", "Forest"],
    default: "City"
  }

});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;