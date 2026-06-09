const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const User = require("../models/user.js");



//signup form route
module.exports.signupForm =wrapAsync( async (req, res) => {


    // Here you would typically add code to
    //  create a new user in your database



    res.render("user/signup");





// res.render("user/signup");

});


module.exports.signup = wrapAsync(async (req, res) => {
  try {
    // Here you would typically add code to
    //  create a new user in your database
    const { username, email, password } = req.body; 
    const newUser = new User({ username, email });
 const registeredUser=   await User.register(newUser, password); 
    // Using passport-local-mongoose to
    //  handle password hashing

    //when user signup automatically user should
    //  be login the user and redirect to the 
    // listing page
    await req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
        req.flash("success", "Welcome to  WanderLust! You are logged in!");
    return res.redirect("/listing");
     
    });


  

   }
    catch (err) {
        //flash the error message and redirect back to the signup form
        req.flash("error", err.message);
        return res.redirect("/signup");
    }

  });









  //login form route
module.exports.loginForm = wrapAsync(async (req, res) => {
    res.render("user/login");
});

module.exports.login = wrapAsync(async (req, res) => {
    
    // Here you would typically add code to
    //  authenticate the user using Passport.js
    //  and establish a session

    
    // After successful login, you can redirect the user to the desired page
    req.flash("success", "Welcome to  Wanderlust! You are logged in!");
    res.redirect(res.locals.redirectUrl || "/listing");
});




module.exports.logout = wrapAsync(async (req, res) => {
    // Here you would typically add code to
    //  log the user out and destroy the session    
    req.logout(  (err)=>{
        if (err) 
            { return next(err); 

            }
        req.flash("success", "You have been logged out.");
        res.redirect("/login");
      } );
});