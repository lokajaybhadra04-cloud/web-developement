require("dotenv").config({ path: "../.env" });
const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing=require("../models/listing.js");

async function initDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding!");   
        await Listing.deleteMany({});
        console.log("Existing listings cleared!"); 
        //  add owwner in the data.js file to associate 
        // each listing with a userusing map function 

          

             initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: "6a242035bf4c15d47478c62a" 
            // Replace with actual user ID from your
            //  database
            }
        )  );   
        //explain above the code: The code above is
        //  mapping through the existing data in initData.data 
        // and adding an "owner" field to each listing object.
        //  The value of the "owner" field is set to a specific 
        // user ID ("64b8c9e5f1a2c9b1d2e3f4a"). This is done to
        //  associate each listing with a user in the database.
        //  You should replace this hardcoded user ID with an 
        // actual user ID from your database to ensure that 
        // the listings are correctly linked to a valid user.   



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
