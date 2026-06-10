const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const Review = require("./reviews");

const listingSchema = new Schema({

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
  },


reviews:[
  {
    type: Schema.Types.ObjectId,
    ref:"Review",
  }
],

// add owner field to the listing schema to
//  associate each listing with a user
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

},





{ timestamps: true }// what it does is it adds createdAt and updatedAt fields to the schema);
);






//middleware that delete the reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews }});
  }
});



const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;