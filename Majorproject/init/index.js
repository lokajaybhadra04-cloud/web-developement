const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing=require("../models/listing.js");

async function initDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/WanderLust");
        console.log("Connected to MongoDB for seeding!");   
        await Listing.deleteMany({});
        console.log("Existing listings cleared!");   
        await Listing.insertMany(initData.data);
        console.log("Database seeded with sample listings!");   
    } catch (err) {
        console.error("Error seeding the database:");
    }  
     finally {   
        mongoose.connection.close();
        console.log("MongoDB connection closed after seeding.");
    }   
}

initDB();   
